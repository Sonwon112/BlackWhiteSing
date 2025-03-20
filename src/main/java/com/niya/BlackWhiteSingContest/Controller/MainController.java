package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.niya.BlackWhiteSingContest.Model.ControlDTO;
import com.niya.BlackWhiteSingContest.Service.ControlService;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;


@Controller
@Slf4j
public class MainController {
	
	private static final String RockScissorsPaper = "rsp";
	
	@Autowired
	private ControlService controlService;
	
	@GetMapping("/")
	@ResponseBody
	public String index() {
		return "특정 사용자만 접근 가능합니다";
	}
	
	@GetMapping("/finalMatch")
	public String RockScissorsPaper(@RequestParam(value="tag") String tag, Model model) {
		model.addAttribute("team", tag);
		return "rockPaperScissors";
	}
	
	@PostMapping("send_hand")
	public ResponseEntity<ControlDTO> SendHand(@RequestBody PlayerHand hand){
		String team = hand.getTeam() == 0 ? "흑" : "백";
		String userHand = hand.getHand() == 0 ? "바위" : hand.getHand() == 1 ? "가위" : "보";
		log.info(team+" : "+userHand);
		
		String data = hand.getTeam()+";"+hand.getHand();
		controlService.sendToControl(RockScissorsPaper, data);
		controlService.sendToOverlay(RockScissorsPaper, data);
		
		ControlDTO dto = new ControlDTO();
		dto.setType(200);
		dto.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(dto, HttpStatus.OK);
		return response;
	}
}

@Data
class PlayerHand{
	private int team; // 0 : 흑, 1 : 백
	private int hand; // 0 : 바위, 1 : 가위, 2 : 보
}
