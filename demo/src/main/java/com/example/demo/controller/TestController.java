package com.example.demo.controller;

import java.util.HashMap;
/*
import org.apache.ibatis.session.SqlSession;
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.TestService;

@Controller
public class TestController {
	
	@Autowired
    public TestService testService;
	
    @GetMapping("/main")
    public String main() throws Exception {
    	return "main";
    }
    
    @PostMapping("/searchUserList")
    public @ResponseBody HashMap<String, Object> searchUserList() {
    	
    	HashMap<String, Object> retMap = testService.searchUserList();
    	/*
    	System.out.println("------------------------------------------");
    	System.out.println(retMap);
    	System.out.println("------------------------------------------");
    	*/
    	return retMap;
    }
    
    @GetMapping("/detail")
    public String detail() throws Exception {
    	
    	return "detail";
    }
    
    @PostMapping("/searchUser")
    public @ResponseBody HashMap<String, Object> searchUser(@RequestParam HashMap<String, Object> reqMap) {
    	
    	HashMap<String, Object> retMap = testService.searchUser(reqMap);
    	
    	return retMap;
    }
    
    @GetMapping("/regist")
    public String regist() throws Exception {
    	
    	return "regist";
    }
    
    @PostMapping("/registUser")
    public @ResponseBody HashMap<String, Object> registUser(@RequestParam HashMap<String, Object> reqMap) {
    	
    	HashMap<String, Object> retMap = testService.registUser(reqMap);
    	
    	return retMap;
    }
    
    @PostMapping("/updateUser")
    public @ResponseBody HashMap<String, Object> updateUser(@RequestParam HashMap<String, Object> reqMap) {
    	
    	HashMap<String, Object> retMap = testService.updateUser(reqMap);
    	
    	return retMap;
    }
    
    @PostMapping("/deleteUser")
    public @ResponseBody HashMap<String, Object> deleteUser(@RequestParam HashMap<String, Object> reqMap) {
    	
    	HashMap<String, Object> retMap = testService.deleteUser(reqMap);
    	
    	return retMap;
    }
    
		/* 2
        @Autowired
        public SqlSession sessionFactory;
	
        @GetMapping("test")
        public String test() {
	 
              String time = sessionFactory.selectOne("testSql.getNow");
		
              System.out.println(time);
		
              return "test";
      	}
      	*/
}

