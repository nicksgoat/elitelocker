
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>
            Welcome to Elite Locker's Privacy Policy. Your privacy is critically important to us. This Privacy Policy document contains types of information that is collected and recorded by Elite Locker and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Register for our waitlist</li>
            <li>Create an account</li>
            <li>Use our services</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Notify you about changes to our services</li>
            <li>Provide customer support</li>
            <li>Monitor the usage of our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
