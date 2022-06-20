package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.OccupationDao;
import com.crs_second_route.second_route.service.OccupationService;
import com.crs_second_route.second_route.vo.Occupation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class OccupationServiceImpl implements OccupationService {
    @Autowired
    private OccupationDao occupationDao;

    @Override
    public void saveOccupation(Occupation occupation) {
        occupationDao.save(occupation);
    }

    @Override
    public List<Occupation> findAllOccupation() {
        return occupationDao.findAllOccupation();
    }

    @Override
    public void updateOccupation(Occupation occupation) {
        occupationDao.save(occupation);

    }

    @Override
    public int deleteOccupation(long id) {
        return occupationDao.deleteOccupation(id);
    }

    @Override
    public Occupation findById(long id) {
        return occupationDao.findById(id).get();
    }

    @Override
    public List<Occupation> findAllOccupations() {
        return occupationDao.findAll();
    }

    @Override
    public int countingOccupation() { 
        return occupationDao.accupationCount();
    }
}
