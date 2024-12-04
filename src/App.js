import React from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/landing.react";
import Login from "./pages/Login.react";
import { Container, Box, Typography } from "@mui/material";
import logo from "./assets/images/logo-with-text2-removebg-preview.png";


function App() {
// const navigate = useNavigate();
  return (
    <>
    <Routes>
      <Route path="*" element={<Landing />} exact />
      <Route path="/" element={<Landing />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path ="/home" element ={ <Home/>} exact/>
    </Routes>
    {/* footer */}
    <Container
        maxWidth="false"
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            sm: "space-between",
            xs: "center",
          },
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          color: "#fff",
          gap: { lg: "2rem", xs: "1rem" },
        }}
      >
         <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { lg: 0, xs: "1rem" },
          }}
        >
          <img src={logo} alt="logo" width="40%" />
        </Box>
      </Container>

  
    
    </>
  );
}

export default App;
