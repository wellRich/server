package com.gyk.study.jpa.service;

import com.gyk.study.jpa.entity.UserInfo;
import org.springframework.data.domain.Page;

import java.util.List;

/**
 * 〈一句话功能简述〉
 * 〈功能详细描述〉
 *
 * @author guoyka
 * @version 1.0, 2018/12/16
 */
public interface UserService {
    List<UserInfo> getUserList();
    UserInfo getUserByName(String name);
    UserInfo addUserInfo(UserInfo userInfo);
    UserInfo updateUserInfoById(UserInfo userInfo);
    void deleteUserInfoById(Long Id);
    List<UserInfo>getCurrentUserList();
    Page<UserInfo> getPageUserList();
}
