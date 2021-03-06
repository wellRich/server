package com.gyk.study.jpa.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 〈一句话功能简述〉
 * 〈功能详细描述〉
 *
 * @author guoyka
 * @version 1.0, 2018/12/16
 */
@Component
public interface UserRepository extends JpaRepository<UserInfo, Long> {

    List<UserInfo> findAll();
}
