import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import styles from './FormStyles.module.scss'
import { InputNumber, Input } from 'antd'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please input your username!'),
  age: Yup.number()
    .typeError('Please input your age as a number!')
    .min(18, 'Government says you need to be older…')
    .required('Please input your age!'),
})

const AntdInput = ({ field, form: { touched, errors }, ...props }) => (
  <>
    <Input {...field} {...props} />
    {errors[field.name] && <div>{errors[field.name]}</div>}
  </>
)

const AntdInputNumber = ({
  field,
  form: { setFieldValue, touched, errors },
  ...props
}) => (
  <>
    <InputNumber
      {...field}
      {...props}
      onChange={v => setFieldValue('age', v)}
    />
    {errors[field.name] && <div>{errors[field.name]}</div>}
  </>
)

const FormikFieldAntdYupForm = () => (
  <Formik
    initialValues={{ username: '', age: '' }}
    onSubmit={(values, actions) => console.log('submit!', values, actions)}
    validationSchema={validationSchema}
  >
    {({ handleSubmit, handleChange, isValid, setFieldValue, errors }) => {
      return (
        <form onSubmit={handleSubmit}>
          <h2>FormikFieldAntdYupForm</h2>
          <ol className={styles.formList}>
            <li className={styles.formLine}>
              <label htmlFor="ffayf_username">User Name:</label>
              <div>
                <Field
                  component={AntdInput}
                  id="ffayf_username"
                  name="username"
                  placeholder="Say my name"
                />
              </div>
            </li>
            <li className={styles.formLine}>
              <label htmlFor="ffayf_age">Age:</label>
              <div>
                <Field
                  component={AntdInputNumber}
                  id="ffayf_age"
                  name="age"
                  placeholder="type your age"
                />
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

export default FormikFieldAntdYupForm
