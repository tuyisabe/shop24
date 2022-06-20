package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryDAO extends JpaRepository<Country, Long> {
    Country findByAlpha2Code(String code);

    Country findByAlpha3Code(String code);

    Country findByNumericCode(String code);

    @Override
    List<Country> findAll();

    @Query(value = "SELECT * FROM crs_country WHERE numeric_code=:code", nativeQuery = true)
    Country findBySingleCode(String code);
}