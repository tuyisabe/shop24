package com.Shop24.Shop24.service;

import com.Shop24.Shop24.vo.CargoVo;

import java.util.List;

public interface CargoService {
    public CargoVo createNewCargo(CargoVo cargoVo);
    public List<CargoVo> gettingAllCargo();
    public List<CargoVo> gettingCargoById(long id);
    public List<CargoVo> gettingCargoByRangeDate(String from, String to);
}
