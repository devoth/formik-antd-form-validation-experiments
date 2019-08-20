import React from 'react'
import ReactDOM from 'react-dom'
import AntdForm from './AntdForm'
import FormikForm from './FormikForm'

import './styles.css'
import FormikYupForm from './FormikYupForm'
import FormikFieldYupForm from './FormikFieldYupForm'
import FormikAntdYupForm from './FormikAntdYupForm'
import FormikFieldAntdYupForm from './FormikFieldAntdYupForm'
import FormikFieldAntdYupFormDry from './FormikFieldAntdYupFormDry'

function App() {
  return (
    <div className="App">
      <AntdForm />
      <FormikForm />
      <FormikYupForm />
      <FormikFieldYupForm />
      <FormikAntdYupForm />
      <FormikFieldAntdYupForm />
      <FormikFieldAntdYupFormDry />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
