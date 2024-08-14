import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import MyBlogs from './pages/MyBlogs';
import Signup from './pages/Signup';
import Login from './pages/Login';
import EditBlog from './pages/EditBlog';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
import ViewBlog from './pages/ViewBlog';
import DeleteBlog from './pages/DeleteBlog';

function App() {
  return (
    <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createBlog' element={<CreateBlog />} />
          <Route path='/myBlogs' element={<MyBlogs />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:id' element={<EditBlog />} />
          <Route path='/:id' element={<EditProfile />} />
          <Route path='/:id' element={<ViewProfile />} />
          <Route path='/:id' element={<ViewBlog />} />
          <Route path='/:id' element={<DeleteBlog />} />
        </Routes>
      {/* <div className='bg-indigo-600 w-full h-screen'></div> */}
    </>
  );
}

export default App;