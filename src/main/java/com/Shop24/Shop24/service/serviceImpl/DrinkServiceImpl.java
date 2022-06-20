package com.Shop24.Shop24.service.serviceImpl;

import com.Shop24.Shop24.dao.DrinkDao;
import com.Shop24.Shop24.service.DrinkService;
import com.Shop24.Shop24.vo.DrinkVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DrinkServiceImpl implements DrinkService {
    @Autowired
    private DrinkDao drinkDao;

    @Override
    public DrinkVo createDrink(DrinkVo drinkVo) throws Exception {
        drinkDao.save(drinkVo);
        return drinkVo;
    }

    @Override
    public List<DrinkVo> selectAllDrinks() {
        return drinkDao.findAllDrinks();
    }

    @Override
    public List<DrinkVo> findDrinkById(long id) {
        return drinkDao.findDrinkById(id);
    }
}
