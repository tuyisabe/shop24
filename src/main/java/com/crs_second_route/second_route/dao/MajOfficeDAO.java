package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.MajOffice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
// @Transactional
public interface MajOfficeDAO extends JpaRepository<MajOffice, Long> {
    @Query(value = "SELECT * FROM crs_maj_office WHERE is_deleted =0  ", nativeQuery = true) // WHERE is_deleted = 0
    List<MajOffice> selectMajOffices();

    @Query(value = "UPDATE crs_maj_office SET is_deleted= 1 WHERE id= :id", nativeQuery = true)
    int deleteMajOffice(@Param("id") long id);

    @Query(value = "SELECT count(*) FROM crs_maj_office WHERE is_deleted =0 ", nativeQuery = true)
    int majCount();

}
