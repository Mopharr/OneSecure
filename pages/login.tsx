import style from "../styles/create.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import axios from "axios";
import gToken from "./components/getToken";

import { useRouter } from "next/router";

const Login = () => {
  const timer = useRef();
  const [err, setErr] = useState(false);
  const [sign, setSign] = useState({
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
        "https://authapitest.herokuapp.com/auth",
        {
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
          email: "",
          password: "",
        });
        setErr(false);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
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

            <h2>Log in to your OneSecure account</h2>
            <p>
              All your personal information, identity documents and more all in
              one place.
            </p>

            <form onSubmit={handleSubmit}>
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
              Don&lsquo;t have a OneSecure <br /> account?
              <Link className={style.loginC} href="/signUp">
                Sign up for free
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

export default Login;
