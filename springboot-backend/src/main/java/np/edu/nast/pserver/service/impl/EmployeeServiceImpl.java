package np.edu.nast.pserver.service.impl;

import java.util.List;
//import java.util.Optional;

import org.springframework.stereotype.Service;

import np.edu.nast.pserver.exception.ResourceNotFoundException;
import np.edu.nast.pserver.model.Employee;
import np.edu.nast.pserver.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{


	private EmployeeRepository employeeRepository;


	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}


	@Override
	public Employee saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}


	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();


	}


	@Override
	public Employee getEmployeeById(long id) {
		//Optional<Employee>employee=employeeRepository.findById(id);
		//		if(employee.isPresent()) {
		//			return employee.get();
		//		}else {
		//			throw new ResourceNotFoundException("Employee", "Id", id);
		//		}

		return employeeRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Employee", "Id", id));
	}


	@Override
	public Employee updateEmployee(Employee employee, long id) {

		// we need to check whether employee with given id exist in database or not 
		Employee existingEmployee = employeeRepository.findById(id).orElseThrow(()->
		new ResourceNotFoundException("Employee", "Id", id));
		existingEmployee.setFirstName(employee.getFirstName());
		existingEmployee.setLastName(employee.getLastName());
		existingEmployee.setEmail(employee.getEmail());
		existingEmployee.setAddress(employee.getAddress());
		existingEmployee.setDateofBirth(employee.getDateofBirth());
		existingEmployee.setGender(employee.getGender());
		existingEmployee.setPhoneNumber(employee.getPhoneNumber());
		existingEmployee.setDesignation(employee.getDesignation());
		existingEmployee.setDepartment(employee.getDepartment());
		existingEmployee.setMaritalStatus(employee.getMaritalStatus());
		existingEmployee.setDateofJoining(employee.getDateofJoining());
		existingEmployee.setBasicSalary(employee.getBasicSalary());

		//save existing employee to database

		employeeRepository.save(existingEmployee);
		return existingEmployee;

	}


	@Override
	public void deleteEmployee(long id) {

		//check whether a employee exist in a database or not 
		employeeRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Employee", "Id", id));

		employeeRepository.deleteById(id);

	}

	@Override
	public boolean emailExists(String email) {
		return employeeRepository.existsByEmail(email);
	}


	@Override
	public List<Long> getEmployeeIds() {
		return employeeRepository.findAllEmployeeIds();
	}


	@Override
	public Employee getEmployeeByEmployeeId(long employeeId) {
		return employeeRepository.findByEmployeeId(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee not found with employeeId:"+employeeId, null, employeeRepository));
	}


	

	

}
