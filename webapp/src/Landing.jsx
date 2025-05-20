import { useState } from "react";
import "./App.css";
import Atilia_white from "./assets/imgs/Atilia_white.png";

function Landing() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    if (email) {
      console.log("Email submitted: ", email);
      setStep(2);

      fetch(import.meta.env.VITE_REMOVE_EMAIL_FROM_SHEETS, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: (`Email=${email}`)
      }).then(res=>res.text()).then(data=>{
        alert(data)
      }).catch(error=>console.log(error))
    }
  };

  return (
    <>
      <div className=" w-screen min-h-screen bg-gradient-to-t from-blue-secondary to-blue-primary flex flex-col">
        {/* Navbar */}
        <div className={`navbar px-6 py-4 md:justify-start ${step === 1 ? "justify-center": "justify-start"}`}>
          {step === 1 ? (
              <img className="md:w-20 w-24" src={Atilia_white} alt="Logo" />
          ) : (
            <>
            <a onClick={() => setStep(1)} className="cursor-pointer">
              <svg
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              </a>
            </>
          )}
        </div>

        {/* Hero */}
        <div className="flex-1 flex items-center justify-center">
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl p-5 md:p-3">
                <div className="overflow-hidden">
                  <div
                    className={`flex transition delay-150 duration-300 ease-in-out`}
                    style={{
                      transform: `translateX(${step === 1 ? "0%" : "-50%"})`,
                      width: "200%",
                    }}
                  >
                    <div>
                      <p className="py-6 text:lg md:font-semibold md:text-xl">
                        Enter your email to unsubscribe to Atilia Newsletter.
                      </p>
                    </div>
                  </div>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!e.currentTarget.checkValidity()) return;
                    handleEmailSubmit();
                  }}
                >
                  <fieldset className="fieldset overflow-hidden">
                      <label className="input validator w-full bg-white join-item">
                        <svg
                          className="h-[1em] opacity-50 text-gray-700"
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
                          className="text-gray-700"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="mail@gmail.com"
                          required
                        />
                      </label>

                      <button type="submit" className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" > Unsubscribe </button>
                  </fieldset>
                </form>
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
