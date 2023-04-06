// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvkyjnonnyQwYMupjBha7eRUrq3uMETRE',
  authDomain: 'flow-state-swim.firebaseapp.com',
  projectId: 'flow-state-swim',
  storageBucket: 'flow-state-swim.appspot.com',
  messagingSenderId: '364467223045',
  appId: '1:364467223045:web:2b389ceaea77bbf2e57a6c',
  measurementId: 'G-JPQNZVK6GE'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
