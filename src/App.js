import React, { Component } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
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
import ArticleByPerson from './pages/ArticleByPerson';

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
          <Route path="/categorydetail">
            <div className="app-body">
              <CategoryDetail/>
            </div>
          </Route>
          <Route path="/articledetail">
            <div className="app-body">
              <ArticleDetail/>
              <Follow/>
              <RelatedArticle/>
            </div>
          </Route>
          <Route path="/Register">
            <div className="app-body">
              <Register/>
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
              <Header/>
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
          <Route path="/articlebyperson">
            <div className="app-body">
              <Header/>
              <ArticleByPerson/>
            </div>
          </Route>
          <Route path="/">
            <div className="app-body">
              <Header/>
              <Category/>
              <Home/>
            </div>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
