package np.edu.nast.pserver.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import np.edu.nast.pserver.model.Employee;
import np.edu.nast.pserver.service.impl.EmployeeService;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	EmployeeService save(EmployeeService employee);
	
	Boolean existsByEmail(String email);
	@Query("SELECT e.employeeId FROM Employee e")
	List<Long>findAllEmployeeIds();
	Optional<Employee> findByEmployeeId(long employeeId);

}
