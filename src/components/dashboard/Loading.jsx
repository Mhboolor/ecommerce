import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <span
        className="h-12 w-12 rounded-full flex border-t-4 border-t-btn-blue border-r-4 border-r-transparent animate-spin-slow
            after:contents-[' '] after:absolute after:left-0 after:top-0 after:w-12 after:h-12 after:rounded-full after:border-l-4 after:border-l-[#FF3D00] after:border-b-4 after:border-b-transparent 
            after:animate-spin-slow-reverse"
      ></span>
      <p>درحال دریافت اطلاعات ...</p>
    </div>
  );
}

export default Loading;
