import style from "../styles/kuba.module.css";
import Head from "next/head";
import { RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Kverify2 = () => {
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

            <h2>Kuba Bank is requesting to access the following details:</h2>

            <div className={style.nums11}>
              <div className={style.one}>1</div>
              <div className={style.line}></div>
              <div className={style.one}>2</div>
              <div className={style.lineB}></div>
              <div className={style.one}>3</div>
            </div>

            <div className={style.inputNin}>
              <div className={style.text}>
                <p>NIN</p>
                <RiArrowUpSLine className={style.textIcon} />
              </div>
              <input type="text" placeholder="NIN" />
            </div>

            <button>
              <Link href="/kubaverify3">Continue</Link>
            </button>
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
