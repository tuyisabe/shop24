package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Sector;

import java.util.List;

public interface SectorService {
    public Sector findById(long id);

    public void save(Sector sector);

    public Sector findByCode(String code);

    public List<Sector> findAll();

    public void delete(long id);

    public List<Sector> findByDistrict(String code);


    Sector  findSingleSecByCode(String code);

    Sector findBySectorCode(String code);
}
