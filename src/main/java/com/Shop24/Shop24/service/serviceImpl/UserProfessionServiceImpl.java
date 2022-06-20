package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.UserProfessionDAO;
import com.crs_second_route.second_route.service.UserProfessionService;
import com.crs_second_route.second_route.vo.UserProfession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfessionServiceImpl implements UserProfessionService {
    @Autowired
    private UserProfessionDAO userProfessionDAO;
    @Override
    public UserProfession saveUserProfession(UserProfession userProfession) {
        return userProfessionDAO.save(userProfession);
    }
}
