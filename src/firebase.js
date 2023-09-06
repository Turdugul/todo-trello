import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADNniv7KxQIyFlosGvO7WBz7A0W43TuJI",
  authDomain: "my-todo-trello.firebaseapp.com",
  databaseURL: "https://my-todo-trello-default-rtdb.firebaseio.com",
  projectId: "my-todo-trello",
  storageBucket: "my-todo-trello.appspot.com",
  messagingSenderId: "513192248413",
  appId: "1:513192248413:web:212a6580dd7ca8257b39b4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
