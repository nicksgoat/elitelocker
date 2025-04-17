
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center mb-6">
        <Shield className="mr-3 text-primary" size={32} />
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      </div>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p>
            At our company, we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, 
            such as when you use our services or interact with our platform.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to comply with legal obligations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
