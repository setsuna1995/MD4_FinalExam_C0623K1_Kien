package com.example.demo.service;

import com.example.demo.model.Departments;
import com.example.demo.model.Employee;

public interface IEmployeeService extends IGeneralService<Employee> {
    Iterable<Employee> sortIncreasing();
    Iterable<Employee> sortDecreasing();
}
