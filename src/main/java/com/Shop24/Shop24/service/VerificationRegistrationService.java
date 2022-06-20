package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.VerificationRegistration;

public interface VerificationRegistrationService {
    public void sendSimpleMessage(String from, String to, String subject, String text);

    public void saveCode(VerificationRegistration verificationRegistration);

    public String findByCode(String code);

 public void disableCode( String code);
}
