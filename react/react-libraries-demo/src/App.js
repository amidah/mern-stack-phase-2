import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function App(){
  const handleSubmit = (values, {setSubmitting}) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', values)
    .then(response => {
      console.log(response);
      setSubmitting(false);
    })
    .catch(error => {
      console.log(error);
      setSubmitting(false);
    })
  };

  return (
    <div>
      <h1>React Libraries Demo</h1>
      <Formik initialValues={{ title: '', body: '' }}
      validate={values => {
        const errors = {};
        if(!values.title){
          errors.title = 'Title is required';
        }
        if(!values.body){
          errors.body = 'Body is required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor='title'>Title</label>&nbsp;&nbsp;
            <Field type="text" name="title"/>
            <ErrorMessage name='title' component="div"/>
            <br/>
            <br/>
            <label htmlFor='body'>Body</label>&nbsp;&nbsp;
            <Field as="textarea" name="body"/>
            <ErrorMessage name='body' component="div"/>
            <br/>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default App;