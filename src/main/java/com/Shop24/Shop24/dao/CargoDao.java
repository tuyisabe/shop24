package com.Shop24.Shop24.dao;

import com.Shop24.Shop24.vo.CargoVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CargoDao extends JpaRepository<CargoVo, Long> {
    @Query(value = "SELECT * FROM cargo WHERE id= :id", nativeQuery = true)
    List<CargoVo> selectCargoById(@Param("id") long id);

    @Query(value = "SELECT * FROM cargo ", nativeQuery = true)
    List<CargoVo> selectAllCargo();

    @Query(value = "SELECT * FROM cargo WHERE transported_date BETWEEN 'from' AND 'to'",nativeQuery = true)
    List<CargoVo> selectBetweenRange(@Param("from") String from ,@Param("to") String to);
}
