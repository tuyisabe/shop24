package com.crs_second_route.second_route.service;

import com.crs_second_route.second_route.vo.LanguageVO;

import java.util.List;


public interface LanguageService {
	public LanguageVO getLanguageById(long id) throws Exception;

	public LanguageVO findByCode(String code);

	public LanguageVO save(LanguageVO language) throws Exception;

	public List<LanguageVO> findAll() throws Exception;

	public void delete(long id) throws Exception;

	public boolean languageExist() throws Exception;

	public void manageLanguage(List<LanguageVO> languageList, String action) throws Exception;
	public List<LanguageVO> findAllLanguage() ;
}
