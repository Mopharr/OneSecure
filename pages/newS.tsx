import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { GrFormCheckmark } from "react-icons/gr";
import { BiErrorCircle } from "react-icons/bi";
import gToken from "./components/getToken";




const Create = () => {
  const [loading, setLoading] = useState(false);
    const [signUp, setSignUP] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });


   const handleChange = ({ target: { name, value }, }:any) => {
     setSignUP({ ...signUp, [name]: value });
   };

  const onSubmit = ( ) => {
   gToken();
   const token = window.localStorage.getItem("token")?.replace(/['"]+/g, "");
   const accToken = "Bearer " + token;
    setLoading(true);
    
    const headers = {
      Authorization: `${accToken}`,
     };
    axios
      .post(
        "https://authapitest.herokuapp.com/regUser",
        {
          firstname: signUp.firstname.trim(),
          lastname: signUp.lastname.trim(),
          email: signUp.email.trim(),
          password: signUp.password.trim(),
        },
        {
          headers: headers,
        }
      )
      .then((res: any) => {
       
         setSignUP({
           firstname: "",
           lastname: "",
           email: "",
           password: "",
         });
      })
      .catch((error) => {
        console.log(error);
        
      });
  };
  return (
    <div>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.main}>
  

        <div className={style.rightBa}>
          <div className={style.right}>
            <div className={style.logo}>
              <img src="/logo.png" alt="logo" /> <span>One Secure</span>
            </div>

            <h2>Create a OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>
            <form onSubmit={onSubmit}>
              <div className={style.input}>
                <input
                  type="text"
                  name="firstname"
                  value={signUp.firstname}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className={style.input}>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={signUp.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.input}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signUp.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.input}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUp.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">
                {loading ? (
                  <CircularProgress size={30} sx={{ color: "white" }} />
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Create;
