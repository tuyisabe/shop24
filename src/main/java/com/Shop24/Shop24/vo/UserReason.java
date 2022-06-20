package com.crs_second_route.second_route.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_Reason")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserReason {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserTable userId;
    private String attachments;
}