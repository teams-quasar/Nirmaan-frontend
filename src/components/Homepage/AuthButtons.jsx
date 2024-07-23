
import React from "react";

function AuthButtons() {
  return (
    <div className="flex gap-5 leading-6">
      <button className="justify-center px-4 py-2 bg-white rounded-md border border-solid border-slate-500 text-slate-900">
        Login
      </button>
      <button className="justify-center px-4 py-2 text-white rounded-md bg-slate-900">
        Register
      </button>
    </div>
  );
}

export default AuthButtons;
