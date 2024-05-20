const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    addContact(name, email, phone);
    contactForm.reset();
});

function addContact(name, email, phone) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    contactList.appendChild(tr);

    const editButton = tr.querySelector('.edit');
    const deleteButton = tr.querySelector('.delete');

    editButton.addEventListener('click', () => editContact(tr, name, email, phone));
    deleteButton.addEventListener('click', () => deleteContact(tr));
}

function editContact(tr, oldName, oldEmail, oldPhone) {
    const newName = prompt("Edit Name", oldName);
    const newEmail = prompt("Edit Email", oldEmail);
    const newPhone = prompt("Edit Phone", oldPhone);

    if (newName !== null) tr.children[0].textContent = newName;
    if (newEmail !== null) tr.children[1].textContent = newEmail;
    if (newPhone !== null) tr.children[2].textContent = newPhone;
}

function deleteContact(tr) {
    contactList.removeChild(tr);
}