package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Reason;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
// @Transactional
public interface ReasonDao extends JpaRepository<Reason, Long> {
    @Query(value = "SELECT * FROM crs_reason WHERE is_deleted =0 ", nativeQuery = true) // WHERE is_deleted = 0
    List<Reason> listApplicationReasons();

    @Modifying
    @Query(value = "UPDATE crs_reason SET is_deleted = 1 WHERE id = :Id", nativeQuery = true)
    int deleteReasonType(@Param("Id") long id);

    @Query(value = "SELECT count(*) FROM crs_reason WHERE is_deleted =0  ", nativeQuery = true) // WHERE is_deleted = 0
    int applicationReasonCount();

    @Modifying
    @Query(value = "UPDATE crs_reason r SET r.descriptionEnglish=?2,r.descriptionFrench=?3,r.descriptionKinyarwanda=?4 where r.id=?1")
    int updateReason(long id, String nameEnglish, String nameFrench, String nameKinyarwanda);
}
