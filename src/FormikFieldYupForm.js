import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import styles from './FormStyles.module.scss'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  age: Yup.number()
    .min(18, 'Government says you need to be older…')
    .required('Please input your age!'),
})

const FormikFieldYupForm = () => (
  <Formik
    initialValues={{ username: '', age: '' }}
    onSubmit={(values, actions) => console.log('submit!', values, actions)}
    validationSchema={validationSchema}
  >
    {({ handleBlur, handleSubmit, handleChange, isValid, values, errors }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h2>FormikFieldYupForm</h2>
          <ol className={styles.formList}>
            <li className={styles.formLine}>
              <label htmlFor="ffyf_username">User Name:</label>
              <div>
                <Field
                  name="username"
                  id="ffyf_username"
                  placeholder="Say my name"
                />
                {errors.username && <div>{errors.username}</div>}
              </div>
            </li>
            <li className={styles.formLine}>
              <label htmlFor="ffyf_age">Age:</label>
              <div>
                <Field
                  name="age"
                  id="ffyf_age"
                  type="number"
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

export default FormikFieldYupForm
