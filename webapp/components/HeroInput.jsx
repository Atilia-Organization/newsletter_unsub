import React from "react";

function HeroInput({ subscribeText, optional = false, children }) {
  return (
    <>
      <div className="px-1 flex w-full flex-col gap-3">
        <div className="join gap-4 flex flex-col md:flex-row">
          <div className="w-full">{children}</div>
          <button
            type="submit"
            className="!bg-purple-primary text-white px-4 py-2 rounded-md font-semibold join-item"
          >
            {subscribeText}
          </button>
        </div>
        {optional && (
          <p className="label text-sm">
            We respect your privacy. No spam, ever
          </p>
        )}
      </div>
    </>
  );
}
export default HeroInput;
