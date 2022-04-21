package com.crs_second_route.second_route.service;

public interface VerificationRegistrationService {
    public void sendSimpleMessage(String from, String to, String subject, String text);
}
