import React from 'react';

const AddExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the expense with id of {props.match.params.id}
        </div>
    )
};

export default AddExpensePage;