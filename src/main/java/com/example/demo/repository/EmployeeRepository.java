package com.example.demo.repository;



import com.example.demo.model.Departments;
import com.example.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(value = "select * from employee order by age DESC", nativeQuery = true)
    Iterable<Employee> sortIncreasing();

    @Query(value = "select * from employee order by age ASC", nativeQuery = true)
    Iterable<Employee> sortDecreasing();
}

