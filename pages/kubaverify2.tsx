import style from "../styles/kuba.module.css";
import Head from "next/head";
import { RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import gToken from "./components/getToken";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Kverify2 = () => {
  let emailL: any;
  if (typeof window !== "undefined") {
    emailL = window.localStorage.getItem("email");
  }
  const timer: any = useRef();
  const [err, setErr] = useState(false);
  const [val, setval] = useState({
    email: emailL,
    virtualnin: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }: any) => {
    setval({ ...val, [name]: value });
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
        "https://authapitest.herokuapp.com/updateProfile",
        {
          email: val.email,
          virtualnin: val.virtualnin,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        setval({
          email: "",
          virtualnin: "",
        });
    

        timer.current = window.setTimeout(() => {
          setLoading(false);
        }, 5000);

        setErr(false);
        router.push("/kubaverify3");
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
        setLoading(false);
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
              <img src="/kuda.png" alt="logo" /> <span>Kuda Bank</span>
            </Link>

            <h2>Kuba Bank is requesting to access the following details:</h2>

            <div className={style.nums11}>
              <div className={style.one}>1</div>
              <div className={style.line}></div>
              <div className={style.one}>2</div>
              <div className={style.lineB}></div>
              <div className={style.one}>3</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={style.inputNin}>
                <div className={style.text}>
                  <p>NIN</p>
                  <RiArrowUpSLine className={style.textIcon} />
                </div>
                <input
                  type="text"
                  placeholder="NIN"
                  name="virtualnin"
                  value={val.virtualnin}
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

            <Link href="/kubaverify" className={style.back}>
              Back
            </Link>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify2;
