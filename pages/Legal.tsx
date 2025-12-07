import React from 'react';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="pt-10 pb-20 container mx-auto px-4 max-w-4xl">
    <h1 className="text-3xl md:text-4xl font-black uppercase italic mb-8">{title}</h1>
    <div className="prose prose-invert prose-neon max-w-none text-gray-300">
      {children}
    </div>
  </div>
);

export const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p>Last updated: January 2024</p>
      <h3>1. Information We Collect</h3>
      <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us.</p>
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to process transactions, send you order confirmations, and improve our services.</p>
      <h3>3. Data Security</h3>
      <p>We implement appropriate security measures to protect your personal information.</p>
    </LegalLayout>
  );
};

export const Terms = () => {
  return (
    <LegalLayout title="Terms of Service">
      <p>Last updated: January 2024</p>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these Terms of Service.</p>
      <h3>2. Use of Site</h3>
      <p>You may use our site only for lawful purposes and in accordance with these Terms.</p>
      <h3>3. Product Information</h3>
      <p>We strive to display product colors and images accurately, but we cannot guarantee your monitor's display will be accurate.</p>
    </LegalLayout>
  );
};