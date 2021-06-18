import React, { useEffect } from 'react';
import './App.css';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
// Context API
// import { useStateValue } from './StateProvider';

function App() {
  // Redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is ', authUser);
      if (authUser) {
        dispatch(
          login({
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  // Context API
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
