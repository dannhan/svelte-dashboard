import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBN3ItcUbNwvwNTUrhDNyVfdOnwbu1hU9o",
  authDomain: '"ria-busana.firebaseapp.com",',
  projectId: "ria-busana",
  storageBucket: "ria-busana.appspot.com",
  messagingSenderId: "1053993262752",
  appId: "1:1053993262752:web:e0f64d268e25eff00133c5",
  useEmulator: true
};
let app = void 0;
let db;
if (!app) {
  app = initializeApp(firebaseConfig);
  if (firebaseConfig.useEmulator) {
    db = getFirestore(app);
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
  } else {
    db = getFirestore(app);
  }
}
const createProject = async (name) => {
  await setDoc(doc(db, "projects", name), {});
};
const getProjects = async () => {
  const docs = await getDocs(collection(db, "projects"));
  const data = [];
  docs.forEach((doc2) => {
    data.push(doc2.id);
  });
  console.log("FETCHING PROJECTS...", data);
  return data;
};
const deleteProject = async (project) => {
  await deleteDoc(doc(db, "projects", project));
};
export {
  createProject as c,
  deleteProject as d,
  getProjects as g
};
