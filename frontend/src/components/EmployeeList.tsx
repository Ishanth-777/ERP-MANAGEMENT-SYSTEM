import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Employees</h2>

      {employees.map((emp) => (
        <div key={emp._id}>
          <p>Name: {emp.name}</p>
          <p>Email: {emp.email}</p>
          <p>Department: {emp.department}</p>
          <p>Salary: ₹{emp.salary}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;