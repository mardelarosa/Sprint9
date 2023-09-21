import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import BookDetails from "./pages/BookDetails";
import MainMenu from "./components/MainMenu";
import NavBarLogin from "./components/NavBarLogin";
import Contact from "./pages/Contact";
import Login from "./user/Login";
import Register from "./user/Register";
import Wallpapers from "./pages/Wallpapers";
import { AuthProvider } from "./user/AuthContext";
import ProtectedRoute from './user/ProtectedRoute'; 


function AppRouter() {
    return (

        <BrowserRouter>
        <AuthProvider>
        <NavBarLogin />
        <MainMenu/>

            <Routes>
            <Route index element={<Home/>} />
            <Route path="/books" element={<Books />} />
            <Route path="/aboutme" element={<About/>} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wallpapers" element={
    <ProtectedRoute>
      <Wallpapers />
    </ProtectedRoute>
  } />
            



            </Routes>
            </AuthProvider>
        </BrowserRouter>

    )


};

export default AppRouter;