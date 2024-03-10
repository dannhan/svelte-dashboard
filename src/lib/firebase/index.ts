// todo
import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  connectFirestoreEmulator,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  getFirestore,
  Firestore
} from 'firebase/firestore';
import { firebaseConfig } from './settings';

let app: FirebaseApp | undefined = undefined;
let db: Firestore;

if (!app) {
  app = initializeApp(firebaseConfig);

  if (firebaseConfig.useEmulator) {
    db = getFirestore(app);
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
  } else {
    db = getFirestore(app);
  }
}

export const createProject = async (name: string) => {
  await setDoc(doc(db, 'projects', name), {});
};

export const getProjects = async () => {
  const docs = await getDocs(collection(db, 'projects'));
  const data: string[] = [];

  // todo: if you want to get the data then use doc.data()
  docs.forEach((doc) => {
    data.push(doc.id);
    // console.log(doc.data());
  });
  console.log('FETCHING PROJECTS...', data);

  return data;
};

export const deleteProject = async (project: string) => {
  await deleteDoc(doc(db, 'projects', project));
};
