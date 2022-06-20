package com.Shop24.Shop24.web;

import com.Shop24.Shop24.dao.OrderDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    @Autowired
    private OrderDao orderDao;

}
