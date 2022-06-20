package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.IdentificationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// @Transactional
public interface IdentificationTypeDAO extends JpaRepository<IdentificationType, Long> {
  IdentificationType findByCode(String code);

    @Query(value = "SELECT * FROM crs_identification_type WHERE is_deleted =0 ", nativeQuery = true)
    List<IdentificationType> findAllAlIdentificationType();

    @Modifying
    @Query(value = " UPDATE crs_identification_type SET is_deleted = 1  WHERE id = :id", nativeQuery = true)
    int deleteIdentificationType(@Param("id") long id);

    @Query(value = "SELECT count(*) FROM crs_identification_type WHERE is_deleted =0 ", nativeQuery = true)
    int identificationCount();

    @Query(value = "SELECT * FROM crs_identification_type WHERE code=:id", nativeQuery = true)
    IdentificationType findSingleById(long id);
}
