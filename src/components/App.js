import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as postsApi from '../utils/postsApi'
import {connect} from 'react-redux';

class App extends Component {
  state = {
    categories:[],
    posts:[],
    /*
    POST:
    id - UUID should be fine, but any unique id will work
    timestamp - [Timestamp] Can in whatever format you like, you can use Date.now() if you like.
    title - [String]
    body - [String]
    author - [String]
    category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.
     */
    comments:[],
    /*
    COMMENT:
      id - Any unique ID. As with posts, UUID is probably the best here.
      timestamp - [Timestamp] Get this however you want.
      body - [String]
      author - [String]
      parentId - Should match a post id in the database.
    */
  }
  componentDidMount(){
   postsApi.getCategories().then((categories)=>{
     this.setState({categories:categories})
     console.log("Category load");
   })
   postsApi.getPosts().then((posts)=>{
     this.setState({posts:posts})
     console.log("Posts load");
   })
   postsApi.getPostsByCat('redux').then((posts) => {
     console.log("Post by Category load");
     console.log(posts);
   })
   postsApi.getPost("8xf0y6ziyjabvozdd253nd").then((posts) => {
     console.log("Post by id");
     console.log(posts);
   })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!!</h1>
        </header>
        {this.state.categories.map((category)=>(
          <h2 key={category.name}>{category.name}</h2>
        ))}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
