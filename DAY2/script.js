document.getElementById('customerForm').addEventListener('submit', addCustomer);

function addCustomer(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const customer = {
        name,
        email,
        phone
    };

    addCustomerToList(customer);
    clearForm();
}

function addCustomerToList(customer) {
    const customerList = document.getElementById('customerList');
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');
    customerDiv.innerHTML = `
        <p><strong>Name:</strong> ${customer.name}</p>
        <p><strong>Email:</strong> ${customer.email}</p>
        <p><strong>Phone:</strong> ${customer.phone}</p>
        <button onclick="deleteCustomer(this)">Delete</button>
    `;
    customerList.appendChild(customerDiv);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function deleteCustomer(btn) {
    btn.parentElement.remove();
}