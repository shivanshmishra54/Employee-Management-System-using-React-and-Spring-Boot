package com.employeemanagementsystem.ems.Controller;

import com.employeemanagementsystem.ems.Entity.Employee;
import com.employeemanagementsystem.ems.Repository.EmployeeRepo;
import com.employeemanagementsystem.ems.Service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ems")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AppController {

    private final EmployeeService employeeService;

    private final EmployeeRepo employeeRepo;

    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @DeleteMapping("/employee/{id}")
   public ResponseEntity<?> deleteEmployee(@PathVariable Long id) throws Exception {
        try {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee With Id DEleted:"+id , HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
   }

   @GetMapping("employee/{id}")
   public ResponseEntity<?> findById(@PathVariable Long id){
        Employee employee= employeeService.findById(id);
        if(employee==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(employee);
   }

   @PatchMapping("/employee/{id}")
   public ResponseEntity<?> updateEmployee(@RequestBody Employee employee, @PathVariable Long id){
        Employee employee1= employeeService.updateEmployee(employee,id);

        if (employee1==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        }
        return ResponseEntity.ok(employee1);
   }

}
