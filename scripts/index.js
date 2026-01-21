const singIn = "../pages/signin.html";
const sairBtn = document.querySelector(".clique_sair");
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

if (!localStorage.getItem("token")) {
  window.location.href = singIn;
}

if (sairBtn) {
  sairBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = singIn;
  });
}

const logado = document.querySelector("#logado");
if (logado) {
  logado.innerHTML = `Olá, ${userLogado?.nome || "usuário"}!`;
}

// ===== Funcionários =====
const employeeStorageKey = "employees";

function getEmployees() {
  return JSON.parse(localStorage.getItem(employeeStorageKey)) || [];
}

function setEmployees(list) {
  localStorage.setItem(employeeStorageKey, JSON.stringify(list));
}

function createEmployeeId() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}

const form = document.querySelector("form.formulario");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#Nome");
    const cpfInput = document.querySelector("#cpf");
    const emailInput = document.querySelector("#email");
    const roleInput = document.querySelector("#funcao");

    const salaryInputs = document.querySelectorAll('input[name="salario"]');
    const netSalaryInput = salaryInputs[0];
    const grossSalaryInput = salaryInputs[1];

    const employee = {
      id: createEmployeeId(),
      name: nameInput ? nameInput.value.trim() : "",
      cpf: cpfInput ? cpfInput.value.trim() : "",
      email: emailInput ? emailInput.value.trim() : "",
      role: roleInput ? roleInput.value.trim() : "",
      netSalary: netSalaryInput ? netSalaryInput.value.trim() : "",
      grossSalary: grossSalaryInput ? grossSalaryInput.value.trim() : "",
      createdAt: new Date().toISOString(),
    };

    if (!employee.name || !employee.cpf || !employee.email || !employee.role) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const employees = getEmployees();
    employees.push(employee);
    setEmployees(employees);

    form.reset();

    alert("Funcionário cadastrado com sucesso!");

  });
}

function goToList() {
  window.location.href = "../pages/list.html";
}