import style from "../styles/sign.module.css";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const Signup = () => {
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
              <button className={style.btn2}>Save</button>
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
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className={style.boxCon}
                    value="Damilare"
                  />
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className={style.boxCon}
                    value="Ayodeji"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Middle Name"
                    variant="outlined"
                    className={style.boxCon}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    className={style.boxCon}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Date of birth"
                    variant="outlined"
                    className={style.boxCon}
                  />
                  <TextField
                    id="outlined-basic"
                    label="NIN"
                    variant="outlined"
                    className={style.boxCon}
                  />
                </Box>
              </div>
            </div>
            <div className={style.hr}></div>
            <div className={style.hr1}></div>
            <div className={style.right}>
              <div className={style.conf}>
                <h2>National Information</h2>
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
                    label="NIN"
                    variant="outlined"
                    className={style.boxCon}
                  />
                </Box>
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
                  />
                  <TextField
                    id="outlined-basic"
                    label="Genotype"
                    variant="outlined"
                    className={style.boxCon}
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

export default Signup;
