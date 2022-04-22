package com.crs_second_route.second_route.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "crs_verification_registration")
@Getter
@Setter
@NoArgsConstructor
public class VerificationRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String verificationCode;

    @Column(name = "created_at")
    @CreatedDate
    private Timestamp createdAt;

    private Date expiryDate;
@Column(name = "is_enabled")
    private boolean IsEnabled;
}
