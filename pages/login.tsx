import style from "../styles/create.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import gToken from "./components/getToken";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

const Login = () => {
  const timer: any = useRef();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }: any) => {
    setSign({ ...sign, [name]: value });
  };
  useEffect(() => {
    gToken();
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token")?.replace(/['"]+/g, "");
    const accToken = "Bearer " + token;

    setLoading(true);

    const headers = {
      Authorization: `${accToken}`,
    };
    axios
      .post(
        "https://authapitest.herokuapp.com/fetchUserProfile",
        {
          email: sign.email,
          password: sign.password,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        setSign({
          email: "",
          password: "",
        });
        window.localStorage.setItem("firstname", res.data.firstname);
        window.localStorage.setItem("lastname", res.data.lastname);
        window.localStorage.setItem("nin", res.data.nin_status);
        window.localStorage.setItem("email", res.data.email);

        setSuccess(true);
        timer.current = window.setTimeout(() => {
          setLoading(false);
          setSuccess(false);
        }, 5000);
        setErr(false);
        router.push("/kubaverify");
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
        setSuccess(false);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 5000);
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
        {success ? (
          <div className={style.suc}>
            <p>
              <AiOutlineCheckCircle className={style.sIcon} /> sign up was
              successful
            </p>
          </div>
        ) : null}

        {err ? (
          <div className={style.err}>
            <p>
              <BiErrorCircle className={style.sIcon} />
              sign up failed
            </p>
          </div>
        ) : null}
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

              <button type="submit">
                {loading ? (
                  <CircularProgress size={30} sx={{ color: "white" }} />
                ) : (
                  "Login"
                )}
              </button>
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
