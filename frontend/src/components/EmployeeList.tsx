import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

const [employees,
setEmployees] =
useState([]);

useEffect(()=>{

axios
.get(
"http://localhost:5000/api/employees"
)

.then((res)=>{

setEmployees(
res.data
);

})

.catch(
console.log
);

},[]);

return(

<div>

<h1>
Employees
</h1>

{

employees.map(
(emp:any)=>(

<div
key=
{emp._id}
>

<p>
{emp.name}
</p>

<p>
₹
{emp.salary}
</p>

<hr/>

</div>

)

)

}

</div>

);

}

export default
EmployeeList;