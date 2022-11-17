import style from "../styles/kuba.module.css";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Kverify = () => {
  let firstname: any;
  let lastname: any;
  let nin_status: any;
  if (typeof window !== "undefined") {
    firstname = window.localStorage.getItem("firstname");
    lastname = window.localStorage.getItem("lastname");
    nin_status = window.localStorage.getItem("nin");
  }

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

            <div className={style.nums}>
              <div className={style.one}>1</div>
              <div className={style.one}>2</div>
              <div className={style.one}>3</div>
            </div>

            <div className={style.input}>
              <input
                style={{ width: "90%" }}
                type="text"
                placeholder="First Name"
                value={firstname}
                disabled
              />

              {firstname === "" ? (
                <FaTimes className={style.times} />
              ) : (
                <AiOutlineCheckCircle className={style.check} />
              )}
            </div>
            <div className={style.input}>
              <input
                style={{ width: "90%" }}
                type="text"
                placeholder="Last Name"
                value={lastname}
                disabled
              />
              {lastname === "" ? (
                <FaTimes className={style.times} />
              ) : (
                <AiOutlineCheckCircle className={style.check} />
              )}
            </div>
            <div className={style.inputt}>
              <div className={style.inpput}>
                <input
                  style={{ width: "90%" }}
                  type="text"
                  placeholder="NIN"
                  disabled
                />
                {nin_status === "false" ? (
                  <FaTimes className={style.times} />
                ) : (
                  <AiOutlineCheckCircle className={style.check} />
                )}
              </div>
              {nin_status === "false" ? (
                <p>
                  Kuba Bank is requesting for your NIN but you have not provided
                  it. You will be asked to provide a valid NIN on the next page.
                </p>
              ) : null}
            </div>

            <button>
              {nin_status === "false" ? (
                <Link href="/kubaverify2">Input your NIN</Link>
              ) : (
                <Link href="/kubaverify3">Continue</Link>
              )}
            </button>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify;
