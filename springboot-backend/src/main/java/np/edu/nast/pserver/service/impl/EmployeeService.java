package np.edu.nast.pserver.service.impl;

import java.util.List;

import np.edu.nast.pserver.model.Employee;

public interface EmployeeService {
	Employee saveEmployee(Employee employee);
	List<Employee> getAllEmployees();
	Employee getEmployeeById(long id);
	Employee updateEmployee(Employee employee,long id);
	void deleteEmployee(long id);
	boolean emailExists(String email);
	List<Long>getEmployeeIds();
	Employee getEmployeeByEmployeeId(long employeeId);
	
}
