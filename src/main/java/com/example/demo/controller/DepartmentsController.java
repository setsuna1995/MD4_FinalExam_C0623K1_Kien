package com.example.demo.controller;


import com.example.demo.model.Departments;
import com.example.demo.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/departments")
public class DepartmentsController {
    private final DepartmentService departmentService;

    @Autowired
    public DepartmentsController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }
    @GetMapping
    private ResponseEntity<Iterable<Departments>> showList(){
        return new ResponseEntity<>(departmentService.findAll(), HttpStatus.OK);
    }
}
