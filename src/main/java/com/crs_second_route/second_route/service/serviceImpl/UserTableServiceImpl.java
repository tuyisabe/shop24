package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.UserTableDAO;
import com.crs_second_route.second_route.service.UserTableService;
import com.crs_second_route.second_route.vo.UserTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTableServiceImpl implements UserTableService {
    @Autowired
    private UserTableDAO userTableDAO;
    @Override
    public List<UserTable> findAll() {
        return userTableDAO.findAll();
    }

    @Override
    public UserTable createNewUser(UserTable userTable) throws Exception {
        return userTableDAO.save(userTable);
    }
}
