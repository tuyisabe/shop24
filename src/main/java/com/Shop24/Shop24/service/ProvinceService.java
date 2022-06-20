package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Province;

import java.util.List;

public interface ProvinceService {
    public Province findById(long id);

    public Province save(Province province);

    public Province findByCode(String code);

    public List<Province> findAll();

    public List<Province> findAllProvinces();

    public void delete(long id);
}
