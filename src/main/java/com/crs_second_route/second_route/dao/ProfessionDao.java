package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Profession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
// @Transactional
public interface ProfessionDao extends JpaRepository<Profession, Long> {

    @Query(value = "SELECT *  FROM crs_profession WHERE is_deleted = 0 ", nativeQuery = true)
    List<Profession> listProfession();

    @Query(value = "SELECT count(*) FROM crs_profession WHERE is_deleted = 0 ", nativeQuery = true)
    int professionCount();

    @Modifying
    @Query(value = " UPDATE crs_profession SET is_deleted = 1  WHERE id = :id", nativeQuery = true)
    int deleteProfession(@Param("id") long id);

}
