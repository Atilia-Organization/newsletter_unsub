import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Atilia_white from "./assets/imgs/Atilia_white.png";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-screen min-h-screen bg-gradient-to-t from-blue-secondary to-blue-primary flex flex-col">
        {/* Navbar */}
        <div className="navbar px-6 py-4 md:justify-start justify-center">
          <img className="md:w-20 w-24" src={Atilia_white} alt="Logo" />
        </div>

        {/* Hero */}
        <div className="flex-1 flex items-center justify-center">
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl p-5 md:p-3">
                <p className="text-3xl md:text-5xl font-bold ">
                  <span className="text-purple-primary">Growth</span> Isn’t an
                  option,{" "}
                  <span className="text-purple-primary">It’s the mission.</span>
                </p>
                <p className="py-6 text:lg md:font-semibold md:text-xl">
                  Get exclusive early access to updates. Don’t miss your chance
                  to be part of something transformative.
                </p>
                <fieldset className="fieldset">
                  <div className="join gap-4 flex flex-col md:flex-row">
                    <div className="w-full">
                      <label className="input validator w-full bg-white join-item">
                        <svg
                          className="h-[1em] opacity-50 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </g>
                        </svg>
                        <input
                          className="text-gray-500"
                          type="email"
                          placeholder="mail@gmail.com"
                          required
                        />
                      </label>
                      <div className="validator-hint hidden">
                        Enter valid email address
                      </div>
                    </div>
                    <button className="!bg-purple-primary text-white px-4 py-2 rounded-md font-semibold join-item">
                      Subscribe
                    </button>
                  </div>
                  <p className="label text-sm">
                    We respect your privacy. No spam, ever
                  </p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer footer-center px-6 py-4">
          <div className="flex">
            <p className="text-white text-md">© Atilia 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
