package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	
	
	@GetMapping("/")
	@ResponseBody
	public String index() {
		return "특정 사용자만 접근 가능합니다";
	}
	
	@GetMapping("/finalMatch")
	public String RockScissorsPaper() {
		return "rockPaperScissors";
	}
}
