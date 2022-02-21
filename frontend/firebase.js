// // Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
// import { initializeApp } from 'firebase/app';
// import { getAuth, getDatabase, getFirestore, collection, getDocs } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DATABASE_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,
// measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// if (!firebaseConfig.getApps.length) {
//   firebaseConfig.initializeApp(firebaseConfig);
// }

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseDB = getDatabase(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
// const auth = getAuth(firebaseApp);

// // export { auth, database };
// Get a list of cities from your database
// async function getCities(database) {
//   const citiesCol = collection(database, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://racism-firebase-default-rtdb.firebaseio.com',
  projectId: 'racism-firebase',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFirebase();

export { firebase };
