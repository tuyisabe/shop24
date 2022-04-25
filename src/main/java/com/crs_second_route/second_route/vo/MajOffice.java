package com.crs_second_route.second_route.vo;

import java.io.Serializable;

import javax.persistence.Column;
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
@Table(name = "crs_maj_office")
@Getter
@Setter
@NoArgsConstructor
public class MajOffice extends AuditingExtension implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String email;
    @Column(name = "is_used", columnDefinition = "boolean default true")
    private boolean isUsed;

}
