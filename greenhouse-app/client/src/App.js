//TODO: Import React
//TODO: Import from react-router-dom (see stripe activty from MERN)
//TODO: Import from @apollo/client (see stripe activity from MERN) 
//TODO: Import from @apollo/client/link/context (see stripe activity from MERN)

//TODO: Import all pages created from pages folder

//TODO: Create httpLink, set up Auth, and creat new apolloclient w/ authlink (see stripe activity from MERN)

//TODO: Import all pages with unique URLs from Pages folder by creating App function (see stripe activity from MERN)
//import { useState } from "react";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

// pages
import Home from "./pages/Home";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}