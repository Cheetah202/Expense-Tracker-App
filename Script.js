let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
    const selectedCategory = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (selectedCategory === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('Please select a date');
        return;
    }

    const currentExpense = { category: selectedCategory, amount, date };
    expenses.push(currentExpense);

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Render the new expense
    renderExpense(currentExpense);
});

// Function to render a single expense
function renderExpense(expense) {
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        deleteExpense(expense, newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}

// Function to delete an expense
function deleteExpense(expense, row) {
    const index = expenses.findIndex(exp => exp === expense);

    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    expenses.splice(index, 1);
    expensesTableBody.removeChild(row);
}

// Function to render existing expenses
function renderExpenses() {
    for (const expense of expenses) {
        renderExpense(expense);
    }
}

// Call the renderExpenses function after adding expenses
renderExpenses();

// Function for displaying alerts
function showAlert(message) {
    alert(message);
}

// Function to clear input fields
function clearInputFields() {
    categorySelect.value = '';
    amountInput.value = '';
    dateInput.value = '';
}

// Function to handle adding an expense
function addExpense() {
    const selectedCategory = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (selectedCategory === '') {
        showAlert('Please select a category');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        showAlert('Please enter a valid amount');
        return;
    }

    if (date === '') {
        showAlert('Please select a date');
        return;
    }

    const currentExpense = { category: selectedCategory, amount, date };
    expenses.push(currentExpense);

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Render the new expense
    renderExpense(currentExpense);

    // Clear input fields after successful addition
    clearInputFields();
}

// Event listener for Add button
addBtn.addEventListener('click', addExpense);

// Function to render existing expenses
function renderExpenses() {
    for (const expense of expenses) {
        renderExpense(expense);
    }
}

// Call the renderExpenses function after adding expenses
renderExpenses();
