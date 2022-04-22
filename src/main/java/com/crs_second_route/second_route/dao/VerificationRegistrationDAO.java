package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.VerificationRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationRegistrationDAO extends JpaRepository<VerificationRegistration, Long> {
@Query(value = "SELECT * FROM crs_verification_registration WHERE code= :code WHERE is_enabled=0",nativeQuery = true)
    String findByCode(@Param("code") String code);
}
