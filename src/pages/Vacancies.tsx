import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Vacancies = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-8">Latest Vacancies</h1>
          <p className="text-xl text-secondary mb-12">
            Follow our social media platforms for the latest job opportunities
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Twitter size={32} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Youtube size={32} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">KZN Office</h3>
            <div className="space-y-2 text-gray-600">
              <p>031 023 0487</p>
              <p>info@gforcesolutions.org.za</p>
              <p>Unit 10, Gillitts Centre,</p>
              <p>4 Clifton Road</p>
              <p>Gillitts, 3610</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Gauteng Office</h3>
            <div className="space-y-2 text-gray-600">
              <p>031 023 0487</p>
              <p>info@gforcesolutions.org.za</p>
              <p>435 Strauss Crescent</p>
              <p>Wadeville, Germiston 07</p>
              <p>1422</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Pretoria Office</h3>
            <div className="space-y-2 text-gray-600">
              <p>031 023 0487</p>
              <p>info@gforcesolutions.org.za</p>
              <p>1204 Twin Palms</p>
              <p>Olympus, Pretoria East</p>
              <p>0184</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;