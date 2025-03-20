package com.niya.BlackWhiteSingContest.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SSEService {
	private Map<String,SseEmitter> emitterMap = new HashMap<>();
	
	/**
	 * 새롭게 control, overlay 화면 참여시 연결
	 * @param targetName key
	 * @param emitter value
	 */
	public void putEmitter(String targetName, SseEmitter emitter) {
		emitterMap.put(targetName, emitter);
	}
	
	/**
	 * 연결이 해제되었을 때 map에서 제거하는 함수
	 * @param targetName key
	 */
	public void removeEmitter(String targetName) {
		emitterMap.remove(targetName);
	}
	
	/**
	 * 스태프 전체에게 데이터를 전송하는 함수
	 * @param eventName 발생 이벤트
	 * @param data 보낼 데이터
	 */
	public void sendDataToStaff(String eventName, String data) {
		
		for(String key : emitterMap.keySet()) {
			if(key.equals("overlay")) continue;
			log.info(key+"에게 "+data+"를 보냄");
			sendData(key, eventName, data);
		}
	}
	
	/**
	 * 서버에서 데이터를 보내야할 때 send하는 부분
	 * @param target 보낼 대상
	 * @param eventName 발생 이벤트
	 * @param data 보낼 데이터
	 */
	public void sendData(String target, String eventName, String data) {
		if(!emitterMap.containsKey(target)) {
			log.info("존재하지 않는 대상입니다. 확인 후 다시 시도해 주세요");
			return;
		}
		
		SseEmitter emitter = emitterMap.get(target);
		try {
			
			emitter.send(SseEmitter.event().name(eventName).data(data));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * map에 key가 존재하는지 체크하는 함수
	 * @param name
	 * @return
	 */
	public boolean checkName(String name) {
		if(emitterMap.containsKey(name))
			return true;
		else
			return false;
	}
	
}
