package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.UserOccupation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserOccupationDAO extends JpaRepository<UserOccupation,Long> {
}
