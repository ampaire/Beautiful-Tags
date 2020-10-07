import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from '../Containers/SignUpForm';
import LoginForm from '../Containers/LoginForm';
import ItemForm from '../Containers/EditProduct';
import ItemList from '../Containers/ProductsList';
import ItemDetails from '../Containers/ProductDetails';
import UserProfile from '../Containers/User';
import AdminProfile from '../Containers/Admin';
import EditProfile from '../Containers/EditProfile';
import EditItem from '../Containers/AddItem';
import Home from './home';
import '../index.css';
import '../Assets/styles/index.scss';
import 'bulma/css/bulma.css';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/items" component={ItemList} exact />
      <Route path="/items/:id" component={ItemDetails} exact />
      <Route path="/profile" component={UserProfile} />
      <Route path="/admin" component={AdminProfile} />
      <Route path="/newitem" component={ItemForm} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/items/:id/edit" component={EditItem} />
    </Switch>
  </div>
);

export default App;
