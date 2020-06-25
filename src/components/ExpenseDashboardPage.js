import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFiletrs from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFiletrs />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;