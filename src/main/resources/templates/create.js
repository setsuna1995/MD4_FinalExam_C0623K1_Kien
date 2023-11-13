createEmployee();

function createEmployee() {
    tempContainer();

    async function tempContainer() {
        try {
            const departmentData = await fetchDepartmentData();
            document.getElementById("create").innerHTML = employeeContainer(departmentData);
        } catch (error) {
            console.error('Error fetching department data:', error);
        }
    }

    function employeeContainer(departmentData) {
        const departmentOptions = departmentData.map(dep => `<option value="${dep.id}">${dep.name}</option>`).join('');
        return `
            <form>
                <div class="form-group col-md-6">
                    <label for="employeeId">Employee Code</label>
                    <input type="text" class="form-control" id="employeeId" placeholder="Enter code">
                </div>
                <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name">
                </div>
                <div class="form-group col-md-6">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" placeholder="Enter age">
                </div>
                <div class="form-group col-md-6">
                    <label for="salary">Salary</label>
                    <input type="text" class="form-control" id="salary" placeholder="Enter salary">
                </div>
                <div class="form-group col-md-4">
                    <label for="department">Department</label>
                    <select id="department" class="form-control">
                        <option selected>Open this select menu</option>
                        ${departmentOptions}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" onclick="create()">Save</button>
                           <button type="submit" class="btn btn-primary" ><a style="color: black" href="home.html">Back to list</a></button>
            </form>
        `;
    }

    async function fetchDepartmentData() {
        try {
            const response = await axios.get('http://localhost:8080/api/departments');
            return response.data;
        } catch (error) {
            console.error('Error fetching department data:', error);
            return [];
        }
    }
}


function create() {
    let employeeId = document.getElementById("employeeId").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let department = document.getElementById('department').value;
    let employee = {
        employeeId: employeeId,
        name: name,
        age: age,
        salary:salary,
        departments: {
            id: department
        }
    }
    axios.post('http://localhost:8080/api/employees', employee).then((response) => {
        alert("Đã thêm thành công")
    })
}

