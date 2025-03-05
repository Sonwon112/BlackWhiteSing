package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.niya.BlackWhiteSingContest.Model.ControlDTO;

@RequestMapping("/control")
@Controller
public class ControlController {
	
	@Value("${token}")
	private String tokenKey;

	@GetMapping("")
	public String MainControl(@RequestParam(value = "token") String token, Model model) {
		if(!token.equals(tokenKey)) {
			model.addAttribute("msg", "잘못된 접근입니다");
			model.addAttribute("url", "/");
			return "alert";
		}
		
		return "control";
	}
	
	@PostMapping("/change")
	public void ChangeMode(ControlDTO dto) {
		 
	}
	
}
