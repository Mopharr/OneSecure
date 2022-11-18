import style from "../styles/kuba.module.css";
import Head from "next/head";
import { RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { TbFaceId } from "react-icons/tb";
import { useState } from "react";
import { useRouter } from "next/router";
import { isJSDocNullableType } from "typescript";

const Kverify3 = () => {
  const [image, setImage] = useState({
    imageVal: "",
  });

  const handleChange = ({ target: { name, value } }: any) => {
    setImage({ ...image, [name]: value });
  };
  const router = useRouter();

  const handleSubmit = () => {
    image.imageVal !== "" ? router.push("/kubaverify4") : null;
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
              <div className={style.inputCap}>
                <div className={style.text}>
                  <p>Upload your selfie</p>
                  <RiArrowUpSLine className={style.textIcon} />
                </div>
                <div className={style.inner}>
                  <input
                    required
                    type="file"
                    accept="image/*"
                    name="imageVal"
                    value={image.imageVal}
                    onChange={handleChange}
                  />
                  <TbFaceId className={style.capIcon} />
                </div>
              </div>
              {image.imageVal === "" ? (
                <p className={style.imgErr}>Upload Image to continue</p>
              ) : (
                <p className={style.imgSuc}>Success uploaded</p>
              )}

              {image.imageVal === "" ? null : (
                <button type="submit">
                  <Link href='/kubaverify4'>Continue</Link>
                </button>
              )}
            </form>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/gr.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Kverify3;
