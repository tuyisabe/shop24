package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Reason;

import java.util.List;


public interface ReasonService {
    public List<Reason> listApplicationReasons();

    public Reason findById(long id);

    public Reason save(Reason applicationReason);

    public int delete(long id);

    public List<Reason> listReasons();

    public int countingReason();

    Reason updateReason(Reason reason);

    public void update(long id, String nameEnglish, String nameFrench, String nameKinyarwanda);

}
