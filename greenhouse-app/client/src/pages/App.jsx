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