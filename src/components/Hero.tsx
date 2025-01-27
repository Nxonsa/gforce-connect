import Earth3D from './Earth3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      <Earth3D />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-white animate-fade-in hover:scale-105 transition-transform duration-300">
            Welcome to G-Force Employment Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white hover:text-accent transition-colors duration-300">
            Your Gateway to Career Excellence
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-slide-up delay-100 hover:text-white transition-opacity duration-300">
            Connecting exceptional talent with outstanding opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <button className="px-8 py-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              Find Jobs
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-accent transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              Submit CV
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none animate-fade-in" />
    </div>
  );
};

export default Hero;