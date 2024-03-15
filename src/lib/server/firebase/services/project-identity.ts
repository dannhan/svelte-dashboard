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
import type { Identity } from '$lib/types';

export class ProjectIdentityService {
  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);

    if (firebaseConfig.useEmulator) {
      connectFirestoreEmulator(this.db, '127.0.0.1', 8080);
    }

    this.addProjectIdentity = this.addProjectIdentity.bind(this);
    this.deleteProjectIdentity = this.deleteProjectIdentity.bind(this);
  }

  public async addProjectIdentity(project: string, identity: Identity) {
    const projectRef = doc(this.db, 'projects', project);

    await updateDoc(projectRef, {
      identity: arrayUnion({ ...identity })
    });

    console.log('PROJECT IDENTITY CREATED...');
  }

  public async deleteProjectIdentity(project: string, identity: Identity) {
    const projectRef = doc(this.db, 'projects', project);

    console.log({ project });
    await updateDoc(projectRef, {
      identity: arrayRemove({ ...identity })
    });

    console.log('PROJECT IDENTITY DELETED...');
  }
}
