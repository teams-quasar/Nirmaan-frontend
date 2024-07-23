/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../Header/Header";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <main className="pr-8 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto max-w-full bg-violet-500 bg-opacity-20 h-[1024px] w-[1000px] max-md:mt-6" />
        </section>
        <section className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-8 max-md:mt-10 max-md:max-w-full">
            <Header />
            <h1 className="mt-24 text-2xl font-semibold tracking-normal leading-8 text-black max-md:mt-10 max-md:max-w-full">
              Join Us
            </h1>
            <p className="mt-3 text-sm leading-5 text-slate-500 max-md:max-w-full">
              Sign up using your email and setup a password
            </p>
            <SignUpForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUpPage;
