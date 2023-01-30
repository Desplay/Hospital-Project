const socket = io();
const IDDoctor = document.getElementById("IDDoctor").textContent;

const refresh = (dataPatients) => {
  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  if (dataPatients.length === 0) document.getElementById("TablePatients").style.display = "none";
  else document.getElementById("TablePatients").style.display = "block";
  table.innerHTML = "";
  dataPatients.map((element, index) => {
    let Row = document.createElement("tr");

    let Number = document.createElement("td");
    Number.textContent = index + 1;

    let Name = document.createElement("td");
    Name.textContent = element.name;

    let Age = document.createElement("td");
    Age.textContent = element.age;

    let Gender = document.createElement("td");
    Gender.textContent = element.gender.value;

    let Date = document.createElement("td");
    Date.textContent = element.date;

    let Disease = document.createElement("td");
    Disease.textContent = element.disease.name;

    let Message = document.createElement("td");
    Message.textContent = element.message;

    let Treat = document.createElement("td");

    Row.appendChild(Number);
    Row.appendChild(Name);
    Row.appendChild(Age);
    Row.appendChild(Gender);
    Row.appendChild(Date);
    Row.appendChild(Disease);
    Row.appendChild(Message);
    Row.appendChild(Treat)
    table.appendChild(Row);
  });

  let firstRows = table.rows.item(0).getElementsByTagName("td");
  firstRows.item(firstRows.length-1).textContent = "Now treating";
  for(let i = 0; i < firstRows.length; i++) {
    firstRows.item(i).style.fontWeight = "bold";
    firstRows.item(i).style.color = "red";
  }
};

socket.on("syncDoctorRoom", () => {
  socket.emit("requestDoctorData", IDDoctor);
  socket.on("syncData", (dataPatients) => {
    refresh(dataPatients);
  });
});
