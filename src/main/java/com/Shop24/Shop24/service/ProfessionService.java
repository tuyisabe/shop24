package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Profession;

import java.util.List;


public interface ProfessionService {
    List<Profession> listProfession();
    List<Profession> findAll();

    Profession findById(long id);

    Profession save(Profession profession);


    int delete(long id);

    public int countingProfession();
}
