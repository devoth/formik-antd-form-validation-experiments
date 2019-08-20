import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './FormStyles.module.scss'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  age: Yup.number()
    .min(18, 'Government says you need to be older…')
    .required('Please input your age!'),
})

const FormikYupForm = () => (
  <Formik
    initialValues={{ username: '', age: '' }}
    onSubmit={(values, actions) => console.log('submit!', values, actions)}
    validationSchema={validationSchema}
  >
    {({ handleBlur, handleSubmit, handleChange, isValid, values, errors }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h2>FormikYupForm</h2>
          <ol className={styles.formList}>
            <li className={styles.formLine}>
              <label htmlFor="fyf_username">User Name:</label>
              <div>
                <input
                  name="username"
                  id="fyf_username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Say my name"
                />
                {errors.username && <div>{errors.username}</div>}
              </div>
            </li>
            <li className={styles.formLine}>
              <label htmlFor="fyf_age">Age:</label>
              <div>
                <input
                  name="age"
                  id="fyf_age"
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
              <button
                type="submit"
                style={{ color: isValid ? 'inherit' : '#aaa' }}
                disabled={!isValid}
              >
                Submit
              </button>
            </li>
          </ol>
        </form>
      )
    }}
  </Formik>
)

export default FormikYupForm
