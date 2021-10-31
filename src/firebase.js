import * as firebase from 'firebase';
const firebaseConfig = {
   apiKey: "AIzaSyAjE82C-glmDLf9wXtGiexqsW6_dLdOQXs",
  authDomain: "netflix-clone-4c7dc.firebaseapp.com",
  projectId: "netflix-clone-4c7dc",
  storageBucket: "netflix-clone-4c7dc.appspot.com",
  messagingSenderId: "301967042550",
  appId: "1:301967042550:web:fe80985ea96f2e2898c9d7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth }