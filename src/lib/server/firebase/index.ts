import { initializeApp, type FirebaseApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore, type Firestore } from 'firebase/firestore';
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

import { ProjectsService } from './services/projects';
import { DesignImagesService } from './services/design-images';
import { ProjectIdentityService } from './services/project-identity';
import { ProjectProgressService } from './services/project-progress';

export const { addProject, getProjects, getFirstProject, deleteProject } = new ProjectsService(app);
export const { uploadDesignImage } = new DesignImagesService(app);
export const { addProjectIdentity, deleteProjectIdentity } = new ProjectIdentityService(app);
export const { addProjectProgress, deleteProjectProgress } = new ProjectProgressService(app);
