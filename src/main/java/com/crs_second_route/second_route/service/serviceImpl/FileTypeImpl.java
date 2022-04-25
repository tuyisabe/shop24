package com.crs_second_route.second_route.service.serviceImpl;

import com.crs_second_route.second_route.dao.FileTypeDAO;
import com.crs_second_route.second_route.service.FileTypeService;
import com.crs_second_route.second_route.vo.FileType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileTypeImpl implements FileTypeService {
    @Autowired
    private FileTypeDAO fileTypeRepository;

    @Override
    public FileType findById(long id) {
        return fileTypeRepository.findById(id).get();
    }

    @Override
    public List<FileType> findAll() {
        return fileTypeRepository.selectFile();
    }

    @Override
    public FileType save(FileType fileType) {
        return fileTypeRepository.save(fileType);
    }

    @Override
    public int delete(long id) {
        return fileTypeRepository.deleting(id);
        // fileTypeRepository.deleteById(id);
    }
    @Override
    public int fileCount() {
        // TODO Auto-generated method stub
        return fileTypeRepository.fileCount();
    }

    // @Override
    // public void delete(long id) { fileTypeRepository.deleting(id);
    //
    // }
}
