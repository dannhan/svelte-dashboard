import { VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_APP_ID, VITE_FIREBASE_USE_EMULATOR } from '$env/static/private';

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: 'ria-busana',
  storageBucket: 'ria-busana.appspot.com',
  messagingSenderId: '1053993262752',
  appId: VITE_FIREBASE_APP_ID,
  useEmulator: VITE_FIREBASE_USE_EMULATOR === 'true'
};

export { firebaseConfig };
