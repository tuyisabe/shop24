package com.Shop24.Shop24.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "customer")
@Getter
@Setter
@NoArgsConstructor
public class CustomerVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String CustomerNames;
    private String address;
    @Column(name = "createdDate")
    @CreatedDate
    private Timestamp createdDate;
    @Column(name = "updatedDate")
    @LastModifiedDate
    private Timestamp updatedDate;


}
