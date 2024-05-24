package np.edu.nast.pserver.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="employeeid",unique = true)
	private long employeeId;
	
	@Column(name="first_name",nullable=false)
	 private String firstName;
	
	@Column(name="last_name")
	 private String lastName;
	

	@Column(name="email")
	 private String email;
	

	@Column(name="date_of_birth")
	private LocalDate dateofBirth;
	

	@Column(name="gender")
	private String gender;
	
	@Column(name="address")
	private String address;
	
	@Column(name="phoneNumber")
	private String phoneNumber;
	
	@Column(name="designation")
	private String designation;
	
	@Column(name="department")
	private String department;	
	
	@Column(name="marital_status")
	private String maritalStatus;
	
	@Column(name="date_of_joining")
	private LocalDate dateofJoining;
	
	@Column(name="basic_salary")
	private long basicSalary;
	
}
