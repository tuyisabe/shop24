package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.UserAttachments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAttachmentsDAO extends JpaRepository<UserAttachments, Long> {
}
