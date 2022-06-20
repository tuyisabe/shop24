package com.Shop24.Shop24.service.serviceImpl;

import com.Shop24.Shop24.dao.OrderDao;
import com.Shop24.Shop24.service.OrderService;
import com.Shop24.Shop24.vo.OrderVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;

    @Override
    public OrderVo createNewOrder(OrderVo orderVo) throws Exception {
        return orderDao.save(orderVo);
    }

    @Override
    public List<OrderVo> gettingAllOrders() {
        return null;
    }

    @Override
    public List<OrderVo> gettingOrderById(long id) {
        return null;
    }

    @Override
    public List<OrderVo> mostConsumedDrink() {
        return null;
    }
}
