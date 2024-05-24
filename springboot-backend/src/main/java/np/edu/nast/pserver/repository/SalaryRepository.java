package np.edu.nast.pserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import np.edu.nast.pserver.model.Salary;
@Repository
public interface SalaryRepository extends JpaRepository<Salary, Long>{
	
	@Query("SELECT DISTINCT s.employeeId FROM Salary s")
	List<Long>getAllEmployeeIds();

}
