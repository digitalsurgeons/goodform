import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import Layout from '../layouts'

export default () => {
  const [formName, setFormname] = useState('')
  const [emailList, setEmailList] = useState('')

  function submit(e) {
    e.preventDefault()

    console.log(formName, emailList)
  }

  return (
    <Layout>
      <Container>
        <form onSubmit={submit}>
          <p>Form Name</p>
          <input
            type="text"
            onKeyUp={e => setFormname(e.currentTarget.value)}
          />
          <p>Send emails to</p>
          <input
            type="text"
            onKeyUp={e => setEmailList(e.currentTarget.value)}
          />
          <input type="submit" value="Create Form" />
        </form>
      </Container>
    </Layout>
  )
}
