package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.niya.BlackWhiteSingContest.Service.SSEService;

@RequestMapping("/sse")
@Controller
public class SSEController {

	@Autowired
	private SSEService service;
	
	
	@GetMapping("")
	public void SseConnect(String target) {
		SseEmitter emitter = new SseEmitter();
		try {
			emitter.send(SseEmitter.event().name("connect"));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		emitter.onCompletion(()->service.removeEmitter(target));
		emitter.onTimeout(()->service.removeEmitter(target));
		emitter.onError((e)->service.removeEmitter(target));
		
	}
	
}
