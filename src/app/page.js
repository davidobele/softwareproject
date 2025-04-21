"use client";
import { useEffect, useRef } from "react";
import "./styles/home.css";
import "./styles/background.css";
import "./styles/explore.css";
import * as ICONS from "./svg";
import Link from "next/link";

export default function Page() {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="text-container">
        <header>
          <button>About</button>
          <button>Login</button>
        </header>
        <main>
          <div className="one">
            <div className="words">
              <h1>Life's Hard</h1>
              <h1>Your Money Shouldn't Be</h1>
            </div>
            <div className="features">
              <div className="features-inner">
                <span>
                  <ICONS.Money />
                  <h1>Monitor your Spending</h1>
                </span>
                <span>
                  <ICONS.Stocks />
                  <h1>Track your Portfolio</h1>
                </span>
                <span>
                  <ICONS.Crypto />
                  <h1>Updates on Cryptocurrencies</h1>
                </span>
                <span>
                  <ICONS.Plan />
                  <h1>Budget</h1>
                </span>
                <span>
                  <ICONS.Custom />
                  <h1>Customize your Experience</h1>
                </span>
                <span>
                  <ICONS.Money />
                  <h1>Monitor your Spending</h1>
                </span>
                <span>
                  <ICONS.Stocks />
                  <h1>Track your Portfolio</h1>
                </span>
                <span>
                  <ICONS.Crypto />
                  <h1>Updates on Cryptocurrencies</h1>
                </span>
                <span>
                  <ICONS.Plan />
                  <h1>Plan Ahead</h1>
                </span>
                <span>
                  <ICONS.Custom />
                  <h1>Customize your Experience</h1>
                </span>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="explore">
              <button className="fancy-button">
                <svg className="icon-arrow before">
                  <use href="#arrow"></use>
                </svg>
                <Link href="/login">
                  <span className="label">Get Started</span>
                </Link>
                <svg className="icon-arrow after">
                  <use href="#arrow"></use>
                </svg>
              </button>
              <svg style={{ display: "none" }}>
                <defs>
                  <symbol id="arrow" viewBox="0 0 35 15">
                    <title>Arrow</title>
                    <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z" />
                  </symbol>
                </defs>
              </svg>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interBubbleRef}></div>
        </div>
      </div>
    </>
  );
}
