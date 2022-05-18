import "./AboutUs.scss";
import config from "../config.json";
import { FaPlus } from "react-icons/fa";

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url;
    }
  };

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}/icon-pwamap.svg`} alt="" />
          </div>
          <div className="logo">長泉町公園地図アプリ</div>
        </div>

        <p>長泉町公園地図アプリ</p>
        <p>本アプリでは以下を利用しています。</p>
        <p>
          <a href=" https://geolonia.com/pressrelease/2022/05/17/pwamap.html">
            Geolonia PWAマップ
          </a>
          <a href="https://opendata.pref.shizuoka.jp/dataset/8595.html">
            ふじのくに オープンデータカタログ
          </a>
        </p>

        {config.form_url ? (
          <>
            <h2>データの更新について</h2>
            <p>
              このアプリのデータを更新するには下の「 +
              」ボタンを押してフォームに必要な情報を入力してください。
            </p>
            <div className="goto-form">
              <button>
                <FaPlus color="#FFFFFF" onClick={clickHandler} />
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Content;
