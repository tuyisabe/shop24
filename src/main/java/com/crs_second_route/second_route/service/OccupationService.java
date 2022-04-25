package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Occupation;

import java.util.List;


public interface OccupationService {

    void saveOccupation(Occupation occupation);

    List<Occupation> findAllOccupation();

    void updateOccupation(Occupation occupation);

    int deleteOccupation(long id);

    Occupation findById(long id);

    public List<Occupation> findAllOccupations();

    public int countingOccupation();

}
