import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';

const Portfolio = () => {
  const { toast } = useToast();
  const [viewProgress, setViewProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isViewing, setIsViewing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleView = async () => {
    setIsViewing(true);
    setViewProgress(0);

    const interval = setInterval(() => {
      setViewProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsViewing(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          toast({
            title: "Success!",
            description: "Portfolio loaded successfully",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          toast({
            title: "Success!",
            description: "Portfolio downloaded successfully",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-light pt-32">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">Our Portfolio</h1>
              <p className="text-gray-600 mb-6">
                View or download our comprehensive portfolio showcasing our work and achievements.
              </p>
              
              <div className="space-y-6">
                <div>
                  <Button
                    onClick={handleView}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    disabled={isViewing}
                  >
                    View Portfolio
                  </Button>
                  {isViewing && (
                    <div className="mt-2 space-y-2">
                      <Progress value={viewProgress} className="w-full" />
                      <p className="text-sm text-gray-600">Loading: {viewProgress}%</p>
                    </div>
                  )}
                </div>

                <div>
                  <Button
                    onClick={handleDownload}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isDownloading}
                  >
                    Download PDF
                  </Button>
                  {isDownloading && (
                    <div className="mt-2 space-y-2">
                      <Progress value={downloadProgress} className="w-full" />
                      <p className="text-sm text-gray-600">Downloading: {downloadProgress}%</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/6d73bc2f-88e3-4d61-9587-8d5908c5767a.png"
                alt="Portfolio Preview"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default Portfolio;