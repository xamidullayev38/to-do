const addBtn = document.getElementById('addList');
const item = document.querySelectorAll('.item');
const modalBtn = document.getElementById('modal-btn');
let currentEditItem = null;
const modal = document.querySelector('.popUp');
const modalTitle = document.querySelector('.title');
addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';


   
})
modalBtn.addEventListener('click', () => {
    const newTitle = modalTitle.value.trim();
    if (!newTitle) {
        return;
    }
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <p class="item__title">${newTitle}</p>
                    <div class="box">    
                        <button id="item__edit">Edit</button>    
                        <button id="item__delete">Delete</button>
                        <p class="item__date">12.12.2022</p>
                    </div>
    `;
    document.querySelector('.list__content').appendChild(newItem);  
    modal.style.display = 'none';
    modalTitle.value = '';

    const editBtn = newItem.querySelector('.item__edit');
    const deleteBtn = newItem.querySelector('.item__delete');

    editBtn.addEventListener('click', () => {
        currentEditItem = newItem; // Track the item being edited
        modal.style.display = 'flex';
        modalTitle.value = newItem.querySelector('.item__title').textContent;
    });

    deleteBtn.addEventListener('click', () => {
        newItem.remove();
    });
})

