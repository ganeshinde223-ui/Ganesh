import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${darker ? 'bg-brand-black' : 'bg-brand-gray'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
