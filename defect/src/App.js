import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header_component/header'
import Sidebar from './sidebar_component/side'
import Project from './project_component/project'
// import Project_list './project_component/Project_list'
import Project_list from './project_component/project_list';
function App() {
  return (
   <div className="App">
     <Header/>
     <Sidebar/>
     <Project_list/>
   </div>
  );
}

export default App;
