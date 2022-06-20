package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.VerificationRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface VerificationRegistrationDAO extends JpaRepository<VerificationRegistration, Long> {
    @Query(value = "SELECT * FROM crs_verification_registration WHERE verification_code= :code AND is_disabled=0",nativeQuery = true)
    String findByCode(@Param("code") String code);
    @Transactional
    @Modifying
    @Query(value = "UPDATE crs_verification_registration SET is_disabled =1 WHERE verification_code = :code", nativeQuery = true)
    int disableCode(@Param("code") String code);
}