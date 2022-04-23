package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.ProvinceDAO;
import com.crs_second_route.second_route.service.ProvinceService;
import com.crs_second_route.second_route.vo.Province;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceServiceImpl implements ProvinceService {
    @Autowired
    private ProvinceDAO provinceRepository;

    @Override
    public Province findById(long id) {
        return provinceRepository.findById(id).get();
    }

    @Override
    public Province save(Province province) {
        return provinceRepository.save(province);
    }

    @Override
    public List<Province> findAll() {
        return provinceRepository.findAll();
    }

    @Override
    public void delete(long id) {
        provinceRepository.deleteById(id);
    }

    @Override
    public Province findByCode(String code) {
        Province provinceVO = provinceRepository.findByCode(code);
        return provinceVO;
    }

    @Override
    public List<Province> findAllProvinces() {
        return provinceRepository.findAllProvinces();
    }

}

