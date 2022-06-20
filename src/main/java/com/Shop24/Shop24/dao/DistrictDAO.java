package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistrictDAO extends JpaRepository<District, Long> {

    @Query("Select d from crs_district d where SUBSTRING(d.code,1,2)=?1")
    List<District> findByProvinceCode(String code);

    District findByCode(String code);

    @Query(value = "SELECT * FROM crs_district WHERE code=:code",nativeQuery = true)
    District findBySingleCode(String code);

}