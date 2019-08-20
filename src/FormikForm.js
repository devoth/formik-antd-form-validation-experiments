import React from 'react'
import { Formik } from 'formik'

import styles from './FormStyles.module.scss'

const validate = values => {
  let errors = {}
  if (!values.username) {
    errors.username = 'Please input your username!'
  }
  if (!values.age) {
    errors.age = 'Please input your age!'
  } else if (values.age < 18) {
    errors.age = 'Government says you need to be older…'
  }
  return errors
}

const FormikForm = () => (
  <Formik
    initialValues={{ username: '', age: '' }}
    onSubmit={(values, actions) => console.log('submit!', values, actions)}
    validate={validate}
  >
    {({ handleBlur, handleSubmit, handleChange, values, errors }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h2>FormikForm</h2>
          <ol className={styles.formList}>
            <li className={styles.formLine}>
              <label htmlFor="ff_username">User Name:</label>
              <div>
                <input
                  name="username"
                  id="ff_username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Say my name"
                />
                {errors.username && <div>{errors.username}</div>}
              </div>
            </li>
            <li className={styles.formLine}>
              <label htmlFor="ff_age">Age:</label>
              <div>
                <input
                  name="age"
                  id="ff_age"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="type your age"
                />
                {errors.age && <div>{errors.age}</div>}
              </div>
            </li>
            <li className={styles.buttonsLine}>
              <button type="submit">Submit</button>
            </li>
          </ol>
        </form>
      )
    }}
  </Formik>
)

export default FormikForm
