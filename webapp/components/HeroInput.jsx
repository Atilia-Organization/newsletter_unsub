import React from "react";

function HeroInput({ subscribeText, optional = false, children }) {
  const childrenArray = React.Children.toArray(children);
  return (
    <>
      <div className="px-1 flex w-full flex-col gap-3">
        <div className="join gap-4 flex flex-col md:flex-row">
          <div className="w-full">{childrenArray[0]}</div>
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
        {childrenArray[1]}
      </div>
    </>
  );
}
export default HeroInput;
