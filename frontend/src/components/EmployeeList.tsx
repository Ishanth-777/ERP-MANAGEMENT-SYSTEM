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

  const [editId, setEditId] = useState("");

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

    if (editId) {

      await axios.put(
        `http://localhost:5000/api/employees/update/${editId}`,
        {
          ...form,
          salary: Number(form.salary)
        }
      );

      setEditId("");

    } else {

      await axios.post(
        "http://localhost:5000/api/employees/add",
        {
          ...form,
          salary: Number(form.salary)
        }
      );

    }

    setForm({
      name: "",
      email: "",
      department: "",
      salary: ""
    });

    fetchEmployees();
  };

  const deleteEmployee = async (id: string) => {

    await axios.delete(
      `http://localhost:5000/api/employees/delete/${id}`
    );

    fetchEmployees();
  };

  const editEmployee = (emp: any) => {

    setEditId(emp._id);

    setForm({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      salary: emp.salary.toString()
    });

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
        {editId ? "Update Employee" : "Add Employee"}
      </button>

      <hr />

      {employees.map((emp: any) => (

        <div key={emp._id}>

          <h3>{emp.name}</h3>

          <p>{emp.email}</p>

          <p>{emp.department}</p>

          <p>₹{emp.salary}</p>

          <button
            onClick={() => editEmployee(emp)}
          >
            Edit
          </button>

          {" "}

          <button
            onClick={() => deleteEmployee(emp._id)}
          >
            Delete
          </button>

          <hr />

        </div>

      ))}

    </div>

  );

}

export default EmployeeList;