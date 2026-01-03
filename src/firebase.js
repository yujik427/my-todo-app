// Firebase設定と初期化
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase設定（デモ用 - Firebase Consoleでプロジェクトを作成して実際の値を入力してください）
// https://console.firebase.google.com/ でプロジェクトを作成し、設定を取得してください
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "todo-app-demo.firebaseapp.com",
  projectId: "todo-app-demo",
  storageBucket: "todo-app-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id"
};

// Firebase初期化
const app = initializeApp(firebaseConfig);

// Firestoreインスタンス取得
export const db = getFirestore(app);

// デバッグ用
console.log('Firebase initialized:', app);
