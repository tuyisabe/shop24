package com.crs_second_route.second_route.vo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "crs_village")
@Table(name = "crs_village")
// @Where(clause = "is_deleted = false")
// @SQLDelete(sql = "UPDATE crs_village SET is_deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
public class Village  {
    private static final long serialVersionUID = 4653237485775960277L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "cell_code", nullable = false, referencedColumnName = "code")
    private Cell cell;
}