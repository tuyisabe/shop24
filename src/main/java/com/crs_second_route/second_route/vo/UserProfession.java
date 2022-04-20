package com.crs_second_route.second_route.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_profession")
@Getter
@Setter
@NoArgsConstructor
public class UserProfession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserTable userId;
}
