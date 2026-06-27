import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const fetchEmployees = () => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addEmployee = async () => {

    await axios.post(
      "http://localhost:5000/api/employees/add",
      {
        ...form,
        salary: Number(form.salary)
      }
    );

    setForm({
      name: "",
      email: "",
      department: "",
      salary: ""
    });

    fetchEmployees();
  };

  return (

    <div>

      <h1>Employees</h1>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="salary"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      <hr />

      {employees.map((emp: any) => (

        <div key={emp._id}>

          <h3>{emp.name}</h3>

          <p>{emp.email}</p>

          <p>{emp.department}</p>

          <p>₹{emp.salary}</p>

          <hr />

        </div>

      ))}

    </div>

  );

}

export default EmployeeList;