
import React from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import SelectField from "./SelectField";

const sidebarItems = [
  "Personal Information",
  "Account Details",
  "Payment Details",
  "Exam Screen",
  "Contact Us",
];

function ProfileForm() {
  return (
    <section className="pt-8 pr-14 pb-20 mt-28 bg-white rounded-3xl shadow-sm max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col text-base font-medium text-black max-md:mt-10">
            {sidebarItems.map((item, index) => (
              <div
                key={item}
                className={`justify-center items-start px-8 py-3.5 ${
                  index === 0 ? "bg-sky-100" : "bg-white"
                } rounded-none max-md:px-5`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>
        <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
          <form className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <InputField label="Student Name" placeholder="NAME OF CANDIDATE" />
            <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
              <SelectField label="Gender" options={["Gender"]} />
              <SelectField label="Date of Birth" options={["DD MONTH YYYY"]} />
            </div>
            <InputField
              label="Name of School / Organisation"
              placeholder="University Name, State"
            />
            <SelectField label="Highest Education" options={["Intermediate"]} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
