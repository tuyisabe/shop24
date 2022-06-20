package com.Shop24.Shop24.vo.dto;

import com.Shop24.Shop24.vo.CustomerVo;
import com.Shop24.Shop24.vo.DrinkVo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.sql.Timestamp;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Getter
@Setter
@NoArgsConstructor
public class OrderDTO {
    private String totalAmount;
    private String transportMeans;
    private String transporterName;
    private String transporterPhone;
    private String payment_status;
    private String date;
    private String deliveryType;
    private boolean isDerived;
    private String status;
    private Timestamp createdDate;
    private Timestamp updatedDate;
}
