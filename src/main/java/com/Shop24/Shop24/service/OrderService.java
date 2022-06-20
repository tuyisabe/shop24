package com.Shop24.Shop24.service;


import com.Shop24.Shop24.vo.OrderVo;

import java.util.List;

public interface OrderService {
    public OrderVo createNewOrder(OrderVo orderVo) throws Exception;
    public List<OrderVo> gettingAllOrders();
    public List<OrderVo> gettingOrderById(long id);
    public List<OrderVo> mostConsumedDrink();

}
