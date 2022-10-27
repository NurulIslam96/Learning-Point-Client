import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const ProfileInfo = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-slate-100 py-24">
      <div className="container md:w-1/3 w-full mx-auto overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 flex justify-between sm:px-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {user?.displayName}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and Information.
            </p>
          </div>
          <img src={user?.photoURL} className="h-32 w-32 rounded-full" alt="" />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user?.displayName}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user?.phoneNumber ? user.phoneNumber : "019977*****"}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {user?.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Hi I am {user?.displayName}. I am a Front End Developer. More
                Information Incoming.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
