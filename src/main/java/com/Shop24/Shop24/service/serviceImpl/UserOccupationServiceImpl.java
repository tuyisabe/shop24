package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.UserOccupationDAO;
import com.crs_second_route.second_route.service.UserOccupationService;
import com.crs_second_route.second_route.vo.Occupation;
import com.crs_second_route.second_route.vo.UserOccupation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserOccupationServiceImpl implements UserOccupationService {
    @Autowired
    private UserOccupationDAO userOccupationDAO;
    @Override
    public UserOccupation saveUserOccupation(UserOccupation userOccupation) {
        return userOccupationDAO.save(userOccupation);
    }



}
