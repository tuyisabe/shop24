package com.crs_second_route.second_route.service;

import java.util.List;

import com.crs_second_route.second_route.vo.AlarmType;

public interface AlarmTypeService {

    AlarmType findByCode(String code);

    boolean alarmTypeExist() throws Exception;

    void manageAlarmType(List<AlarmType> alarmTypeList, String action) throws Exception;

    void saveAlarmType(AlarmType alarmType);

    List<AlarmType> findAll();

    void updateAlarmType(AlarmType alarmType);

    AlarmType findById(long id);

    int deleteAlarmType(long id);

    public int countingAlarmType();
}
