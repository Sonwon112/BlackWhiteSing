package com.niya.BlackWhiteSingContest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ControlService {
	
	@Autowired
	private SSEService sseService;
	
	/**
	 * 현재 시스템에 접속 되어 있는 사용자인지 확인
	 * @param name
	 * @return
	 */
	public boolean checkName(String name) {
		return sseService.checkName(name);
	}
	
	public void sendToOverlay(String target, String eventName, String data) {
		sseService.sendData(target, eventName, data);
	}

}
