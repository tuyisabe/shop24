package com.crs_second_route.second_route.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@Table(name = "crs_user_nationalities")
@Getter
@Setter
@NoArgsConstructor
public class UserNationalities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserTable userId;
    private String nationality;


}
