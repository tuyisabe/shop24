package com.Shop24.Shop24.service.serviceImpl;

import com.Shop24.Shop24.dao.CargoDao;
import com.Shop24.Shop24.service.CargoService;
import com.Shop24.Shop24.vo.CargoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoServiceImpl implements CargoService {
    @Autowired
    private CargoDao cargoDao;
    @Override
    public CargoVo createNewCargo(CargoVo cargoVo) {
        return cargoDao.save(cargoVo);
    }

    @Override
    public List<CargoVo> gettingAllCargo() {
        return cargoDao.selectAllCargo();
    }

    @Override
    public List<CargoVo> gettingCargoById(long id) {
        return cargoDao.selectCargoById(id);
    }

    @Override
    public List<CargoVo> gettingCargoByRangeDate(String from, String to) {
        return cargoDao.selectBetweenRange(from, to);
    }
}
