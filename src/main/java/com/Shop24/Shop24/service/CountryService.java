package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Country;

import java.util.List;

public interface CountryService {
    public Country findById(long id);

    public Country findByAlpha2Code(String code);

    public Country findByAlpha3Code(String code);

    public Country findByNumericCode(String code);

    public Country save(Country country);

    public List<Country> findAll();

    public void delete(long id);

    public Country findBySingleCode(String code);
}
