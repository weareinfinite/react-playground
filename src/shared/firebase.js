import firebase from 'firebase';
import config from './config';

const firebaseApp = firebase.initializeApp(config);


export const database = firebaseApp.database()
export const storage = firebaseApp.storage();