package com.gc.empmng.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gc.empmng.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
