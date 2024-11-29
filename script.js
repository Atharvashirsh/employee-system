let empCount = 0;
const employees = [];

const updateEmpCount = () => {
  const counter = document.getElementById("emp-count");
  // console.log(counter);
  counter.innerText = empCount;
};

const validateNewEmployee = (newEmployee) => {
  for (const emp of employees) {
    if (emp.id === newEmployee.id) {
      return false;
    }
  }
  return true;
};

const addEmployee = () => {
  const id = document.getElementById("empid");
  const name = document.getElementById("empname");
  const city = document.getElementById("empcity");

  //   console.log(typeof id.value, typeof name.value, typeof city.value);

  const newEmployee = {
    id: parseInt(id.value),
    name: name.value,
    city: city.value,
  };

  const isValid = validateNewEmployee(newEmployee);
  // console.log(newEmployee, isValid);

  if (!isValid) {
    console.error("invalid emp data: id already exists");
    return;
  }

  employees.push(newEmployee);
  empCount++;
  updateEmpCount();
  alert("Employee added successfully");
  document.getElementById("emp-form").reset();
};

const displayEmployee = () => {
  const showtable = document.getElementById("show-emp");
  if (showtable.classList.contains("invisible") && empCount != 0) {
    showtable.classList.remove("invisible");
  }

  const table = document.getElementById("emp-table-body");
  table.innerHTML = "";

  employees.forEach((emp) => {
    const tr = document.createElement("tr");

    const td_id = document.createElement("td");
    const td_name = document.createElement("td");
    const td_city = document.createElement("td");

    const p_id = document.createElement("p");
    p_id.innerText = emp.id;
    td_id.append(p_id);
    tr.append(td_id);

    const p_name = document.createElement("p");
    p_name.innerText = emp.name;
    td_name.append(p_name);
    tr.append(td_name);

    const p_city = document.createElement("p");
    p_city.innerText = emp.city;
    td_city.append(p_city);
    tr.append(td_city);

    tr.classList.add("table-row");

    table.append(tr);
  });
};

updateEmpCount();

// document.getElementById("emp-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   addEmployee();
// });
