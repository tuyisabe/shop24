package com.Shop24.Shop24.service.serviceImpl;

import com.Shop24.Shop24.dao.CustomerDao;
import com.Shop24.Shop24.service.CustomerService;
import com.Shop24.Shop24.vo.CustomerVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerDao customerDao;
    @Override
    public CustomerVo createCustomer(CustomerVo customerVo) throws Exception {
        return customerDao.save(customerVo);
    }

    @Override
    public List<CustomerVo> gettingAllCustomer() {
        return customerDao.findAllCustomers();
    }

    @Override
    public List<CustomerVo> gettingCustomerById(long id) {
        return customerDao.findCustomerById(id);
    }
}
