package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.Nationality;

import java.util.List;


public interface NationalityService {
	public Nationality findById(long id);

	public Nationality findByCode(String code);

	public Nationality save(Nationality nationality);

	public List<Nationality> findAll();

	public void delete(long id);
}
