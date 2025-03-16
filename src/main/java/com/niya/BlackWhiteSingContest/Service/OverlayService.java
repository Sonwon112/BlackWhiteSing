package com.niya.BlackWhiteSingContest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.niya.BlackWhiteSingContest.Repository.PickRepository;

@Service
public class OverlayService {
	
	@Autowired
	private PickRepository pickRepo;
	@Autowired
	private SSEService sseService;
	
	public void SavedPick(int round, String pickArr) {
		
		String data = round+";"+pickArr;
		
		sseService.sendDataToStaff("updateMatch", data);
		//String[] arr = 
		//pickRepo.setPick(round);
	}

	public void setTheme(int order, int idx){
		sseService.sendDataToStaff("setTheme", order+";"+idx);
	}
	
}
