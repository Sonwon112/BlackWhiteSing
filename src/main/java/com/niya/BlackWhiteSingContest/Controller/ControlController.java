package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.niya.BlackWhiteSingContest.Model.ControlDTO;
import com.niya.BlackWhiteSingContest.Service.ControlService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/control")
@Controller
@Slf4j
public class ControlController {

	private static final String CHANGE_SCREEN_EVENT = "changeScreen";
	private static final String DRAW_PARTICIPANT_EVENT = "drawParticipant";
	private static final String DRAW_CARD_EVENT = "drawCard";
	private static final String DRAW_THEME_EVENT = "drawTheme";
	private static final String SET_TEAM_EVENT = "setTeam";
	private static final String OVERLAY = "overlay";

	@Autowired
	private ControlService service;

	@Value("${token}")
	private String tokenKey;

	@GetMapping("")
	public String MainControl(@RequestParam(value = "token") String token, Model model) {
		if (!token.equals(tokenKey)) {
			model.addAttribute("msg", "잘못된 접근입니다");
			model.addAttribute("url", "/");
			return "alert";
		}

		return "control";
	}
	
	/**
	 * 화면 변경
	 * @param dto
	 * @return
	 */
	@PostMapping("/change")
	public ResponseEntity<ControlDTO> ChangeMode(@RequestBody ControlDTO dto) {

		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());

		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}

		switch (dto.getTag()) {
		case "0":
			log.info("로고화면 출력");
			break;
		case "1":
			log.info("1라운드 추첨");
			service.setRound(1);
			break;
		case "2":
			log.info("1라운드 대진표 표시");
			service.setRound(1);
			break;
		case "3":
			log.info("2라운드 추첨");
			service.setRound(2);
			break;
		case "4":
			log.info("2라운드 대진표 표시");
			service.setRound(2);
			break;
		case "5":
			log.info("3라운드 테마 추첨");
			service.setRound(3);
			break;
		case "6":
			log.info("3라운드 팀 편성");
			service.setRound(3);
			break;
		case "7":
			log.info("3라운드 팀 대진표");
			service.setRound(3);
			break;
		case "8":
			log.info("우승자 표시");
			break;
		}
		service.sendToOverlay(CHANGE_SCREEN_EVENT, dto.getTag());

		return successDTO();
	}

	/**
	 * 테마 셔플 요청 시
	 * @param dto
	 * @return
	 */
	@PostMapping("/shuffle")
	public ResponseEntity<ControlDTO> Shuffle(@RequestBody ControlDTO dto) {

		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());

		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		int temp = Integer.parseInt(dto.getTag());
		
		if (dto.getTag().equals("3")){
			log.info("테마 추첨");
			service.sendToOverlay( DRAW_THEME_EVENT, dto.getTag());
		}
		else {
			switch (dto.getTag()) {
			case "0":
				log.info("1라운드 대진표 추첨");
				break;
			case "1":
				log.info("2라운드 흑 대진표 추첨");
				break;
			case "2":
				log.info("2라운드 백 대진표 추첨");
				break;
			}
			service.sendToOverlay( DRAW_CARD_EVENT, ""+(temp+1));
		}
		
		return successDTO();
	}
	
	/**
	 * 명단 오류시 이름 변경
	 * @param dto
	 * @return
	 */
	@PostMapping("/change_name")
	public ResponseEntity<ControlDTO> ChangeName(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		service.chaneName(dto.getType(), dto.getTag());
		
		return successDTO();
	}
	
	
	/**
	 * 테마 뽑기
	 * @param dto
	 * @return
	 */
    @PostMapping("/pick_theme")
    public ResponseEntity<ControlDTO> pickTheme(@RequestBody ControlDTO dto){

    	if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
        
        service.sendToOverlay( DRAW_THEME_EVENT, dto.getTag());
        
        return successDTO();
    }
	
	/**
	 * 3라운드 팀 구성
	 * @param dto
	 * @return
	 */
	@PostMapping("/set_team")
	public ResponseEntity<ControlDTO> SetTeam(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		int teamOrder = Integer.parseInt(dto.getTag().split(";")[0]);
		int partIndex = Integer.parseInt(dto.getTag().split(";")[1]);
		service.setTeam(dto.getType(), teamOrder, partIndex);
		
		return successDTO();
	}
	
	@PostMapping("/set_r3_match")
	public ResponseEntity<ControlDTO> SetR3Match(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		service.setR3Match(dto.getTag());
		
		return successDTO();
	}
	
	
	/**
	 * 탈락자 상태 변경
	 * @param dto
	 * @return
	 */
	@PostMapping("/leaving_out")
	public ResponseEntity<ControlDTO> setLeavingOut(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		switch(dto.getType()) {
			case 10:
				// 탈락
				service.leavingOut(dto.getTag());
				break;
			case 11:
				// 탈락 초기화
				service.resetLeavingOut(dto.getTag());
				break;
		}
		
		
		
		return successDTO();
	}
	
	/**
	 * 우승자 표시화면 조작
	 * @param dto
	 * @return
	 */
	@PostMapping("/show_winner")
	public ResponseEntity<ControlDTO> ShowWinner(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		switch(dto.getType()) {
		case 30:
			service.showWinner();
			break;
		case 31:
			service.setWinner(dto.getTag());
			break;
		}
		
		
		return successDTO();
	}
	
	/**
	 * 점수 저장
	 * @param dto
	 * @return
	 */
	@PostMapping("/set_score")
	public ResponseEntity<ControlDTO> SetScore(@RequestBody ControlDTO dto){
		//log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		service.setScore(dto.getTag());
		return successDTO();
	}
	
	@PostMapping("/reset_roullet")
	public ResponseEntity<ControlDTO> ResetRoullet(@RequestBody ControlDTO dto){
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		
		service.resetRoullet(Integer.parseInt(dto.getTag()));
		
		return successDTO();
	}
	
	/**
	 * 전송한 유저가 현재 연결된 유저인지 확인
	 * @param name
	 * @return
	 */
	private boolean checkUser(String name) {
		if (!service.checkName(name)) {
			return false;
		}
		return true;
	}
	
	/**
	 * 실패했을 경우 응답 데이터
	 * @param status
	 * @param code
	 * @param message
	 * @return
	 */
	private ResponseEntity<ControlDTO> failDTO(HttpStatus status, int code, String message){
		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(code);
		responseDTO.setTag(message);
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, status);
		return response;
	}
	
	/**
	 * 성공했을 경우 응답 데이터
	 * @return
	 */
	private ResponseEntity<ControlDTO> successDTO(){
		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(200);
		responseDTO.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.OK);

		return response;
	}
	
	/**
	 * 
	 */
	@PostMapping("/show_name")
	public ResponseEntity<ControlDTO> ShowName(@RequestBody ControlDTO dto){
		if(!checkUser(dto.getName())) {
			return failDTO(HttpStatus.NOT_FOUND, 402, "사용자를 찾을 수 없습니다");
		}
		service.showName(dto.getType());
		
		
		
		return successDTO();
	}
	
}
