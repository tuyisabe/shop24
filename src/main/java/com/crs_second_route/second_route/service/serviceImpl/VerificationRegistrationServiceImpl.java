package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.VerificationRegistrationDAO;
import com.crs_second_route.second_route.service.VerificationRegistrationService;
import com.crs_second_route.second_route.vo.VerificationRegistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.internet.MimeMessage;

@Service
public class VerificationRegistrationServiceImpl implements VerificationRegistrationService {
    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private VerificationRegistrationDAO verificationRegistrationDAO;

    @Autowired
    private SpringTemplateEngine templateEngine;
    @Override
    public void sendSimpleMessage(String from, String to, String subject, String text) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);
            emailSender.send(message);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public void saveCode(VerificationRegistration verificationRegistration) {
    verificationRegistrationDAO.save(verificationRegistration);
    }

    @Override
    public String findByCode(String code) {
        return verificationRegistrationDAO.findByCode(code);
    }

    @Override
    public void disableCode(String code) {
        verificationRegistrationDAO.disableCode(code);
    }
}
