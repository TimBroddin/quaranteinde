import React, { useEffect, useState } from "react";
import Router from "next/router";
import Countdown from "react-countdown";
import Confetti from "react-confetti";
import Head from "next/head";
import { strings } from "../strings";
import { useAnalytics } from "../useAnalytics";

const getString = (str, lang) => {
  return strings[str][lang];
};

const createRenderer = lang => {
  return ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <>
          <Confetti />
        </>
      );
    } else {
      // Render a countdown
      return (
        <>
          <style jsx>{`
            .text {
              font-size: 50px;
              text-align: center;
            }
          `}</style>
          <div className="text">
            <strong>{days}</strong>&nbsp;
            {getString(days === 1 ? "day" : "days", lang)}{" "}
            <strong>{hours}</strong>&nbsp;
            {getString(hours === 1 ? "hour" : "hours", lang)}{" "}
            <strong>{minutes}</strong>&nbsp;
            {getString(minutes === 1 ? "minute" : "minutes", lang)}{" "}
            <strong>{seconds}</strong>&nbsp;
            {getString(seconds === 1 ? "second" : "seconds", lang)}
          </div>
        </>
      );
    }
  };
};

const Index = ({ language }) => {
  useAnalytics();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  });

  //return <Countdown date={new Date(2020, 3, 20)} renderer={renderer} />;
  return (
    <>
      <Head>
        <title>{getString("title", language)}</title>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/gyl2uxf.css"
        ></link>
        <link rel="icon" type="image/png" href="/fav.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            language === "nl"
              ? `https://quaranteinde.be`
              : "https://finquarantaine.be"
          }
        />
        <meta property="og:title" content={getString("title", language)} />
        <meta
          property="og:description"
          content={getString("description", language)}
        />
        <meta
          property="og:image"
          content={
            language === "nl"
              ? `https://quaranteinde.be/og.png`
              : "https://finquarantaine.be/og.png"
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={getString("title", language)} />
        <meta
          property="og:locale"
          content={language === "nl" ? "nl_BE" : "fr_BE"}
        />

        <meta
          name="description"
          content={getString("description", language)}
        ></meta>
        <link
          rel="alternate"
          href={`${
            language === "nl"
              ? "https://finquarantain.be"
              : "https://quaranteinde.be"
          }`}
          hrefLang={`${language === "nl" ? "fr" : "nl"}`}
        ></link>
      </Head>
      <style jsx>{`
        .container {
          margin: 0 auto;
          margin-top: 100px;
          width: 80vw;
          text-align: center;

          font-family: letter-gothic-std, monospace;

          font-weight: 400;

          font-style: normal;
        }

        .credit {
          background-color: black;
          color: white;
          display: inline-block;
          padding: 3px;
          text-align: left;
        }

        .disclaimer {
          margin-top: 100px;
        }

        .credit a {
          color: white;
        }
      `}</style>
      <div className="container">
        {loaded ? (
          <Countdown
            date={new Date(2020, 3, 20)}
            renderer={createRenderer(language)}
          />
        ) : null}
        <p>{getString("heading", language)}</p>

        <p className="credit">{getString("credit", language)}</p>
        <p className="disclaimer">{getString("disclaimer", language)}</p>
      </div>
    </>
  );
};

Index.getInitialProps = async ({ res, req }) => {
  if (req && res) {
    console.log(req.headers.host);
    if (req.headers.host.indexOf("finquarantaine.be") !== -1) {
      return {
        language: "fr"
      };
    } else {
      return {
        language: "nl"
      };
    }
  } else {
    return { language: "nl" };
  }
};

export default Index;
