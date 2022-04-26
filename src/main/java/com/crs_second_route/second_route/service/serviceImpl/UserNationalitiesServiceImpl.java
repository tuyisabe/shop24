package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.UserNationalitiesDAO;
import com.crs_second_route.second_route.service.UserNationalitiesService;
import com.crs_second_route.second_route.vo.UserNationalities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserNationalitiesServiceImpl implements UserNationalitiesService {
    @Autowired
    private UserNationalitiesDAO userNationalitiesDAO;
    @Override
    public UserNationalities saveUserNationality(UserNationalities userNationalities) {
        return userNationalitiesDAO.save(userNationalities);
    }
}
