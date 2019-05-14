package com.gyk.study.jpa;

import com.gyk.study.jpa.entity.UserInfo;
import com.gyk.study.jpa.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import test.TestCompent;
import test.TestScanService;

import javax.annotation.Resource;

@ComponentScans({@ComponentScan({"test"}), @ComponentScan({"com"})})
@SpringBootApplication
@Controller
public class DemoApplication {

    @Resource
    private UserService userService;

    @Resource
    private TestScanService scanService;

    @Resource
    private TestCompent testCompent;


    @Resource
    private UserInfo userInfo;

    @RequestMapping("/home")
    @ResponseBody
    public String test(){
        System.out.println("h-----> " + userInfo);
        return "1212";
    }


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
