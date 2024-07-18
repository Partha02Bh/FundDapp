import React, { useState } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Box,Typography,TextField,Button } from "@mui/material";

const CircleContainer = styled("div")(({ theme }) => ({
  width: 400,
  height: 400,
  margin: "auto",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

const Circle1 = styled("div")(({ theme }) => ({
  width: 300,
  height: 300,
  background: "linear-gradient(45deg, #ff0099, #7a0ed6)",
  borderRadius: "50%",
  position: "absolute",
  top: -100,
  right: -155,
}));

const Circle2 = styled("div")(({ theme }) => ({
  width: 200,
  height: 200,
  background: "linear-gradient(45deg, #ff237b, #f64838)",
  borderRadius: "50%",
  position: "absolute",
  bottom: -90,
  left: -70,
}));

const LoginForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  padding: "40px 26px",
  height:400,
  width: 300,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: 10,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.18)",
}));

const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      setToken(data);
      window.location.href = "http://localhost:5173/";
      // navigate("funds-chain.netlify.app");
    } catch (error) {
      alert(error);
    }
  }

  return (

<Box
      sx={{
        padding: 0,
        margin: 0,
        backgroundColor: "#03080e",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "poppins",
        position: "relative",
      }}
    >
      <CircleContainer>
        <Circle1 />
        <Circle2 />
      </CircleContainer>
      <LoginForm action="#" className="login_form" onSubmit={handleSubmit}>
        <Typography variant="h1" sx={{ fontSize: 25, marginTop: 0,paddingTop:0,paddingBottom:0, marginBottom: 0,display:'flex',justifyContent:'center' }}>
          Welcome back!
        </Typography>
        <Typography variant="p" sx={{ marginTop: 0, marginBottom: 2,display:'flex',justifyContent:'center' }}>
          Login to your account.
        </Typography>
        <TextField
         placeholder="Email"
          name="email"
          onChange={handleChange}
          type="email"
          variant="outlined"
          sx={{ marginBottom: 5 }}
        />
        <TextField
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          variant="outlined"
          sx={{ marginBottom: 4 }}
        />
        <Button type="submit" variant="contained" sx={{ marginTop: 0 }} >
          Login
        </Button>
        
        <div style={{display:'flex', justifyContent:'center'}}> New account?</div> <Link to="/signup" style={{textDecoration: 'none', color:'#ffffff',display:'flex', justifyContent:'center'}}><Button variant="contained" sx={{height:'30px'}}>Signup</Button></Link> 
      </LoginForm>
    </Box>

    // <div>
    
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       placeholder="Email"
    //       name="email"
    //       type="email"
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="Password"
    //       name="password"
    //       type="password"
    //       onChange={handleChange}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    //   New account? <Link to="/signup">Signup</Link>
    // </div>
  );
};

export default Login;
