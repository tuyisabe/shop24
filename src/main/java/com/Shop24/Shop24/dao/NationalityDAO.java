package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Nationality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NationalityDAO extends JpaRepository<Nationality, Long> {
    Nationality findByCode(String code);
}
