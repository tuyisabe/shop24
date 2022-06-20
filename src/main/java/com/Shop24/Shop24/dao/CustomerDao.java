package com.Shop24.Shop24.dao;

import com.Shop24.Shop24.vo.CustomerVo;
import com.Shop24.Shop24.vo.DrinkVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerDao extends JpaRepository<CustomerVo,Long> {
    @Query(value = "SELECT * FROM customer", nativeQuery = true)
    List<CustomerVo> findAllCustomers();

    @Query(value = "SELECT * FROM customer WHERE id= :id",nativeQuery = true)
    List<CustomerVo>findCustomerById(@Param("id") long id);
}
