package com.Shop24.Shop24.dao;

import com.Shop24.Shop24.vo.DrinkVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DrinkDao extends JpaRepository<DrinkVo, Long> {
    @Query(value = "SELECT * FROM drink", nativeQuery = true)
    List<DrinkVo> findAllDrinks();
    @Query(value = "SELECT * FROM drink WHERE id= :id",nativeQuery = true)
    List<DrinkVo>findDrinkById(@Param("id") long id);
}
