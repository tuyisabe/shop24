package com.Shop24.Shop24.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
@Entity
@Table(name = "cargo")
@Getter
@Setter
@NoArgsConstructor
public class CargoVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
    private String cargoName;
    private String longitude;
    private String latitude;
    private Date transportedDate;
    @ManyToOne
    @JoinColumn(name = "drink_vo_id")
    private DrinkVo drinkVo;
    private String status;
    @Column(name = "createdDate")
    @CreatedDate
    private Timestamp createdDate;
    @Column(name = "updatedDate")
    @LastModifiedDate
    private Timestamp updatedDate;
}
