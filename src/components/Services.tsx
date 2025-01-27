import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  User, 
  Projector, 
  Users, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-12 h-12 mb-4 text-primary" />,
      title: "Job Readiness",
      description: "Job readiness training programs that prepare participants to get, keep and excel at a new job."
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-primary" />,
      title: "Recruitment",
      description: "Shortlisting, selecting and appointing suitable candidates for jobs."
    },
    {
      icon: <GraduationCap className="w-12 h-12 mb-4 text-primary" />,
      title: "Skills & Training",
      description: "Developing skills and training workforces to be the best they can."
    },
    {
      icon: <DollarSign className="w-12 h-12 mb-4 text-primary" />,
      title: "Debt Collections",
      description: "Get your money back on time."
    },
    {
      icon: <User className="w-12 h-12 mb-4 text-primary" />,
      title: "Personology",
      description: "Let us improve your way of thinking."
    },
    {
      icon: <Projector className="w-12 h-12 mb-4 text-primary" />,
      title: "Projects",
      description: "Let us guide you with your next project."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-primary" />,
      title: "Labour Outsourcing",
      description: "Outsourcing the best workers for your business."
    },
    {
      icon: <Shield className="w-12 h-12 mb-4 text-primary" />,
      title: "IR Specialist",
      description: "Let us be your IR Specialist."
    }
  ];

  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;