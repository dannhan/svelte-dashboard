import { initializeApp } from 'firebase/app';
import { collection, getFirestore, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './settings';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

	return data;
};

// todo
// export const updateProject = async (project) => {
//   return 'Method not implemented';
// };

export const deleteProject = async (project: string) => {
	await deleteDoc(doc(db, 'projects', project));
};

export const loginFirebase = async (password: string) => {
	const auth = getAuth();
	const emailPlaceholder = 'default@email.com';
	signInWithEmailAndPassword(auth, emailPlaceholder, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log({ user });
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log({ errorCode, errorMessage });
		});
};

export const logoutFirebase = async () => {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			// Sign-out successful.
		})
		.catch((error) => {
			console.log({ error });
		});
};
