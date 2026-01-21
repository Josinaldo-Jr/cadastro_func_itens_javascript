const signIn = "../pages/signin.html";

if (!localStorage.getItem("token")) {
  window.location.href = signIn;
}

function getEmployees() {
  return JSON.parse(localStorage.getItem("employees")) || [];
}

function renderTable() {
  const tbody = document.querySelector("#employeesTbody") || document.querySelector("tbody");
  const employees = getEmployees();

  tbody.innerHTML = "";

  employees.forEach((emp) => {
    const tr = document.createElement("tr");

    const salaryText =
      emp.grossSalary && emp.grossSalary !== ""
        ? `Líquido: ${emp.netSalary} | Bruto: ${emp.grossSalary}`
        : `${emp.netSalary || ""}`;

    tr.innerHTML = `
      <td>${emp.name ?? ""}</td>
      <td>${emp.cpf ?? ""}</td>
      <td>${emp.email ?? ""}</td>
      <td>${emp.role ?? ""}</td>
      <td>${salaryText}</td>
      <td class="acao">—</td>
      <td class="acao">—</td>
    `;

    tbody.appendChild(tr);
  });
}

function goToRegister() {
  window.location.href = "../pages/index.html";
}

window.goToRegister = goToRegister;

renderTable();