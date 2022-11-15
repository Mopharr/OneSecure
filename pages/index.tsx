import Head from "next/head";
import style from "../styles/Home.module.css";
import {
  AiOutlinePlayCircle,
  AiOutlineCheckCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <header className={style.header}>
          <Link href="/"  className={style.nav}>
            <img src="/os10.png" alt="" />
          </Link>
          <div className={style.headCon}>
            <div className={style.text}>
              <h2>All in one identity verification system for businesses</h2>
              <p>
                Save time by connecting with multiple infrastructures with only
                one integration.
              </p>

              <div className={style.btn}>
                <button>
                  <Link href="/kubacreat">Try out demo</Link>
                </button>

                <Link href="#demo">
                  <div className={style.watch}>
                    <AiOutlinePlayCircle className={style.play} />{" "}
                    <span>Watch it in action</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className={style.image}>
              <img src="/os9.png" alt="" />
            </div>
          </div>
        </header>

        <section className={style.spo}>
          <div className={style.spon}>
            <h2>
              There are so many identify verification infrastructures out there
              but your customers don’t care. All they want is to get verified
              and start using your platform.
            </h2>

            <div className={style.sponCap}>
              <div className={style.one}>
                <img src="/os8.png" alt="" />
                <img src="/os7.png" alt="" />
                <img src="/os4.png" alt="" />
              </div>
              <div className={style.one}>
                <img src="/os2.png" alt="" />
                <img src="/os1.png" alt="" />
                <img src="/sc11.png" alt="" />
              </div>
              <div className={style.one}>
                <img src="/os6.png" alt="" />
                <img src="/os3.png" alt="" />
                <img src="/os5.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className={style.demoB} id="demo">
          <section className={style.demo}>
            <h2>
              Watch how your customers use OneSecure after your integration
            </h2>

            <div className={style.demoT}>
              <p>Watch Demo Video</p>
              <AiOutlinePlayCircle className={style.demoP} />
            </div>
          </section>
        </section>

        <section className={style.exploreB}>
          <div className={style.explore}>
            <h2>Explore possible use cases with OneSecure</h2>

            <div className={style.content}>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Banking and Lending</h3>
                <p>
                  Get easy access to your users&apos; data, all in one place,
                  BVN, NIN, House Address, CAC Documents, etc.
                </p>
              </div>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Telecoms</h3>
                <p>
                  Registering a new sim user shouldn&apos;t require much hassle.
                  Get access to a user&apos;s local government area, state of
                  origin, and mother&apos;s maiden name, all in one click.
                </p>
              </div>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Ecommerce</h3>
                <p>
                  Verify your sellers and reduce fraudulent activities. The
                  semi-anonymity of some e-commerce platforms makes them easily
                  prone to fraudulent schemes.
                </p>
              </div>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Health Care</h3>
                <p>
                  Get users&apos; health records like genotype, blood group, and
                  allergies, all with one integration.
                </p>
              </div>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Education</h3>
                <p>
                  Access past education history, user&apos;s biodata, exam
                  scores, etc. Improve your onboarding process with just one
                  integration.
                </p>
              </div>
              <div className={style.conCap}>
                <AiOutlineCheckCircle className={style.cIcon} />
                <h3>Fraud Protection</h3>
                <p>
                  Report and block fraudulent users and get insights on users
                  that either have been reported or blocked by other platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.intB}>
          <div className={style.int}>
            <div className={style.iText}>
              <h2>Seamless API integration for Developers</h2>
              <p>
                All you need is only one integration to connect to other
                identity verification systems. And when one API is down, be sure
                that whichever supporting API you’ve picked is ready to take
                over and give your users a smooth verification experience.
              </p>
              <button>Try Out Demo</button>
            </div>

            <div className={style.imagi}>
              <img src="scc1.png" alt="" />
            </div>
          </div>
        </section>
        <div>
          <footer className={style.footer}>
            <div className={style.first}>
              <img src="/os10.png" alt="" />
              <p>
                OneSecure is a platform that KYC compliance regulations are
                becoming more stringent as service digitization becomes more
                important.
              </p>
              <div className={style.social}>
                <FaFacebookF className={style.sIcon} />
                <FaTwitter className={style.sIcon} />
                <AiFillInstagram className={style.sIcon} />
              </div>
            </div>

            <div className={style.sec}>
              <div className={style.secCon}>
                <ul>
                  <p>Solution</p>
                  <li>Biometrics</li>
                  <li>Documents</li>
                  <li>Fraud Protect</li>
                </ul>
              </div>
              <div className={style.secCon}>
                <ul>
                  <p>Resources</p>
                  <li>API Docs</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div className={style.secCon}>
                <ul>
                  <p>Legal</p>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
