package com.crs_second_route.second_route.dao;


import com.crs_second_route.second_route.vo.Village;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VillageDAO extends JpaRepository<Village, Long> {

    @Query("Select v from crs_village v where SUBSTRING(v.code,1,8)=?1")
    List<Village> findByCell(String code);

    public Village findByCode(String code);
}
