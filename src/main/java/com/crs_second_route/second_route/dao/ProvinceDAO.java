package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvinceDAO extends JpaRepository<Province, Long> {

    @Query("Select p from crs_province p")
    List<Province> findAllProvinces();

    Province findByCode(String code);

}