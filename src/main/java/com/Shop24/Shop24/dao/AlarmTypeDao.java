package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.AlarmType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
// @Transactional
public interface AlarmTypeDao extends JpaRepository<AlarmType, Long> {
    AlarmType findByCode(String code);

    @Query(value = "SELECT * FROM crs_alarm_type WHERE is_deleted = 0 ", nativeQuery = true)
    List<AlarmType> findAllAlarmType();

    @Modifying
    @Query(value = " UPDATE crs_alarm_type SET is_deleted = 1  WHERE id = :id", nativeQuery = true)
    int deleteAlarmType(@Param("id") long id);

    @Query(value = "SELECT count(*) FROM crs_alarm_type WHERE is_deleted = 0", nativeQuery = true)
    int alarmTypeCount();
}
