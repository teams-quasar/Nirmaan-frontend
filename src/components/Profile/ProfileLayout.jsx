
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProfileForm from "./ProfileForm";

function ProfileLayout() {
  return (
    <div className="flex gap-5 bg-neutral-100 max-md:flex-wrap">
      <Sidebar />
      <main className="flex flex-col grow shrink-0 self-start mt-10 basis-0 w-fit max-md:max-w-full">
        <Header />
        <ProfileForm />
      </main>
    </div>
  );
}

export default ProfileLayout;
