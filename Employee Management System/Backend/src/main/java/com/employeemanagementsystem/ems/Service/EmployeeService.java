package com.employeemanagementsystem.ems.Service;


import com.employeemanagementsystem.ems.Entity.Employee;
import com.employeemanagementsystem.ems.Repository.EmployeeRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> getAllEmployee(){
        return employeeRepo.findAll();
    }

    public void deleteEmployee(Long id){

      if(!employeeRepo.existsById(id)){
          throw new EntityNotFoundException("Employee Not found:"+ id);
      }
        employeeRepo.deleteById(id);
    }

    public Employee findById(Long id){
        return employeeRepo.findById(id).orElseThrow();
    }

    public Employee updateEmployee(Employee employee, Long id){
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);
        if(optionalEmployee.isPresent()){
            Employee employee1= optionalEmployee.get();

            employee1.setName(employee.getName());
            employee1.setEmail(employee.getEmail());
            employee1.setDepartment(employee.getDepartment());
            employee1.setPhoneNo(employee.getPhoneNo());

            return employeeRepo.save(employee1);
        }
        return null;
    }
}
