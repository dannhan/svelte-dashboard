import type { Project } from '$lib/types';
import { type FirebaseApp } from 'firebase/app';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  limit,
  getFirestore,
  connectFirestoreEmulator,
  type Firestore
} from 'firebase/firestore';
import { firebaseConfig } from '../settings';

export class ProjectsService {
  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);

    if (firebaseConfig.useEmulator) {
      connectFirestoreEmulator(this.db, '127.0.0.1', 8080);
    }

    this.addProject = this.addProject.bind(this);
    this.getFirstProject = this.getFirstProject.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  public async addProject(name: string, type: string) {
    const projectRef = doc(this.db, 'projects', name);

    await setDoc(projectRef, { type, identity: [], assignments: [], designImages: [], progress: [] })
      .then(() => console.log('PROJECT CREATED...'))
      .catch((error) => console.log(error.message));
  }

  public async getFirstProject() {
    const projectsRef = collection(this.db, 'projects');
    const q = query(projectsRef, limit(1));

    let data: string | undefined;

    await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data = doc.id;
      });

      console.log('FIRST PROJECT RETRIEVED...');
    });

    return data;
  }

  public async getProjects() {
    const data: Project[] = [];

    await getDocs(collection(this.db, 'projects')).then((docs) => {
      docs.forEach((doc) => {
        const field = doc.data() as Omit<Project, 'name'>;

        data.push({
          name: doc.id,
          ...field
        });
      });

      console.log('PROJECTS RETRIEVED...');
    });

    return data;
  }

  public async deleteProject(project: string) {
    await deleteDoc(doc(this.db, 'projects', project));

    console.log('PROJECT DELETED...');
  }
}
