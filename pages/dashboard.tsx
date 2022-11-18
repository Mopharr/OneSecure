import style from "../styles/sign.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { RiArrowUpSLine } from "react-icons/ri";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import gToken from "./components/getToken";
import axios from "axios";


const Dashboard = () => {
  let firstname: any;
  let lastname: any;
  let emailL: any;
  let VNin: any;
  if (typeof window !== "undefined") {
    emailL = window.localStorage.getItem("email");
    firstname = window.localStorage.getItem("firstname");
    lastname = window.localStorage.getItem("lastname");
  }
  const timer: any = useRef();
  const [success, setSuccess] = useState(false);
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
        "https://authapitest.herokuapp.com/update_vnin",
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
        window.localStorage.setItem("nin", res.data.virtualnin);

        setSuccess(true);
        timer.current = window.setTimeout(() => {
          setLoading(false);
          setSuccess(false);
        }, 5000);
        setErr(false);
        router.push("/login");
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
    <div className={style.main}>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.main}>
        <div className={style.navBa}>
          <nav className={style.nav}>
            <Link href="/" className={style.logo}>
              <img src="/logo.png" alt="logo" /> <span>One Secure</span>
            </Link>
            <div className={style.btn}>
              <button className={style.btn1}>Add New</button>
              <button onClick={handleSubmit} className={style.btn2}>
                Save
              </button>
            </div>
          </nav>
        </div>
        <div className={style.infoBa}>
          <div className={style.info}>
            <div className={style.left}>
              <h2>Welcome back, you can update all your information here</h2>
              <p>
                All your personal information, identity documents and more all
                in one place.
              </p>

              <div className={style.details}>
                <span>Basic Information</span>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  className={style.box}
                >
                  <label htmlFor="">First Name</label>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className={style.boxCon}
                    value={firstname}
                  />
                  <label htmlFor="">Last Name</label>

                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className={style.boxCon}
                    value={lastname}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Middle Name"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                  />
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                  />
                  <TextField
                    id="outlined-basic"
                    label="Date of birth"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                  />
                </Box>
              </div>
            </div>
            <div className={style.hr}></div>
            <div className={style.hr1}></div>
            <div className={style.right}>
              <div className={style.conf}>
                <h2>National Information</h2>
                <span>NIN test value: AA1234567890123B</span>

                <form onSubmit={handleSubmit}>
                  <div className={style.inputNin}>
                    <input
                      type="text"
                      placeholder="NIN"
                      name="virtualnin"
                      value={val.virtualnin}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className={style.conf}>
                <h2>Financial Information</h2>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="BVN"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                  />
                </Box>
              </div>
              <div className={style.conf}>
                <h2>Health Information</h2>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Blood Group"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                  />
                  <TextField
                    id="outlined-basic"
                    label="Genotype"
                    variant="outlined"
                    className={style.boxCon}
                    disabled
                    />
                </Box>
              </div>
              <div className={style.conf}>
                <h2>Document</h2>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="International Passport"
                    variant="outlined"
                    className={style.boxCon}
                  />
                  <TextField
                    id="outlined-basic"
                    label="CAC Business Registration"
                    variant="outlined"
                    className={style.boxCon}
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
