document.getElementById('calculate-btn').addEventListener('click', function () {
  //income Total 
  const income = getInputValue('income-input');
  // expense total
  const food = getInputValue('food-input');
  const rent = getInputValue('rent-input');
  const clothes = getInputValue('clothes-input');

  if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
    alert('Enter A Positive Number...');
    return;
  }

  if (isNaN(income && food && rent && clothes)) {
    alert('Enter A number');
    return;
  }

  const expenseTotal = food + rent + clothes;

  if (income < expenseTotal) {
    alert("Can't Expense More than income..");
    return;
  }

  setElementTextValue('total-expenses', expenseTotal);

  // balance 
  const balance = income - expenseTotal;
  setElementTextValue('balance', balance);
})



document.getElementById('save-btn').addEventListener('click', function () {
  const income = getInputValue('income-input');
  //save=ing
  const saving = getInputValue('save-input');
  if (saving < 0) {
    alert('Enter A Positive Number...');
    return;
  }

  if (isNaN(saving)) {
    alert('Enter A number');
    return;
  }

  const balance = getElementValue('balance');

  const savingAmount = (saving / 100) * income;
  if (balance < savingAmount) {
    alert(" Can't Save more than Balance..");
    return;
  }

  // saving Total 
  setElementTextValue('saving-amount', savingAmount);


  // remainning Balance 
  const remain = getElementValue('remaining-balance');
  const remainingBalance = balance - savingAmount;
  setElementTextValue('remaining-balance', remainingBalance);

})