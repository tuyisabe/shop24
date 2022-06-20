package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.CountryDAO;
import com.crs_second_route.second_route.service.CountryService;
import com.crs_second_route.second_route.vo.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryDAO countryRepository;

    @Override
    public Country findById(long id) {
        return countryRepository.findById(id).get();
    }

    @Override
    public Country findByAlpha2Code(String code) {
        return countryRepository.findByAlpha2Code(code);
    }

    @Override
    public Country findByAlpha3Code(String code) {
        return countryRepository.findByAlpha3Code(code);
    }

    @Override
    public Country findByNumericCode(String code) {
        return countryRepository.findByNumericCode(code);
    }

    @Override
    public Country save(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public List<Country> findAll() {
        return countryRepository.findAll();
    }

    @Override
    public void delete(long id) {
        countryRepository.deleteById(id);
    }

    @Override
    public Country findBySingleCode(String code) {
        return null;
    }

}
