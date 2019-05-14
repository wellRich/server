package com.gyk.study.jpa.service.impl;

import com.gyk.study.jpa.entity.UserInfo;
import com.gyk.study.jpa.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author guoyka
 * @version 1.0, 2019/2/2
 */
//@Service
public class UserServiceImpl implements UserService {
    @Override
    public List<UserInfo> getUserList() {
        return null;
    }

    @Override
    public UserInfo getUserByName(String name) {
        return null;
    }

    @Override
    public UserInfo addUserInfo(UserInfo userInfo) {
        return null;
    }

    @Override
    public UserInfo updateUserInfoById(UserInfo userInfo) {
        return null;
    }

    @Override
    public void deleteUserInfoById(Long Id) {

    }

    @Override
    public List<UserInfo> getCurrentUserList() {
        return null;
    }

    @Override
    public Page<UserInfo> getPageUserList() {
        return null;
    }
}
