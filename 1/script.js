var money = prompt('Ваш бюджет на месяц?', 10000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2012-05-05'); 



var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var q1 = prompt("Введите обязательную статью расходов в этом месяце", 'Пример: покупка телефона'),
    q2 = prompt("Во сколько обойдется?", '15000'),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", 'Пример: покупка телефона'),
    q4 = prompt("Во сколько обойдется?", '15000');

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;
    
alert(appData.budget / 30);