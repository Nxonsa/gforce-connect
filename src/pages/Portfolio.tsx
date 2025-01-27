import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Download, Eye } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";

const Portfolio = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const simulateDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          toast({
            title: "Download Complete",
            description: "Your image has been downloaded successfully.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleDownload = () => {
    simulateDownload();
    const imageUrl = '/lovable-uploads/a1686a99-749a-46ea-8ee9-a0c44ec4ba78.png';
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'g-force-portfolio.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/lovable-uploads/a1686a99-749a-46ea-8ee9-a0c44ec4ba78.png', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-dark mb-12 animate-fade-in">Our Portfolio</h1>
          
          <div className="max-w-2xl mx-auto bg-light p-8 rounded-lg shadow-lg animate-scale-in hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a1686a99-749a-46ea-8ee9-a0c44ec4ba78.png"
                alt="G-Force Portfolio"
                className="w-full h-auto rounded-lg mb-6 animate-fade-in hover:shadow-xl transition-shadow duration-300"
              />
              
              {isDownloading && (
                <div className="mb-6 animate-fade-in">
                  <Progress value={downloadProgress} className="w-full h-2" />
                  <p className="text-sm text-secondary mt-2">
                    Downloading: {downloadProgress}%
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleView}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-dark transition-colors animate-slide-up"
                  disabled={isDownloading}
                >
                  <Eye size={20} className="animate-pulse" />
                  View Image
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors animate-slide-up"
                  disabled={isDownloading}
                >
                  <Download size={20} className="animate-pulse" />
                  Download Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;