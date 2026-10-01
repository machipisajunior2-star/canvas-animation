import test from './test.js';
import './style/main.scss';
import asset from './assets/profile.png';

const profileImage = document.getElementById('profile');
profileImage.src = asset;
console.log(test());
