
const addBtn = document.querySelector('.add');
const container = document.querySelector('.container');

let arr = [];

if(localStorage.length > 0){
  arr = JSON.parse(localStorage.getItem('tasks'));
}

let editInc = 0;

addBtn.addEventListener('click', createTask);
document.addEventListener('DOMContentLoaded', loadTasksFromLS);

function createTask() {
  const task = document.createElement('div');
  const tools = document.createElement('div');
  const editBtn = document.createElement('button');
  const postBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  
  const textArea = document.createElement('textarea');
  const textDiv = document.createElement('div');

  task.className = 'task';
  tools.className = 'tools';
  editBtn.className = 'edit';
  postBtn.className = 'post';
  deleteBtn.className = 'delete';
  
  textArea.className = 'text-area';
  textDiv.className = 'text-div';

  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  postBtn.innerHTML = `<i class="fa-regular fa-hand-pointer"></i>`;
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  
  tools.appendChild(editBtn);
  tools.appendChild(postBtn);
  tools.appendChild(deleteBtn);
  
  task.appendChild(tools);
  task.appendChild(textArea);
  task.appendChild(textDiv);

  container.appendChild(task);

  textDiv.style.display = 'none';

  editBtn.addEventListener('click', () => { 
    postBtn.disabled = false;
    textArea.style.display = 'block';
    textDiv.style.display = 'none'; 
    editInc++;
 })
  
  postBtn.addEventListener('click', () => {
  
   postBtn.disabled = true;  
   textDiv.innerText = textArea.value;
   
   textArea.style.display = 'none';
   textDiv.style.display = 'block';

   arr.push(textDiv.innerText);
   
   localStorage.setItem('tasks',JSON.stringify(arr))

   if(editInc > 0){
     let tasks = document.querySelectorAll('.task');
     arr.splice(0,arr.length);

     tasks.forEach((task) => {
      let text = task.children[2].textContent;

      arr.push(text)
     })

     localStorage.setItem('tasks',JSON.stringify(arr))
   }
 })

 deleteBtn.addEventListener('click', (e) => {
  if(e.target.parentElement.classList.contains('delete')) {
    e.target.parentElement.parentElement.parentElement.remove();

    let tasks = document.querySelectorAll('.tasks');
     arr.splice(0,arr.length);

     tasks.forEach((task) => {
      let text = task.children[2].textContent;

      arr.push(text)
     })

     localStorage.setItem('notes',JSON.stringify(arr))
  }
})

}

function loadTasksFromLS(){
  arr.forEach((item) => {
  const task = document.createElement('div');
  const tools = document.createElement('div');
  const editBtn = document.createElement('button');
  const postBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  
  let textArea = document.createElement('textarea');
  let textDiv = document.createElement('div');

  task.className = 'task';
  tools.className = 'tools';
  editBtn.className = 'edit';
  postBtn.className = 'post';
  deleteBtn.className = 'delete';
  
  textArea.className = 'text-area';
  textDiv.className = 'text-div';

  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  postBtn.innerHTML = `<i class="fa-regular fa-hand-pointer"></i>`;
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  
  tools.appendChild(editBtn);
  tools.appendChild(postBtn);
  tools.appendChild(deleteBtn);
  
  task.appendChild(tools);
  task.appendChild(textArea);
  task.appendChild(textDiv);

  textDiv.appendChild(document.createTextNode(item));

  container.appendChild(task);

  textArea.style.display = 'none';
  postBtn.disabled = true;

  editBtn.addEventListener('click', () => {
    postBtn.disabled = false;
    textArea.style.display = 'block';
    textDiv.style.display = 'none'; 
    editInc++;
    textArea.innerText = textDiv.innerText;
 })
  
  postBtn.addEventListener('click', () => {
    postBtn.disabled = true;
    textDiv.innerText = textArea.value;
   
    textArea.style.display = 'none';
    textDiv.style.display = 'block';

   arr.push(textDiv.innerText);
   
   localStorage.setItem('tasks',JSON.stringify(arr))

   if(editInc > 0){
     let tasks = document.querySelectorAll('.task');
     arr.splice(0,arr.length);

     tasks.forEach((task) => {
      let text = task.children[2].innerText;

      arr.push(text)
     })

     localStorage.setItem('tasks',JSON.stringify(arr))
   }
 })

 deleteBtn.addEventListener('click', (e) => {
  if(e.target.parentElement.classList.contains('delete')) {
    e.target.parentElement.parentElement.parentElement.remove();

    let tasks = document.querySelectorAll('.task');
     arr.splice(0,arr.length);

     tasks.forEach((task) => {
      let text = task.children[2].innerText;

      arr.push(text)
     })

     localStorage.setItem('tasks',JSON.stringify(arr))
  }
})
  })
}

//localStorage.clear();

