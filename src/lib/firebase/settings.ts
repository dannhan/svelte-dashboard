const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: 'ria-busana',
  storageBucket: 'ria-busana.appspot.com',
  messagingSenderId: '1053993262752',
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  useEmulator: import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true'
};

export { firebaseConfig };
