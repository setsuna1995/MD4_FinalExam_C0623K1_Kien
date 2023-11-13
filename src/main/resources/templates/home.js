function showList() {
    axios.get(`http://localhost:8080/api/employees`).then((res) => {
        const employees = res.data;
        console.log(employees)
        const tableBody = document.getElementById("tableBody");
        employees.forEach((employee) => {
            tableBody.innerHTML += `
          <tr scope="row">
                      <td>${employee.employeeId}</td>
            <td><a href="employeeDetail.html">${employee.name}</a> </td>
            <td>${employee.age}</td>
            <td>${employee.salary}</td>
            <td>${employee.departments.name}</td>
  <td><button onclick="editEmployee(${employee.id})">Edit</button></td>
  <td><button onclick="deleteEmployee(${employee.id})">Delete</button></td>
        <th scope="col"></th>
          </tr>
        `;
        });
    });
}
async function deleteEmployee(id) {
    const confirmed = confirm('Are you sure you want to delete this employee?');

    if (confirmed) {
        try {
            const response = await axios.delete(`http://localhost:8080/api/employees/${id}`);

            if (response.status === 200) {
                window.location.href = 'home.html';
            } else {
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    }
}
document.addEventListener("DOMContentLoaded", showList);
function editEmployee(idEmployee) {
    Promise.all([
        axios.get(`http://localhost:8080/api/employees/${idEmployee}`),
        axios.get(`http://localhost:8080/api/departments`)
    ]).then((res)=>{
        let employee = res[0].data;
        let departments = res[1].data;
        let str = `
         <div class="form-group">
        <label for="code">EMPLOYEE CODE</label>
        <input style="width: 300px;" type="text" class="form-control" id="codeEdit" value="${employee.employeeId}">
    </div>
        <div class="form-group">
        <label for="name">NAME</label>
        <input style="width: 300px;" type="text" class="form-control" id="nameEdit" value="${employee.name}">
    </div>
        <div class="form-group">
        <label for="age">AGE</label>
        <input style="width: 300px;" type="number" class="form-control" id="ageEdit" value="${employee.age}">
    </div>
        <div class="form-group">
        <label for="salary">SALARY</label>
        <input style="width: 300px;" type="number" class="form-control" id="salaryEdit" value="${employee.salary}">
    </div>
    <select style="width: 300px;" id="departmentEdit" class="form-control">
        `
        for (let i = 0; i < departments.length; i++) {
            str +=
                `
                <option value="${departments[i].id}">${departments[i].name}</option>
                `
        }
        str +=
            `
             </select>
             <div>
             <button class="btn btn-primary" onclick="saveEdit(${employee.id})">Edit</button>
             </div>
            
            `
        document.getElementById('edit').innerHTML = str
    })
}
function saveEdit(idEmployee) {
    console.log(document.getElementById('codeEdit').value)
    let data = {
        employeeId: document.getElementById('codeEdit').value,
        name: document.getElementById('nameEdit').value,
        age: document.getElementById('ageEdit').value,
        salary: document.getElementById('salaryEdit').value,
        departments: {
            id: document.getElementById('departmentEdit').value
        }
    }
    axios.put(`http://localhost:8080/api/employees/${idEmployee}`, data).then((res) => {
        alert('Edit Success')
        window.location.href = 'home.html';
    })
}
function showFormSortI() {
    axios.get(`http://localhost:8080/api/employees/sortI`).then((res) => {
        let list = res.data
        document.getElementById("tableBody").innerHTML = ''
        let str = `<table class="table table-striped">
                            <thead>
                            <tr>
                              <th scope="col">EmployeeCode</th>
                              <th scope="col">Name</th>
                              <th scope="col">Age</th>
                              <th scope="col">Salary</th>
                              <th scope="col">Department</th>
                              <th scope="col" colspan="2">Action</th>
                            </tr>
                          </thead>
                          <tbody>`
        for (let i = 0; i < list.length; i++) {
            str += ` <tr>
                              <th>${list[i].employeeId}</th>
                              <td><a style="cursor: pointer" onclick="showDetail(${list[i].id})">${list[i].name}</a></td>
                              <td>${list[i].age}</td>
                              <td>${list[i].salary}</td>
                              <td>${list[i].departments.name}</td>
                              <td><button type="button" class="btn btn-primary"><a style="cursor: pointer" onclick="editEmployee(${list[i].id})">Update</a> </button></td>
                              <td><button type="button" class="btn btn-primary"><a style="cursor: pointer" onclick="deleteEmployee(${list[i].id})">Delete</a></button></td>
                            </tr>`
        }
        str += `</tbody>
                           <button type="submit" class="btn btn-primary" ><a style="color: black" href="home.html">Back to list</a></button>

        </table>`
        document.getElementById("tableBody").innerHTML = str
    })
}
function showFormSortD() {
    axios.get(`http://localhost:8080/api/employees/sortD`).then((res) => {
        let list = res.data
        document.getElementById("tableBody").innerHTML = ''
        let str = `<table class="table table-striped">
                            <thead>
                            <tr>
                              <th scope="col">EmployeeCode</th>
                              <th scope="col">Name</th>
                              <th scope="col">Age</th>
                              <th scope="col">Salary</th>
                              <th scope="col">Department</th>
                              <th scope="col" colspan="2">Action</th>
                            </tr>
                          </thead>
                          <tbody>`
        for (let i = 0; i < list.length; i++) {
            str += ` <tr>
                              <th>${list[i].employeeId}</th>
                              <td><a style="cursor: pointer" onclick="showDetail(${list[i].id})">${list[i].name}</a></td>
                              <td>${list[i].age}</td>
                              <td>${list[i].salary}</td>
                              <td>${list[i].departments.name}</td>
                              <td><button type="button" class="btn btn-primary"><a style="cursor: pointer" onclick="editEmployee(${list[i].id})">Update</a> </button></td>
                              <td><button type="button" class="btn btn-primary"><a style="cursor: pointer" onclick="deleteEmployee(${list[i].id})">Delete</a></button></td>
                            </tr>`
        }
        str += `</tbody>
                           <button type="submit" class="btn btn-primary" ><a style="color: black" href="home.html">Back to list</a></button>

        </table>`
        document.getElementById("tableBody").innerHTML = str
    })
}