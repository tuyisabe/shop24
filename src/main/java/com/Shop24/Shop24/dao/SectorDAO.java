package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectorDAO extends JpaRepository<Sector, Long> {

    @Query("Select s from crs_sector s where SUBSTRING(s.code,1,4)=?1")
    List<Sector> findByDistrictCode(String code);

    Sector findByCode(String code);

    @Query(value = "SELECT * FROM crs_sector WHERE code=:code",nativeQuery = true)
    Sector findBySingleSectorCode(String code);
}