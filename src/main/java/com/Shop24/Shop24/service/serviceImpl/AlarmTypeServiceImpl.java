package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.AlarmTypeDao;
import com.crs_second_route.second_route.service.AlarmTypeService;

import com.crs_second_route.second_route.vo.AlarmType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlarmTypeServiceImpl implements AlarmTypeService {
    @Autowired
    private AlarmTypeDao alarmTypeDao;

    @Override
    public AlarmType findByCode(String code) {
        return alarmTypeDao.findByCode(code);
    }

    @Override
    public boolean alarmTypeExist() throws Exception {
        long alarmCount = alarmTypeDao.count();
        return alarmCount > 0;
    }

    @Override
    public void manageAlarmType(List<AlarmType> alarmTypeList, String action) throws Exception {
        if (action.equals("save") || action.equals("update")) {
            alarmTypeDao.saveAll(alarmTypeList);
        }

    }

    @Override
    public void saveAlarmType(AlarmType alarmType) {
        alarmTypeDao.save(alarmType);
    }

    @Override
    public List<AlarmType> findAll() {
        return alarmTypeDao.findAllAlarmType();
    }

    @Override
    public void updateAlarmType(AlarmType alarmType) {
        alarmTypeDao.save(alarmType);
    }

    @Override
    public AlarmType findById(long id) {
        return alarmTypeDao.findById(id).get();
    }

    @Override
    public int deleteAlarmType(long id) {
        return alarmTypeDao.deleteAlarmType(id);
    }

    @Override
    public int countingAlarmType() { 
        return alarmTypeDao.alarmTypeCount();
    }
}
