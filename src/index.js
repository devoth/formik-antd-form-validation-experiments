import React from 'react'
import ReactDOM from 'react-dom'
import AntdForm from './AntdForm'
import FormikForm from './FormikForm'

import './styles.css'
import FormikYupForm from './FormikYupForm'
import FormikFieldYupForm from './FormikFieldYupForm'
import FormikAntdYupForm from './FormikAntdYupForm'
import FormikFieldAntdYupForm from './FormikFieldAntdYupForm'

function App() {
  return (
    <div className="App">
      <AntdForm />
      <FormikForm />
      <FormikYupForm />
      <FormikFieldYupForm />
      <FormikAntdYupForm />
      <FormikFieldAntdYupForm />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
