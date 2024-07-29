
import React from "react";

function FormSection({ label, children }) {
  return (
    <div className="flex flex-col mt-8 max-md:max-w-full">
      <label className="text-base font-medium text-neutral-600 max-md:max-w-full">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormSection;
