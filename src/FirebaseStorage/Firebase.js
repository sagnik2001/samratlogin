import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAQXPml0R8SvW-ipqGIbWQcR2TaVZflyx4",
  authDomain: "newchatapp-ac951.firebaseapp.com",
  projectId: "newchatapp-ac951",
  storageBucket: "newchatapp-ac951.appspot.com",
  messagingSenderId: "1071653867948",
  appId: "1:1071653867948:web:2992ab1352ef8c3b072a09"
};
const fire=firebase.initializeApp(firebaseConfig)
export default fire
