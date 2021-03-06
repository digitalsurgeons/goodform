import Router from 'next/router'
import Layout from '../layouts'
import firebase from 'firebase/app'
import 'firebase/auth'

function Index() {
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
    if (user) {
      Router.push('/dashboard')
    }
  })

  return <Layout />
}

export default Index
