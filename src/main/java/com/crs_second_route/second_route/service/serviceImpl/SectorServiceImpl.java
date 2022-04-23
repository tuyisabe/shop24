package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.SectorDAO;
import com.crs_second_route.second_route.service.SectorService;
import com.crs_second_route.second_route.vo.Sector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectorServiceImpl implements SectorService {
    @Autowired
    SectorDAO sectorRepository;

    @Override
    public Sector findById(long id) {
        return sectorRepository.findById(id).get();
    }

    @Override
    public void save(Sector sector) {
        sectorRepository.save(sector);
    }

    @Override
    public List<Sector> findAll() {
        return sectorRepository.findAll();
    }

    @Override
    public void delete(long id) {
        sectorRepository.deleteById(id);
    }

    @Override
    public List<Sector> findByDistrict(String code) {
        return sectorRepository.findByDistrictCode(code);
    }

    @Override
    public Sector findSingleSecByCode(String code) {
        return sectorRepository.findBySingleSectorCode(code);
    }


    @Override
    public Sector findBySectorCode(String code) {
        return null;
    }

    @Override
    public Sector findByCode(String code) {
        Sector sectorVO = sectorRepository.findByCode(code);
        return sectorVO;
    }

}