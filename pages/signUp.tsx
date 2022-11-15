import style from "../styles/create.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import gToken from "./components/getToken";
import { useRouter } from "next/router";
import { Router } from "react-router-dom";

const Create = () => {
  const [sign, setSign] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = ({ target: { name, value } }: any) => {
    setSign({ ...sign, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    gToken();
    const token = window.localStorage.getItem("token")?.replace(/['"]+/g, "");
    const accToken = "Bearer " + token;

    const headers = {
      Authorization: `${accToken}`,
    };

    axios
      .post(
        "https://authapitest.herokuapp.com/regUser",
        {
          firstname: sign.firstname,
          lastname: sign.lastname,
          email: sign.email,
          password: sign.password,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res);
        setSign({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        router.push('/dashboard ')
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
            <Link href="/" className={style.logo}>
              <img src="/logo.png" alt="logo" /> <span>One Secure</span>
            </Link>

            <h2>Create a OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={style.input}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={sign.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.input}>
                <input
                  type="text"
                  placeholder="last Name"
                  name="lastname"
                  value={sign.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={style.input}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={sign.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.input}>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={sign.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">Create Account</button>
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
