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
import com.niya.BlackWhiteSingContest.Service.OverlayService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/overlay")
@Controller
@Slf4j
public class OverlayController {
	
	@Value("${token}")
	private String tokenKey;
	
	@Autowired
	private OverlayService service;

	@GetMapping("")
	public String MainOverlay(@RequestParam(value = "token") String token, Model model) {
		if(!token.equals(tokenKey)) {
			model.addAttribute("msg", "잘못된 접근입니다");
			model.addAttribute("url", "/");
			return "alert";
		}
		
		return "overlay";
	}
	
	@PostMapping("/pick")
	public ResponseEntity<ControlDTO> receiveR1Pick(@RequestBody ControlDTO dto){
		log.info(dto.getName()+"에서 "+dto.getType()+"으로 "+dto.getTag()+"을 보냈습니다");
		service.SavedPick(dto.getType(), dto.getTag());
		
		return successDTO();
	}
	
	@PostMapping("/pickTheme")
	public ResponseEntity<ControlDTO> pickTheme(@RequestBody ControlDTO dto){
		log.info(dto.getName() + "이" + dto.getType() + "을 보냈습니다. : " + dto.getTag());
		service.setTheme(dto.getType(), Integer.parseInt(dto.getTag()));
		
		return successDTO();
	}
	
	private ResponseEntity<ControlDTO> successDTO(){
		ControlDTO responseDTO = new ControlDTO();
		responseDTO.setType(200);
		responseDTO.setTag("success");
		ResponseEntity<ControlDTO> response = new ResponseEntity<ControlDTO>(responseDTO, HttpStatus.OK);

		return response;
	}
	
}
