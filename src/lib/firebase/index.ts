// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './settings';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a new document in collection "cities"
export const testSetDoc = await setDoc(doc(db, 'branches', 'banjar'), {
  assignment: [
    {
      pekerjaan: 'sample pekerjaan',
      spk: 'sample spk',
      status: 'finish'
    }
  ]
});

export const getBranches = async () => {
  const docs = await getDocs(collection(db, 'branches'));
  const data: string[] = [];

  // todo: if you want to get the data then use doc.data()
  docs.forEach((doc) => data.push(doc.id));

  return data;
};

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
