package com.niya.BlackWhiteSingContest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.niya.BlackWhiteSingContest.Repository.PickRepository;

@Service
public class ControlService {
	
	@Autowired
	private SSEService sseService;
	@Autowired
	private PickRepository pickRepo;
	
	/**
	 * 현재 시스템에 접속 되어 있는 사용자인지 확인
	 * @param name
	 * @return
	 */
	public boolean checkName(String name) {
		return sseService.checkName(name);
	}
	
	public void sendToOverlay(String eventName, String data) {
		sseService.sendData("overlay", eventName, data);
	}
	
	public void sendToControl(String eventName, String data) {
		sseService.sendDataToStaff(eventName, data);
	}
	
	public void chaneName(int index, String name) {
		pickRepo.changeNmae(index, name);
		sseService.sendDataToStaff("changeName", index+";"+name);
	}
	
	public void setTeam(int teamIndex, int teamOrder, int partIndex) {
		sseService.sendDataToStaff("setTeam", teamIndex+";"+teamOrder+";"+partIndex);
		sseService.sendData("overlay", "setTeam", teamIndex+";"+teamOrder+";"+partIndex);
	}
	
	public void leavingOut(String data) {
		sseService.sendData("overlay", "leavingOut", data);
		sseService.sendDataToStaff("leavingOut", data);
	}
	
	
}
