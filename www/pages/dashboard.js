import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../layouts'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardGrid from '../components/CardGrid'

const Dashboard = ({ user }) => {
  const [forms, setForms] = useState({})

  useEffect(() => {
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
      } else {
        firebase
          .database()
          .ref('forms')
          .orderByChild('userId')
          .equalTo(user.uid)
          .on('value', function(snapshot) {
            setForms(snapshot.val())
            console.log('forms', forms)
          })
      }
    })
  }, [])

  return (
    <Layout>
      <Container maxWidth="md">
        <h1>Dashboard</h1>
        <Link href="/create">
          <a>Create Form</a>
        </Link>
        <CardGrid />
      </Container>
    </Layout>
  )
}

export default Dashboard
