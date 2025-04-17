
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleGoBack} 
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Shield className="mr-3 text-primary" size={32} />
          <h1 className="text-3xl font-bold tracking-tight">Elite Locker Privacy Policy</h1>
        </div>
      </div>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <p className="mb-4 text-gray-400">Effective Date: April 2025</p>
          
          <p className="mb-4">
            Elite Locker ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how your personal information is collected, used, 
            and shared when you use our website ("Site") and mobile applications ("Apps").
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <h3 className="text-lg font-medium mb-2">Personal Information:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment details</li>
            <li>Profile information (photos, bio, athletic data)</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">Usage Data:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Workout and performance data</li>
            <li>Activity logs within the platform</li>
            <li>Device information (IP address, browser type, operating system)</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide and improve our services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>Communicate updates, offers, or essential notifications</li>
            <li>Enhance platform safety and security</li>
            <li>Personalize user experience</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Sharing Your Information</h2>
          <p className="mb-4">We do not sell your personal information. We may share your data with:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Third-party service providers (payment processors, analytics tools)</li>
            <li>Affiliates or partners for marketing purposes (only with explicit consent)</li>
            <li>Law enforcement or legal obligations as required by law</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability</li>
          </ul>
          <p>To exercise your rights, please contact us at the email below.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Cookies</h2>
          <p>
            Our site uses cookies to improve user experience. You can manage 
            cookie preferences through your browser settings.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
          <p>
            Elite Locker is not intended for children under the age of 13. 
            We do not knowingly collect personal information from children.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy periodically. Changes will be 
            posted on this page, and we encourage you to review this policy regularly.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, 
            please contact us at: <br />
            <a 
              href="mailto:EliteLockerteam@elitelocker.io" 
              className="text-primary hover:underline"
            >
              EliteLockerteam@elitelocker.io
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

