import React from 'react';

const Media = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Our Latest Events In The Media
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/a9525c06-1b39-4324-afae-361483ac486c.png"
            alt="Media Event"
            className="w-full rounded-lg shadow-xl mb-8 hover:scale-105 transition-transform duration-300"
          />
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

export default Media;