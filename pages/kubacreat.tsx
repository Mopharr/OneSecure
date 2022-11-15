import style from "../styles/kuba.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Image from 'next/image'

const Kcreate = () => {
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
            <Link href="/"  className={style.logo}>
              <img src="/kuda.png" alt="logo" /> <span>Kuda Bank</span>
            </Link>

            <h2>Create a account</h2>
            <p>We’re the bank of the free</p>

            <div className={style.input}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Password" />
            </div>

            <button>
              <Link href="/verify">Create Account</Link>
            </button>

            <span className={style.or}>Or</span>

            <button className={style.btnn}>Sign up with google</button>
            <p className={style.login}>
              Already have a OneSecure <br /> accountt?
              <Link className={style.loginC} href="/">
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

export default Kcreate;
