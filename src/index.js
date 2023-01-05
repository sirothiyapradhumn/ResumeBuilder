import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/rootReducer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAovaEZ7bC7SZzrlxQrIB8qVfp8qM0jss",
  authDomain: "resumebuilder-ade90.firebaseapp.com",
  projectId: "resumebuilder-ade90",
  storageBucket: "resumebuilder-ade90.appspot.com",
  messagingSenderId: "983911526713",
  appId: "1:983911526713:web:1a9f2c5f834d573f4d78e8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
