import React from 'react';
import { reduxForm, Field } from 'redux-form';

function showResults(values) {
    //await sleep(500);
    window.alert(`Vložil jsi: \n\n ${JSON.stringify(values)}`);    
}

const validate = values => {
    const errors = {};
    if(!values.firstName){
        
    }
    return errors
}

const DemoForm = ({ handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit(showResults)}>
            <h1>DemoForm</h1>
            <div>
                <label>Jméno</label>
                <Field name="firstName" component="input" />
            </div>
            <div>
                <label>Příjmení</label>
                <Field name="lastName" component="input" />
            </div>
            <div>
                <label>Email</label>
                <Field name="email" component="input" />
            </div>
            <button type="submit" disabled={submitting}>Odeslat</button>
        </form>
    );
};


export default reduxForm({ 
    form:'demo', //a unique identificator for this form
    validate
})(DemoForm);