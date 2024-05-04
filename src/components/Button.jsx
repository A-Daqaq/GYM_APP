import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 rounded-md border-[2px]  border-black 400 border-solid WhiteShadow duration-200 mx-auto"
    >
      <p className="mx-auto">{text}</p>
    </button>
  );
}
