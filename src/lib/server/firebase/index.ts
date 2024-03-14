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
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

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
  await setDoc(projectRef, { type, team: [], designImages: [] });

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

// Create a storage reference from our storage service
// Delete this i think
export const getDesignImages = async () => {
  const storage = getStorage();
  const designRef = ref(storage, `design/wallpapeold.png`);

  // const { fullPath, name, bucket } = designRef;

  const url = await getDownloadURL(designRef).catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        console.log("File doesn't exist");
        break;
      case 'storage/unauthorized':
        console.log("User doesn't have permission to access the object");
        break;
      case 'storage/canceled':
        console.log('User canceled the upload');
        break;
      case 'storage/unknown':
        console.log('Unknown error occurred, inspect the server response');
        break;
    }
  });

  return url;
};

export const uploadDesignImage = async (project: string, file: File) => {
  const storage = getStorage();

  // Create the file metadata
  const metadata = { contentType: 'design/jpeg' };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'design/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  // Get the project ref to store the url
  const projectRef = doc(db, 'projects', project);

  // Listen for state changes, errors, and completion of the upload.
  await new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            console.log("User doesn't have permission to access the object");
            break;
          case 'storage/canceled':
            console.log('User canceled the upload');
            break;
          case 'storage/unknown':
            console.log('Unknown error occurred, inspect error.serverResponse');
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL: string) => {
            updateDoc(projectRef, { designImages: arrayUnion(downloadURL) });
            resolve(downloadURL);
          })
          .catch((error) => reject(error.message));
      }
    );
  });
};
