package np.edu.nast.pserver.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import np.edu.nast.pserver.exception.ResourceNotFoundException;
import np.edu.nast.pserver.model.Salary;
import np.edu.nast.pserver.repository.EmployeeRepository;
import np.edu.nast.pserver.repository.SalaryRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/salaries")
public class SalaryController {
	
	@Autowired
	private SalaryRepository salaryRepository;
	
	//get all salaries 
	@GetMapping
	public List<Salary> getAllSalaries(){
		return salaryRepository.findAll();
	}
	 
	
	
	//create salary rest api
	@PostMapping
	public Salary createSalary(@RequestBody Salary salary) {
		return salaryRepository.save(salary);
	}
	
	//get salary by id rest API
	@GetMapping("{id}")
	public ResponseEntity<Salary> getSalaryById(@PathVariable("id") long id){
		Salary salary= salaryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Salary not exist with id:"+id, null, salaryRepository));
		return ResponseEntity.ok(salary);
	}
	
	//update Salary rest api
	@PutMapping("{id}")
	public ResponseEntity<Salary> updateSalary(@PathVariable Long id,@RequestBody Salary salaryDetails){
	Salary salary=salaryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Salary not exist with id:"+id,null,salaryRepository));
	salary.setFirstName(salaryDetails.getFirstName());
	salary.setLastName(salaryDetails.getLastName());
	salary.setDesignation(salaryDetails.getDesignation());
	salary.setMaritalStatus(salaryDetails.getMaritalStatus());
	salary.setBasicSalary(salaryDetails.getBasicSalary());
	salary.setDearnessAllowance(salaryDetails.getDearnessAllowance());
	salary.setHouseRentAllowance(salaryDetails.getHouseRentAllowance());
	salary.setPfContribution(salaryDetails.getPfContribution());
	salary.setSsfContribution(salaryDetails.getSsfContribution());
	salary.setMedicalInsurance(salaryDetails.getMedicalInsurance());
	salary.setMonthlyIncomeTax(salaryDetails.getMonthlyIncomeTax());
	salary.setNetMonthlySalary(salaryDetails.getNetMonthlySalary());
	salary.setGrossMonthlySalary(salaryDetails.getGrossMonthlySalary());
	salary.setTaxableMonthlyIncome(salaryDetails.getTaxableMonthlyIncome());
	salary.setTaxableAnnualIncome(salaryDetails.getTaxableAnnualIncome());
	
	Salary updatedSalary=salaryRepository.save(salary);
	return ResponseEntity.ok(updatedSalary);
	}
	
	//Delete Salary Rest API
	@DeleteMapping("{id}")
	public ResponseEntity<Map<String,Boolean>>deleteSalary(@PathVariable Long id){
		Salary salary = salaryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Salary not Exist with id", null, id));
		salaryRepository.delete(salary);
		Map<String, Boolean>response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
