import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  connectFirestoreEmulator,
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  limit,
  arrayUnion,
  type Firestore,
  updateDoc
} from 'firebase/firestore';
import { firebaseConfig } from './settings';
import type { Project, Assignment } from '$lib/types';

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

export const createProject = async (name: string, type: string) => {
  const projectRef = doc(db, 'projects', name);
  await setDoc(projectRef, { type, team: [] });

  console.log('CREATE PROJECT...');
};

export const getFirstProject = async () => {
  const projectsRef = collection(db, 'projects');
  const q = query(projectsRef, limit(1));
  const querySnapshot = await getDocs(q);

  let data: string | undefined;
  querySnapshot.forEach((doc) => {
    data = doc.id;
  });

  console.log('GET FIRST PROJECT...');
  return data;
};

export const getProjects = async () => {
  const docs = await getDocs(collection(db, 'projects'));
  const data: Project[] = [];

  docs.forEach((doc) => {
    const field = doc.data() as Omit<Project, 'name'>;

    data.push({
      name: doc.id,
      ...field
    });
  });

  console.log('GET PROJECTS...');
  return data;
};

export const deleteProject = async (project: string) => {
  await deleteDoc(doc(db, 'projects', project));
  console.log('DELETE PROJECT...');
};

// todo
export const updateTeam = async (project: string, assignment: Assignment) => {
  const projectRef = doc(db, 'project', project);

  await updateDoc(projectRef, { team: arrayUnion(assignment) });
  console.log('UPDATE TEAM...');
};
