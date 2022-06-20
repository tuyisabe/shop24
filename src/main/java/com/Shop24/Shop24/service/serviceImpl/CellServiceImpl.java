package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.CellDAO;
import com.crs_second_route.second_route.service.CellService;
import com.crs_second_route.second_route.vo.Cell;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CellServiceImpl implements CellService {
    @Autowired
    private CellDAO cellRepository;

    @Override
    public Cell findById(long id) {
        return cellRepository.findById(id).get();
    }

    @Override
    public void save(Cell cell) {
        cellRepository.save(cell);
    }

    @Override
    public List<Cell> findAll() {
        return cellRepository.findAll();
    }

    @Override
    public void delete(long id) {
        cellRepository.deleteById(id);

    }

    @Override
    public List<Cell> findBySector(String code) {
        return cellRepository.findBySectorCode(code);
    }

    @Override
    public Cell findSingleByCode(String code) {
        return cellRepository.findBySingleCode(code);
    }

    @Override
    public Cell findByCode(String code) {
        Cell cellVO = cellRepository.findByCode(code);
        return cellVO;
    }

}