import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './FormStyles.module.scss'
import { Input, InputNumber } from 'antd'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  age: Yup.number()
    .typeError('Please input your age as a number!')
    .min(18, 'Government says you need to be older…')
    .required('Please input your age!'),
})

const FormikAntdYupForm = () => (
  <Formik
    initialValues={{ username: '', age: null }}
    onSubmit={(values, actions) => console.log('submit!', values, actions)}
    validationSchema={validationSchema}
  >
    {({
      handleBlur,
      handleSubmit,
      handleChange,
      isValid,
      setFieldValue,
      values,
      errors,
    }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h2>FormikAntdYupForm</h2>
          <ol className={styles.formList}>
            <li className={styles.formLine}>
              <label htmlFor="fayf_username">User Name:</label>
              <div>
                <Input
                  name="username"
                  id="fayf_username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Say my name"
                />
                {errors.username && <div>{errors.username}</div>}
              </div>
            </li>
            <li className={styles.formLine}>
              <label htmlFor="fayf_age">Age:</label>
              <div>
                <InputNumber
                  name="age"
                  id="fayf_age"
                  onChange={v => {
                    if (v === null) {
                      setFieldValue('age', '')
                    } else {
                      setFieldValue('age', v)
                    }
                  }}
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

export default FormikAntdYupForm
