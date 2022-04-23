package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Village;

import java.util.List;

public interface VillageService {
    public Village findById(long id);

    public void save(Village village);

    public Village findByCode(String code);

    public List<Village> findAll();

    public void delete(long id);

    public List<Village> findByCell(String code);
}
