import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center md:py-24 py-5 bg-slate-200">
      <div className="container md:mx-auto bg-white rounded md:w-1/2 mx-2 overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-4xl text-blue-700 py-5 text-center mb-2">What are Terms and Conditions Agreements? </div>
          <p className="text-gray-700 text-xl">
            A Terms and Conditions agreement acts as a legal contract between
            you (the company) and the user. It's where you maintain your rights
            to exclude users from your app in the event that they abuse your
            website/app, set out the rules for using your service and note other
            important details and disclaimers. Having a Terms and Conditions
            agreement is completely optional. No laws require you to have one.
            Not even the super-strict and wide-reaching General Data Protection
            Regulation (GDPR). Your Terms and Conditions agreement will be
            uniquely yours. While some clauses are standard and commonly seen in
            pretty much every Terms and Conditions agreement, it's up to you to
            set the rules and guidelines that the user must agree to. Terms and
            Conditions agreements are also known as Terms of Service or Terms of
            Use agreements. These terms are interchangeable, practically
            speaking. Check out our Terms and Conditions FAQ article for more
            helpful insight into these important agreements. You can use this
            agreement anywhere, regardless of what platform your business
            operates on: Websites WordPress blogs or blogs on any kind of
            platform: Joomla!, Drupal etc. Ecommerce stores Mobile apps Facebook
            apps Desktop apps SaaS apps Desktop apps usually have an EULA
            (End-User License Agreement) instead of a Terms and Conditions
            agreement, but your business can use both. Mobile apps are
            increasingly using Terms and Conditions along with an EULA if the
            mobile app has an online service component, i.e. it connects with a
            server.
          </p>
        </div>
        <div className="px-6 text-xl font-semibold text-center py-5">
          <Link to={'/signup'} className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-5 rounded-md">Go Back to SignUp Page</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
