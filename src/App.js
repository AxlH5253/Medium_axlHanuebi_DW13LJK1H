import React, { Component } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import OneZero from './pages/Onezero';
import Elemental from './pages/Elemental';
import Gen from './pages/Gen';
import Zora from './pages/Zora';
import Forge from './pages/Forge';
import HumanParts from './pages/HumanParts';
import Marker from './pages/Marker';
import Level from './pages/Level';
import Heat from './pages/Heat';
import ArticleDetail from './pages/ArticleDetail';
import Category from './pages/Category';
import Follow from './components/follow';
import Comment from './pages/Coment';
import RelatedArticle from './pages/RelatedArticle'; 
import Story from './pages/Story';
import NewStory from './pages/NewStory';
import Stats from './pages/Stats';
import Profile from './pages/Profile'
import Bookmarks from './pages/Bookmarks';
import StoryPublish from './components/StoryPublish';
import StoryDraft from './components/StoryDraft';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

 class App extends Component{
  render(){
  return(
      <Router>
        <div>
        <Switch>
          <Route path="/onezero">
            <div className="app-body">
              <OneZero/>
            </div>
          </Route>
          <Route path="/elemental">
            <div className="app-body">
              <Header/>
              <Category/>
              <Elemental/>
            </div>
          </Route>
          <Route path="/gen">
            <div className="app-body">
              <Header/>
              <Category/>
              <Gen/>
            </div>
          </Route>
          <Route path="/zora">
            <div className="app-body">
              <Header/>
              <Category/>
              <Zora/>
            </div>
          </Route>
          <Route path="/forge">
            <div className="app-body">
              <Header/>
              <Category/>
              <Forge/>
            </div>
          </Route>
          <Route path="/humanparts">
            <div className="app-body">
              <Header/>
              <Category/>
              <HumanParts/>
            </div>
          </Route>
          <Route path="/marker">
            <div className="app-body">
              <Header/>
              <Category/>
              <Marker/>
            </div>
          </Route>
          <Route path="/level">
            <div className="app-body">
              <Header/>
              <Category/>
              <Level/>
            </div>
          </Route>
          <Route path="/heat">
            <div className="app-body">
              <Header/>
              <Category/>
              <Heat/>
            </div>
          </Route>
          <Route path="/articledetail">
            <div className="app-body">
              <ArticleDetail/>
              <Follow/>
              <RelatedArticle/>
            </div>
          </Route>
          <Route path="/home">
            <div className="app-body">
              <Header/>
              <Category/>
              <Home/>
            </div>
          </Route>
          <Route path="/login">
            <div className="app-body">
              <Login/>
            </div>
          </Route>
          <Route path="/comment">
            <div className="app-body">
              <Header/>
              <Comment/>
            </div>
          </Route>
          <Route path="/newstory">
            <div className="app-body">
              <NewStory/>
            </div>
          </Route>
          <Route path="/stats">
            <div className="app-body">
              <Header/>
              <Stats/>
            </div>
          </Route>
          <Route path="/profile">
            <div className="app-body">
              <Profile/>
            </div>
          </Route>
          <Route path="/bookmarks">
            <div className="app-body">
              <Header/>
              <Bookmarks/>
            </div>
          </Route>
          <Route path="/storypublish">
            <div className="app-body">
              <Header/>
              <Story/>
              <StoryPublish/>
            </div>
          </Route>
          <Route path="/storydraft">
            <div className="app-body">
              <Header/>
              <Story/>
              <StoryDraft/>
            </div>
          </Route>
          <Route path="/">
            <div className="app-body">
              <Register/>
            </div>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
