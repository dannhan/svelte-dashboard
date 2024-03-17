import { type FirebaseApp } from 'firebase/app';
import {
  doc,
  getFirestore,
  connectFirestoreEmulator,
  type Firestore,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { firebaseConfig } from '../settings';
import type { Progress } from '$lib/types';

export class ProjectProgressService {
  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);

    if (firebaseConfig.useEmulator) {
      connectFirestoreEmulator(this.db, '127.0.0.1', 8080);
    }

    this.addProjectProgress = this.addProjectProgress.bind(this);
    this.deleteProjectProgress = this.deleteProjectProgress.bind(this);
  }

  public async addProjectProgress(project: string, progress: Progress) {
    const projectRef = doc(this.db, 'projects', project);

    await updateDoc(projectRef, {
      progress: arrayUnion({ ...progress })
    });

    console.log('PROJECT PROGRESS CREATED...');
  }

  public async deleteProjectProgress(project: string, progress: Progress) {
    const projectRef = doc(this.db, 'projects', project);

    await updateDoc(projectRef, {
      progress: arrayRemove({ ...progress })
    });

    console.log('PROJECT PROGRESS DELETED...');
  }
}
