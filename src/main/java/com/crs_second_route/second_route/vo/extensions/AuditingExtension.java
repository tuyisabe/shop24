package com.crs_second_route.second_route.vo.extensions;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

/**
 * The ({@code TimestampExtension}) class is a mapped super class
 * ({@code MappedSuperclass}) that is to be extended by all entities that need
 * to have the ({@code createdAt}) and the ({@code lastModifiedAt}) timestamp
 * columns incorporated automatically.
 * 
 * @author Sam S.
 */

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
public class AuditingExtension implements Serializable {

    private static final long serialVersionUID = 5716173505088478730L;

    @Column(name = "created_at", nullable = true, updatable = false)
    @CreatedDate
    private Timestamp createdAt;

    @Column(name = "last_modified_at")
    @LastModifiedDate
    private Timestamp lastModifiedAt;

    @Column(name = "created_by", nullable = true)
    // @CreatedBy
    private Long createdBy;

    @Column(name = "last_updated_by", nullable = true)
    // @LastModifiedBy
    private Long lastUpdatedBy;

    @Column(name = "is_deleted", insertable = false, columnDefinition = "boolean default false")
    private boolean isDeleted;
    // private Boolean isDeleted = Boolean.FALSE;

}
