import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import confetti from 'canvas-confetti';
import { FileUpload, Upload } from "lucide-react";

const SubmitCV = () => {
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          toast({
            title: "Success!",
            description: "Your CV has been uploaded successfully",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File selected",
        description: `${selectedFile.name} is ready to upload`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-light pt-32">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-6">Submit Your CV</h1>
              <p className="text-gray-600 mb-6">
                Upload your CV to be considered for exciting opportunities at G-Force Solutions.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-accent mb-4">CV Guidelines & Benefits</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• Professional format (PDF preferred)</li>
                  <li>• Clear contact information</li>
                  <li>• Detailed work experience</li>
                  <li>• Relevant qualifications</li>
                  <li>• Access to exclusive job opportunities</li>
                  <li>• Priority consideration for positions</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-primary mb-4">CV Generation Service</h2>
                <p className="text-gray-700 mb-4">
                  Need help creating a professional CV? Use our CV generation service for only R11.45.
                  Get a professionally formatted CV that stands out to employers.
                </p>
                <Button 
                  variant="outline"
                  className="bg-accent text-white hover:bg-accent/90"
                >
                  Generate Professional CV
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full"
                  />
                  <Button
                    onClick={handleUpload}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      "Uploading..."
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload CV
                      </>
                    )}
                  </Button>
                  {isUploading && (
                    <div className="w-full space-y-2">
                      <Progress value={uploadProgress} className="w-full" />
                      <p className="text-sm text-gray-600 text-center">
                        Uploading: {uploadProgress}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
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

export default SubmitCV;