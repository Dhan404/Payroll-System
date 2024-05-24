package np.edu.nast.pserver.controller;

import java.util.List;
import java.util.stream.Collectors;

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
//import np.edu.nast.pserver.exception.ResourceNotFoundException;
import np.edu.nast.pserver.model.Employee;
import np.edu.nast.pserver.model.Salary;
import np.edu.nast.pserver.repository.EmployeeRepository;
import np.edu.nast.pserver.repository.SalaryRepository;
//import np.edu.nast.pserver.repository.EmployeeRepository;
import np.edu.nast.pserver.response.ResponseMessage;
import np.edu.nast.pserver.service.impl.EmployeeService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	private EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//build create employee REST API 
	@PostMapping()
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeService.saveEmployee(employee), HttpStatus.CREATED);
	}
	
	//build get all employees REST API
	
	@GetMapping
	public List<Employee> getAllEmplyees(){
		return employeeService.getAllEmployees();
		
	}
	
	//build get employee by id REST API 
	//http://localhost:8080/api/employees/1
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long Id){
		return new ResponseEntity<Employee>(employeeService.getEmployeeById(Id), HttpStatus.OK);
			
	}
	
//	@GetMapping("{id}")
//	public ResponseEntity<Employee> getSalaryById(@PathVariable("id") long id){
//		Employee employee= employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Salary not exist with id:"+id, null, employeeRepository));
//		return ResponseEntity.ok(employee);
//	}
	
	
	
	//build update employee REST API
	//http://localhost:8080/api/employees/1
	
	@PutMapping("{id}")
	public ResponseEntity<Employee>updateEmployee(@PathVariable("id") long id
			,@RequestBody  Employee employee){
		return new ResponseEntity<Employee>(employeeService.updateEmployee(employee, id), HttpStatus.OK);
	}

	
	//build delete employee REST API
	//http://localhost:8080/api/employees/1
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable ("id") long id){
		employeeService.deleteEmployee(id);
		
		//return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);	
		return new ResponseEntity<String>(HttpStatus.OK);			

	}
	
	
	//build get employee by id REST API 
		//http://localhost:8080/api/employees/find/email
		
		@GetMapping("find/{email}")
		public ResponseEntity<ResponseMessage> checkEmployeeExists(@PathVariable("email") String email){
			ResponseMessage msg=null;
			if(employeeService.emailExists(email)) {
				msg = new ResponseMessage("Email already exists");
			}			
			return new ResponseEntity<ResponseMessage>(msg, HttpStatus.OK);				
		}
		

		
		
		  @GetMapping("/ids")
		    public ResponseEntity<List<Long>> getEmployeeIds() {
		        List<Long> employeeIds = employeeService.getAllEmployees().stream()
		                .map(Employee::getEmployeeId)
		                .collect(Collectors.toList());
		        return ResponseEntity.ok(employeeIds);
		    }
		  
		  
		  @GetMapping("/employeeId/{employeeId}")
		  public ResponseEntity<Employee> getEmployeeByEmployeeId(@PathVariable("employeeId") long employeeId) {
		        return new ResponseEntity<>(employeeService.getEmployeeByEmployeeId(employeeId), HttpStatus.OK);
		    }
		
	}

