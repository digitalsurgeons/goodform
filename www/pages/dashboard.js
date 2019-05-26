import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../layouts'

export default () => {
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
  }

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      Router.push('/')
    }
  })
  return (
    <Layout>
      <h1>Dashboard</h1>
      <Link href="/create">
        <a>Create Form</a>
      </Link>
    </Layout>
  )
}
