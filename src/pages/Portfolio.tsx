import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Download, Eye } from 'lucide-react';

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
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleDownload = () => {
    simulateDownload();
    // Replace with actual PDF URL
    const pdfUrl = '/path-to-your-pdf.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'g-force-portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Replace with actual PDF URL
    window.open('/path-to-your-pdf.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-dark mb-12">Our Portfolio</h1>
          
          <div className="max-w-2xl mx-auto bg-light p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">Company Portfolio</h2>
              <p className="text-secondary mb-6">
                Download our comprehensive portfolio to learn more about our services and success stories.
              </p>
              
              {isDownloading && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-accent h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleView}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-dark transition-colors"
                  disabled={isDownloading}
                >
                  <Eye size={20} />
                  View PDF
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
                  disabled={isDownloading}
                >
                  <Download size={20} />
                  Download PDF
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