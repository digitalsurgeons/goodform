import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import Layout from '../layouts'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import nanoid from 'nanoid'

export default () => {
  const [user, setUser] = useState({})
  const [formName, setFormname] = useState('')
  const [domain, setDomain] = useState('')
  const [emailList, setEmailList] = useState('')

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwFqYtlB34EoaRXHcmAR_U90ChT0vRxUs',
      authDomain: 'goodform-d0096.firebaseapp.com',
      databaseURL: 'https://goodform-d0096.firebaseio.com',
      projectId: 'goodform-d0096',
      storageBucket: 'goodform-d0096.appspot.com',
      messagingSenderId: '1090475289248',
      appId: '1:1090475289248:web:9464f7c31608f743'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        window.location = '/'
      }
    })

    const database = firebase.database()
  }

  function submit(e) {
    e.preventDefault()

    const id = nanoid()
    const formData = {
      name: formName,
      emailList: emailList,
      userId: user.uid,
      domain: domain,
      dateCreated: Date.now(),
      enabled: true
    }

    firebase
      .database()
      .ref('forms/' + id)
      .set(formData)
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
          <p>Domain</p>
          <input type="text" onKeyUp={e => setDomain(e.currentTarget.value)} />
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
