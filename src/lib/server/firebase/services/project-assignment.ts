import type { Assignment } from '$lib/types';
import type { FirebaseApp } from 'firebase/app';
import { Firestore, arrayUnion, doc, getFirestore, updateDoc } from 'firebase/firestore';

export class ProjectAssignmentService {
  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);

    this.addProjectAssignment = this.addProjectAssignment.bind(this);
  }

  public async addProjectAssignment(project: string, assignment: Assignment) {
    const projectRef = doc(this.db, 'projects', project);

    await updateDoc(projectRef, {
      assignment: arrayUnion({ ...assignment })
    });

    console.log({ assignment });
    console.log('PROJECT ASSIGNMENT CREATED...');
  }

  // todo
  public async addProjectAssignmentImage() {
    return 'terserah';
  }
}
