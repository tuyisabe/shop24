package com.crs_second_route.second_route.vo;

import com.crs_second_route.second_route.vo.extensions.AuditingExtension;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity(name = "crs_district")
@Table(name = "crs_district")
// @Where(clause = "is_deleted = false")
// @SQLDelete(sql = "UPDATE crs_district SET is_deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class District extends AuditingExtension implements Serializable  {

    private static final long serialVersionUID = -2077410764983481766L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "province_code", nullable = false, referencedColumnName = "code")
    private Province province;

    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Sector> sectors;
}
