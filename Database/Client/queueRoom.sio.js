const socket = io();

const getLength = (inputQueue, length) => {
  if (inputQueue !== null) {
    length.number++;
    getLength(inputQueue.next, length);
  }
  return length;
};

const refreshTable = (dataPatients) => {
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

    Row.appendChild(Number);
    Row.appendChild(Name);
    Row.appendChild(Age);
    Row.appendChild(Gender);
    Row.appendChild(Date);
    Row.appendChild(Disease);
    Row.appendChild(Message);
    table.appendChild(Row);
  });
};

const refreshCards = (dataDoctors) => {
  const cards = document.getElementsByClassName("progress-bar");
  const Number = document.getElementsByClassName("h5 mb-0 mr-3 font-weight-bold text-gray-800");
  for (let i = 0; i < cards.length; i++) {
    var length = { number: 0};
    length = getLength(dataDoctors[i].treatPatients.queue, length).number;
    let percent = Math.floor((length / dataDoctors[i].Doctor.slot) * 100) + "%";
    let slot_empty = length + '/' + dataDoctors[i].Doctor.slot;
    cards.item(i).style.width = percent;
    Number.item(i).innerHTML = slot_empty;
  }
};

socket.on("syncQueueRoom", (dataPatients, dataDoctors) => {
  refreshTable(dataPatients);
  refreshCards(dataDoctors);
});
