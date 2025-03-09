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

	@PostMapping("/change")
	public ResponseEntity<ControlDTO> ChangeMode(@RequestBody ControlDTO dto) {

		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());

		if (!service.checkName(dto.getName())) {
			ControlDTO responseDTO = new ControlDTO();
			responseDTO.setType(402);
			responseDTO.setTag("can't found User");
			ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.NOT_FOUND);
			return response;
		}

		switch (dto.getTag()) {
		case "0":
			log.info("로고화면 출력");
			break;
		case "1":
			log.info("1라운드 추첨");
			break;
		case "2":
			log.info("1라운드 대진표 표시");
			break;
		case "3":
			log.info("2라운드 추첨");
			break;
		case "4":
			log.info("2라운드 대진표 표시");
			break;
		case "5":
			log.info("3라운드 테마 추첨");
			break;
		case "6":
			log.info("3라운드 팀 편성");
			break;
		}
		service.sendToOverlay(OVERLAY, CHANGE_SCREEN_EVENT, dto.getTag());

		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(200);
		responseDTO.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.OK);

		return response;
	}

	@PostMapping("/shuffle")
	public ResponseEntity<ControlDTO> Shuffle(@RequestBody ControlDTO dto) {

		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());

		if (!service.checkName(dto.getName())) {
			ControlDTO responseDTO = new ControlDTO();
			responseDTO.setType(402);
			responseDTO.setTag("can't found User");
			ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.NOT_FOUND);
			return response;
		}

		if (dto.getTag().equals("3")){
			log.info("테마 추첨");
			service.sendToOverlay(OVERLAY, DRAW_THEME_EVENT, dto.getTag());
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
			service.sendToOverlay(OVERLAY, DRAW_CARD_EVENT, dto.getTag());
		}
		
		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(200);
		responseDTO.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.OK);

		return response;
	}
	
	@PostMapping("/change_theme")
	public ResponseEntity<ControlDTO> ChangeTheme(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());

		if (!service.checkName(dto.getName())) {
			ControlDTO responseDTO = new ControlDTO();
			responseDTO.setType(402);
			responseDTO.setTag("can't found User");
			ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.NOT_FOUND);
			return response;
		}
		
		service.sendToOverlay(OVERLAY, DRAW_THEME_EVENT, dto.getTag());
		
		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(200);
		responseDTO.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.OK);

		return response;
	}

}
