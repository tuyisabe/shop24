package com.crs_second_route.second_route.vo;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "crs_nationality")
// @Where(clause = "is_deleted = false")
// @SQLDelete(sql = "UPDATE nationality SET is_deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Nationality extends AuditingExtension implements Serializable {
    private static final long serialVersionUID = 6301883302862670011L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    @Column(unique = true)
    private String vwpsCode;

    @Column(unique = true)
    private String iecmsCode;

    @Column(name = "name_english")
    private String nameEnglish;

    @Column(name = "name_french")
    private String nameFrench;

    @Column(name = "name_kinyarwanda")
    private String nameKinyarwanda;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "country_id", nullable = false)
    @JsonManagedReference
    private Country country;

}
