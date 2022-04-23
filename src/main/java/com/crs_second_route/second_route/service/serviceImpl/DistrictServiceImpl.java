package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.DistrictDAO;
import com.crs_second_route.second_route.service.DistrictService;
import com.crs_second_route.second_route.vo.District;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrictServiceImpl implements DistrictService {
    @Autowired
    DistrictDAO districtRepository;

    @Override
    public District findById(long id) {
        return districtRepository.getOne(id);
    }

    @Override
    public void save(District district) {
        districtRepository.save(district);

    }

    @Override
    public List<District> findAll() {
        return districtRepository.findAll();
    }

    @Override
    public void delete(long id) {
        districtRepository.deleteById(id);
    }

    @Override
    public List<District> findByProvince(String code) {
        return districtRepository.findByProvinceCode(code);
    }

    @Override
    public District findSingleByCode(String code) {
        return  districtRepository.findBySingleCode(code);
    }


    @Override
    public District findByCode(String code) {
        District districtVO = districtRepository.findByCode(code);
        return districtVO;
    }

}

