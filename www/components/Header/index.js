import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { Container, AuthButton } from './styles'

function Header() {
  const [user, setUser] = useState({})
  const provider = new firebase.auth.GithubAuthProvider()
  provider.addScope('repo')

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
        alert('logged in!')
      }
    })
  }
  function signIn() {
    if (!user.email) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          setUser(result.user)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      alert('logged in!')
    }
  }

  const login = user.email ? (
    <span>Signed in</span>
  ) : (
    <span>Login with GitHub</span>
  )

  return (
    <Container>
      <a href="/">
        <img src="/static/logo.png" />
      </a>
      <AuthButton onClick={signIn} href="#">
        {login}
      </AuthButton>
    </Container>
  )
}

export default Header
