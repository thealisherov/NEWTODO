const progressSection = document.getElementById("progressSection");
const doneSection = document.getElementById("doneTasks");
const iconDone = document.getElementsByClassName("iconDone");
const TaskActions = document.getElementsByClassName("TaskActions");
const newTask = document.getElementById("InputTask");
const addTask = document.getElementById("add");
const todoSection = document.getElementById("todoSection");
const iconDelete = document.getElementsByClassName("iconDelete");
const iconProgress = document.getElementsByClassName("iconProgress");
const iconEdit = document.getElementsByClassName("iconEdit");

addTask.addEventListener("click", () => {
  if (!newTask.value.trim()) return;

  const newTodo = document.createElement("div");
  newTodo.innerHTML = `
    <div class="TASK w-full items-center bg-white rounded-xl shadow p-3 mb-2 flex flex-row justify-between gap-3">
      <div class="flex items-center justify-between gap-3 w-full">
        <input type="checkbox" class="iconDone w-5 h-5 accent-blue-500" />
        <h1 class="text-lg font-semibold text-gray-800 break-words">${newTask.value}</h1>
    


        <div class=" bg-white shadow rounded-lg p-2 flex flex-row gap-2 z-10">
          <img class="iconProgress w-6 h-6 cursor-pointer" src="../assets/loading.png" alt="Progress">
          <img class="iconDelete w-6 h-6 cursor-pointer" src="../assets/delete.png" alt="Delete">
          <img class="iconEdit w-6 h-6 cursor-pointer" src="../assets/pen.png" alt="Edit">
        </div>
        
        </div>
    
        
      </div>
    </div>
  `;
  todoSection.appendChild(newTodo);
  newTask.value = "";
});

todoSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("iconDelete")) {
    const DeletedTask = e.target.closest(".TASK");
    if (DeletedTask) DeletedTask.remove();
  }
});

todoSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("iconProgress")) {
    const ProgressTask = e.target.closest(".TASK");
    const taskTitle = ProgressTask.querySelector("h1").textContent;
    const newTaskProgress = document.createElement("div");
    newTaskProgress.innerHTML = `
      <div class="TASK w-full items-center bg-white rounded-xl shadow p-3 mb-2 flex flex-row justify-between gap-3">
        <h1 class="text-lg font-semibold text-gray-800 break-words">${taskTitle}</h1>
           <span
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-sm"
            >
              <svg
                class="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              IN PROGRESS
            </span>
      </div>
    `;
    progressSection.appendChild(newTaskProgress);
    const DeletedTask = e.target.closest(".TASK");
    if (DeletedTask) DeletedTask.remove();
  }
});

todoSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("iconEdit")) {
    const EditedTask = e.target.closest(".TASK");
    const EditedTaskTitle = EditedTask.querySelector("h1").textContent;
    const newValue = prompt("Edit the task", EditedTaskTitle);
    if (newValue !== null && newValue.trim() !== "") {
      EditedTask.querySelector("h1").textContent = newValue;
    }
  }
});



todoSection.addEventListener("click",(e)=>{
 if (e.target.classList.contains("iconDone")) {
    const doneTask = e.target.closest(".TASK");
    if (!doneTask) return;

    const taskTitle = doneTask.querySelector("h1").textContent;

    const newDoneTask = document.createElement("div");
    newDoneTask.innerHTML = `
      <div class="TASK w-full items-center bg-white rounded-xl shadow p-3 mb-2 flex flex-row justify-between gap-3">
        <h1 class="text-lg  font-semibold text-gray-800 line-through">${taskTitle}</h1>
      </div>
    `;

    doneSection.appendChild(newDoneTask);
    doneTask.remove();
  }


})