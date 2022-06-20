package com.Shop24.Shop24.service;

import com.Shop24.Shop24.vo.DrinkVo;

import java.util.List;

public interface DrinkService {
    public DrinkVo createDrink(DrinkVo drinkVo) throws Exception;

    public List<DrinkVo> selectAllDrinks();

    public List<DrinkVo> findDrinkById(long id);
}
