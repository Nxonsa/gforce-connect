import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      image: "/lovable-uploads/dca0523c-609e-4036-92f7-954139916630.png",
      name: "Team Member 1",
      position: "CEO"
    },
    {
      image: "/lovable-uploads/784287f0-dced-42e8-87d0-000613e8bf0d.png",
      name: "Team Member 2",
      position: "HR Director"
    },
    {
      image: "/lovable-uploads/dca0523c-609e-4036-92f7-954139916630.png",
      name: "Team Member 3",
      position: "Operations Manager"
    },
    {
      image: "/lovable-uploads/784287f0-dced-42e8-87d0-000613e8bf0d.png",
      name: "Team Member 4",
      position: "HR Consultant"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-dark mb-12">Who we are</h2>
            <p className="text-lg text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              G-Force Employment Solutions is a South African registered Human Resources Firm specialising in placements, 
              labour outsourcing, payroll administration, human talent development and industrial relations. Our management 
              team comprises of leading minds in the HR field with 40 years combined experience.
            </p>
            <p className="text-lg text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              Our team has a deep understanding of the South African socio-economic landscape. We adapt world best practices 
              to the local environment and in some cases provide leading innovative solutions.
            </p>
            <p className="text-lg text-secondary max-w-4xl mx-auto leading-relaxed">
              We believe in spending ample time and resources in understanding a client's goals, challenges and operating 
              environment. This approach helps us prescribe or apply effective solutions that improve efficiency, productivity 
              and reduce costs.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-dark mb-4">Our Team</h2>
            <p className="text-xl text-center text-secondary mb-12">Meet Our Experts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-secondary">{member.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-accent mr-2" />
                <h3 className="text-xl font-semibold text-primary">KZN Office</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Unit 10, Gillitts Centre,</p>
                <p>4 Clifton Road</p>
                <p>Gillitts, 3610</p>
                <p className="flex items-center mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  031 023 0487
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@gforcesolutions.org.za
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-accent mr-2" />
                <h3 className="text-xl font-semibold text-primary">Gauteng Office</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>435 Strauss Crescent</p>
                <p>Wadeville, Germiston 07</p>
                <p>1422</p>
                <p className="flex items-center mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  031 023 0487
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@gforcesolutions.org.za
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-accent mr-2" />
                <h3 className="text-xl font-semibold text-primary">Pretoria Office</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>1204 Twin Palms</p>
                <p>Olympus, Pretoria East</p>
                <p>0184</p>
                <p className="flex items-center mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  031 023 0487
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@gforcesolutions.org.za
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;