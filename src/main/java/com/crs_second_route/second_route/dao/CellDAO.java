package com.crs_second_route.second_route.dao;

import com.crs_second_route.second_route.vo.Cell;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CellDAO extends JpaRepository<Cell, Long> {
    @Query("Select c from crs_cell c where SUBSTRING(c.code,1,6)=?1")
    List<Cell> findBySectorCode(String code);
    Cell findByCode(String code);

    @Query(value = "SELECT * FROM crs_cell WHERE code=:code",nativeQuery = true)
    Cell findBySingleCode(String code);
}
