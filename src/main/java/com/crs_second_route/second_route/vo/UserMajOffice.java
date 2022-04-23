package com.crs_second_route.second_route.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "crs_user_maj_office")
@Getter
@Setter
@NoArgsConstructor
public class UserMajOffice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserTable userId;
    private String majOffice;
}
