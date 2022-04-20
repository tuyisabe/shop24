package com.crs_second_route.second_route.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAttachmentsDAO extends JpaRepository<UserAttachmentsDAO, Long> {
}
