package com.Shop24.Shop24.dao;

import com.Shop24.Shop24.vo.OrderVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDao extends JpaRepository<OrderVo,Long> {
    @Query(value = "SELECT MAX() FROM ordering WHERE  ", nativeQuery = true)
    String mostConsumedDring();
}
