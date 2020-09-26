/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// API url
export const apiUrl = 'https://beautiful-tags.herokuapp.com/';

// Auth Constants
export const authConstants = {
  // Modal constants
  close_login: 'close_login_modal',
  open_login: 'open_login_modal',
  close_register: 'close_register_modal',
  open_register: 'open_register_modal',
  // Registration constants
  registering: 'loaging_register_request',
  register_user: 'register_user_request',
  register_user_fail: 'register_user_failure',
  register_user_success: 'register_user_successfull',
  // Login constants
  logging: 'loading_login_request',
  login_user: 'login_user_request',
  login_user_fail: 'login_user_failure',
  login_user_success: 'login_user_successfull',
  logout_user: 'logout_user_request',
};

const navLinks = document.getElementsByClassName('nav-links');

export const toggle = () => {
  navLinks[0].classList.toggle('open');
};

export const inputValidation = ({ message }) => {
  const invalid = [];
  const general = message.split(':');
  const specific = general[1].split(',');
  for (const i in specific) {
    invalid.push(specific[i].split(' ')[1].toLowerCase());
  }
  const inputs = document.querySelectorAll('input,textArea');
  for (const i in inputs) {
    if (invalid.includes(inputs[i].name)) {
      inputs[i].className = `${inputs[i].className} is-danger`;
    } else {
      inputs[i].className = `${inputs[i].className} is-success`;
    }
  }
};

export const loadingIcon = params => {
  const className = params || 'is-disabled button is-loading';
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    const arr = buttons[i].className.split(' ');
    if (arr[(arr.length) - 1] === 'is-loading') {
      arr.pop();
      buttons[i].className = arr.join(' ');
    } else {
      buttons[i].className = `${buttons[i].className} ${className}`;
    }
  }
};
