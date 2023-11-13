function showEmployeeDetail() {
    axios.get(`http://localhost:8080/api/employees`).then((res) => {
        const employees = res.data;
        console.log(employees)
        const tableBody = document.getElementById("employee");
        employees.forEach((employee) => {
            tableBody.innerHTML += `
            <h5>Name: ${employee.name}</h5>
            <h5>Age: ${employee.age}</h5>
            <h5>Salary: ${employee.salary}</h5>
            <h5>Departments: ${employee.departments.name}</h5>
            <a href="home.html">Back to list</a>
        `;
        });
    });
}

document.addEventListener("DOMContentLoaded", showEmployeeDetail);