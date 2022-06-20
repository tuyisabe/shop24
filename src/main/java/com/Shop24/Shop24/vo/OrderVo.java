package com.Shop24.Shop24.vo;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ordering")
@Getter
@Setter
@NoArgsConstructor
public class OrderVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String totalAmount;
    private String transportMeans;
    private String transporterName;
    private String transporterPhone;
    private String payment_status;
    private String date;
    private String deliveryType;
    private boolean isDerived;
    private String status;
    @Column(name = "createdDate")
    @CreatedDate
    private Timestamp createdDate;
    @Column(name = "updatedDate")
    @LastModifiedDate
    private Timestamp updatedDate;
}
