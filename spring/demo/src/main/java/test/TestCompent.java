package test;

import com.gyk.study.jpa.entity.UserInfo;
import com.gyk.study.jpa.service.UserService;
import com.gyk.study.jpa.service.impl.UserServiceImpl;
import lombok.Data;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Description;
import org.springframework.stereotype.Component;

/**
 * @author guoyka
 * @version 1.0, 2019/2/2
 */
@Component
public class TestCompent {

    @Bean
    public UserInfo getUser(){
        return new UserInfo();
    }

    @Bean
    @Description("ssss")
    public UserService getCompent(){
        UserInfo userInfo = getUser();
        System.out.println("getCompent --->" + userInfo);
        return new UserServiceImpl();
    }
}
