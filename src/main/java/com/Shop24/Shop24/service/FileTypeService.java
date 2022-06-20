package com.crs_second_route.second_route.service;


import com.crs_second_route.second_route.vo.FileType;

import java.util.List;

public interface FileTypeService {

    public FileType findById(long id);

    public List<FileType> findAll();

    public FileType save(FileType fileType);

    public int delete(long id);
    
    public int fileCount();

}
