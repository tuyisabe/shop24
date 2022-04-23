package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.VillageDAO;
import com.crs_second_route.second_route.service.VillageService;
import com.crs_second_route.second_route.vo.Village;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VillageServiceImpl implements VillageService {

    @Autowired
    private VillageDAO villageRepository;

    @Override
    public Village findById(long id) {
        return villageRepository.findById(id).get();
    }

    @Override
    public void save(Village village) {
        villageRepository.save(village);

    }

    @Override
    public List<Village> findAll() {
        return villageRepository.findAll();
    }

    @Override
    public void delete(long id) {
        villageRepository.deleteById(id);

    }

    @Override
    public List<Village> findByCell(String code) {
        return villageRepository.findByCell(code);
    }

    @Override
    public Village findByCode(String code) {

        return villageRepository.findByCode(code);
    }

}