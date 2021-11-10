/* eslint-disable arrow-body-style */
import axios from 'axios';
import firebase from 'firebase/app';
import { addUser } from './data/userData';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

const signInUser = (setUser) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    const us = user.user;
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        DisplayName: us?.email.split('@gmail.com')[0],
        FirstName: us?.displayName.split(' ')[0],
        LastName: us?.displayName.split(' ')[1],
        ProfilePicUrl: us?.photoURL,
        RoleTypeId: '20dff387-4238-4e1f-af2f-c69e7f9daa05',
        // GoogleId: us?.uid,
        EmailAddress: us?.email,
        Bio: '',
      };
      addUser(userInfo).then(setUser);
      window.location.href = '/';
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
