package com.crs_second_route.second_route.vo;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.List;

@Entity(name = "crs_province")
@Table(name = "crs_province")
// @Where(clause = "is_deleted = false")
// @SQLDelete(sql = "UPDATE province SET is_deleted = true WHERE id = ?")
@Getter
@Setter
@NoArgsConstructor
// @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
// property="id")
public class Province {

    private static final long serialVersionUID = 2558925075008721537L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NaturalId
    @Column(name = "code")
    private String code;

    private String name;

    @OneToMany(mappedBy = "province", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<District> districts;
}
