package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Occupation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
// @Transactional
public interface OccupationDao extends JpaRepository<Occupation, Long> {
    @Query(value = "SELECT * FROM crs_occupation WHERE is_deleted = 0 ", nativeQuery = true)
    List<Occupation> findAllOccupation();

    @Modifying
    @Query(value = " UPDATE crs_occupation SET is_deleted = 1  WHERE id = :id", nativeQuery = true)
    int deleteOccupation(@Param("id") long id);

    @Query(value = "SELECT count(*) FROM crs_occupation WHERE is_deleted = 0", nativeQuery = true)
    int accupationCount();
}
