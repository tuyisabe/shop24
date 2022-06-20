package com.Shop24.Shop24.service;

import com.Shop24.Shop24.vo.CustomerVo;

import java.util.List;

public interface CustomerService {
    public CustomerVo createCustomer(CustomerVo customerVo) throws Exception;
    public List<CustomerVo> gettingAllCustomer();
    public List<CustomerVo> gettingCustomerById(long id);


}
