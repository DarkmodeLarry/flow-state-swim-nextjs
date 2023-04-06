import { initializeApp, getApp, FirebaseOptions } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, collection, where, getDocs, query, limit } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

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
  appId: '1:364467223045:web:4491db62bd5097f3e57a6c'
}

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp()
  } catch {
    return initializeApp(config)
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig)

// Auth exports
export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()

// Firestore exports
export const firestore = getFirestore(firebaseApp)

// Storage exports
export const storage = getStorage(firebaseApp)
export const STATE_CHANGED = 'state_changed'
