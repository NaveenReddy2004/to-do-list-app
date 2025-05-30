function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;
  const li = document.createElement("li");
  li.innerHTML = `<span>${task}</span><button onclick="removeTask(this)">❌</button>`;
  li.onclick = () => li.classList.toggle("done");
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
function removeTask(btn) {
  btn.parentElement.remove();
}
