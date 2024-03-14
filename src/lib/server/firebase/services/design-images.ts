import { type FirebaseApp } from 'firebase/app';
import {
  doc,
  getFirestore,
  connectFirestoreEmulator,
  updateDoc,
  arrayUnion,
  type Firestore
} from 'firebase/firestore';
import {
  connectStorageEmulator,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
  type FirebaseStorage
} from 'firebase/storage';
import { firebaseConfig } from '../settings';

export class DesignImagesService {
  private db: Firestore;
  private storage: FirebaseStorage;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);
    this.storage = getStorage(app);

    if (firebaseConfig.useEmulator) {
      connectFirestoreEmulator(this.db, '127.0.0.1', 8080);
      connectStorageEmulator(this.storage, '127.0.0.1', 9199);
    }

    this.uploadDesignImage = this.uploadDesignImage.bind(this);
  }

  public async uploadDesignImage(project: string, file: File) {
    const metadata = { contentType: 'design/jpeg' };
    const storageRef = ref(this.storage, 'design/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    const projectRef = doc(this.db, 'projects', project);

    await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
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
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL: string) => {
              updateDoc(projectRef, { designImages: arrayUnion(downloadURL) });
              resolve(downloadURL);
            })
            .catch((error) => reject(error.message));
        }
      );
    });
  }
}
