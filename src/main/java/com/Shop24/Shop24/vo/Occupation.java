package com.crs_second_route.second_route.vo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "crs_occupation")
@Getter
@Setter
@NoArgsConstructor
public class Occupation extends AuditingExtension {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String descriptionEnglish;
    private String descriptionFrench;
    private String descriptionKinyarwanda;


}