package com.niya.BlackWhiteSingContest.Repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class PickRepository {
	
	private String[] Participant = {"니야", "그나로","뮬","나츠키","히미캉","꾸이링",
	           				     	"레드","퀸슈아","이신","루나밍","햄쿠비","코오리", // 여기까지 흑팀
	           				     	"레드","퀸슈아","이신","루나밍","햄쿠비","코오리"};
	private List<Integer> r1Pick = new ArrayList<Integer>();
	private List<Integer> r2Pick = new ArrayList<Integer>();
	private List<Integer> r3Pick = new ArrayList<Integer>();

	public void setPick(int round, String[] pickArr) {
		switch (round) {
			case 1: {
				for (String e : pickArr) {
					r1Pick.add(Integer.parseInt(e));
				}
				break;
			}
			case 2: {
				for (String e : pickArr) {
					r2Pick.add(Integer.parseInt(e));
				}
				break;
			}
			case 3: {
				for (String e : pickArr) {
					r3Pick.add(Integer.parseInt(e));
				}
				break;
			}
		}
		
	}
	
	public void changeNmae(int index, String name) {
		Participant[index] = name;
	}
	
	public List<Integer> getR1Pick(){return r1Pick;}
	public List<Integer> getR2Pick(){return r2Pick;}
	public List<Integer> getR3Pick(){return r3Pick;}
	public String[] getParticipant() {return Participant;};

}
