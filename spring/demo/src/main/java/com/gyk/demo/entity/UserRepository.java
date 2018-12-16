package com.gyk.demo.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 〈一句话功能简述〉
 * 〈功能详细描述〉
 *
 * @author guoyka
 * @version 1.0, 2018/12/16
 */
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long> {

    List<UserInfo> findAll();
}
