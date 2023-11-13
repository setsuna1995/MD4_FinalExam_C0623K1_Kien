package com.example.demo.service;

import com.example.demo.model.Departments;
import com.example.demo.repository.DepartmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentService implements IDepartmentsService {
    private final DepartmentsRepository departmentsRepository;

    @Autowired
    public DepartmentService(DepartmentsRepository departmentsRepository) {
        this.departmentsRepository = departmentsRepository;
    }

    @Override
    public Iterable<Departments> findAll() {
        return departmentsRepository.findAll();
    }

    @Override
    public Optional<Departments> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Departments save(Departments departments) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
