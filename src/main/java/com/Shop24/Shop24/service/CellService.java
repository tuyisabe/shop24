package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Cell;

import java.util.List;

public interface CellService {
    public Cell findById(long id);

    public Cell findByCode(String code);

    public void save(Cell cell);

    public List<Cell> findAll();

    public void delete(long id);

    public List<Cell> findBySector(String code);

    Cell findSingleByCode(String code);
}
