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
	
	public void resetLeavingOut(String data) {
		sseService.sendData("overlay", "resetLeavingOut", data);
		sseService.sendDataToStaff("resetLeavingOut", data);
	}
	
	public void setR3Match(String data) {
		sseService.sendData("overlay", "setR3Match", data);
		sseService.sendDataToStaff("setR3Match", data);
	}
	
	public void showWinner() {
		sseService.sendData("overlay", "showWinner", "show");
	}
	
	public void setWinner(String data) {
		String winTeamNames = data.split(";")[0];
		String winTeamIndex = data.split(";")[1];
		sseService.sendDataToStaff("setWinTeam", winTeamIndex);
		sseService.sendData("overlay", "setWinTeam", winTeamNames);
	}
	
	public void setScore(String data) {
		sseService.sendData("overlay", "setScore", data);
		sseService.sendDataToStaff("setScore", data);
	}
	
	public void setRound(int data) {
		pickRepo.setCurrRound(data);
		sseService.sendDataToStaff("setRound", ""+data);
	}
	
	public void resetRoullet(int round) {
		sseService.sendData("overlay", "resetRoullet", ""+round);
	}
	
	public void showName(int screen) {
		sseService.sendData("overlay", "showName", ""+screen);
	}

	public void hideName(int screen) {
		sseService.sendData("overlay", "hideName", ""+screen);
	}
	
	public void showFace(String match) {
		sseService.sendData("overlay", "showFace", match);
	}
	
	public void setR2Part(String r2Part) {
		sseService.sendData("overlay", "setR2Part", r2Part);
	}
}
