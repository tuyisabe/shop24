package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.District;

import java.util.List;

public interface DistrictService {
    public District findById(long id);

    public void save(District district);

    public District findByCode(String code);

    public List<District> findAll();

    public void delete(long id);

    public List<District> findByProvince(String code);

    public District findSingleByCode(String code);
}
