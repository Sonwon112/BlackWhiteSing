package com.niya.BlackWhiteSingContest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.niya.BlackWhiteSingContest.Service.SSEService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/sse")
@RestController
@Slf4j
public class SSEController {

	@Autowired
	private SSEService service;
	
	
	@GetMapping("")
	public SseEmitter SseConnect(@RequestParam(value="target") String target) {
		SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
		try {
			emitter.send(SseEmitter.event().name("connect").data("success"));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		log.info(target+"이 성공적으로 접속하였습니다.");
		service.putEmitter(target, emitter);
		
		emitter.onCompletion(()->{
			log.info(target+"이 연결이 완료되었습니다");
			service.removeEmitter(target);
		});
		emitter.onTimeout(()->{
			log.info(target+"의 연결이 시간초과되어 끊겼습니다");
			service.removeEmitter(target);
		});
		emitter.onError((e)->{
			log.info(target+"이 오류로 연결이 끊겼습니다");
			service.removeEmitter(target);
		});
		
		return emitter;
	}
	
	
}
