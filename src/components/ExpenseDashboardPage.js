import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFiletrs from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFiletrs />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;