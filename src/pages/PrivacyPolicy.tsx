
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">Last updated: April 17, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Introduction</h2>
          <p>Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us when using our services, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information</li>
            <li>Account details</li>
            <li>Usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">How We Use Your Information</h2>
          <p>We use the collected information for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and maintaining our services</li>
            <li>Improving user experience</li>
            <li>Communication with users</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
