import { useState } from 'react'
import Link from 'next/link'
import firebase from 'firebase/app'
import Container from '@material-ui/core/Container'
import { Head, AuthButton, Avatar } from './styles'
import 'firebase/auth'
import 'firebase/firestore'
import '@fortawesome/fontawesome-free/js/all'

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
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user)
    }
  })

  function auth() {
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
      window.location = '/logout'
    }
  }

  const authBtn = user.email ? (
    <span>Logout</span>
  ) : (
    <div>
      <i className="fab fa-github fa-lg" style={{ marginRight: 15 }} />
      <span>Login with GitHub</span>
    </div>
  )

  let profileImage = ''
  if (user.photoURL) {
    profileImage = <Avatar src={user.photoURL} />
  }

  return (
    <Container>
      <Head>
        <Link href="/">
          <a>
            <img src="/static/logo.png" />
          </a>
        </Link>
        {profileImage}
        <AuthButton onClick={auth} href="#">
          {authBtn}
        </AuthButton>
      </Head>
    </Container>
  )
}

export default Header
