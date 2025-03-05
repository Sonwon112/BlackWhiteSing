package com.niya.BlackWhiteSingContest.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Service
public class SSEService {
	private Map<String,SseEmitter> emitterMap = new HashMap<>();
	
	public void putEmitter(String targetName, SseEmitter emitter) {
		emitterMap.put(targetName, emitter);
	}
	
	public void removeEmitter(String targetName) {
		emitterMap.remove(targetName);
	}
	
	public void sendData(String target, String eventName, String data) {
		SseEmitter emitter = emitterMap.get(target);
		try {
			emitter.send(SseEmitter.event().name(eventName).data(data));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
