import firebase from 'firebase';
import config from '../shared/config';

const firebaseApp = firebase.initializeApp(config.firebase);


export const database = firebaseApp.database()