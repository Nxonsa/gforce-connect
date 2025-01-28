import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Portfolio = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "CV Submitted",
      description: "Your CV will be processed. Generation fee: R11.45",
    });
  };

  return (
    <div className="min-h-screen bg-light p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-primary mb-6">Submit Your CV</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">Professional CV Generation Service</h2>
            <p className="text-gray-600 mb-4">
              We help job seekers reduce the cost of creating professional CVs. Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Standardized one-page CV template</li>
              <li>Professional formatting</li>
              <li>Easy download options</li>
              <li>Affordable rate of only R11.45</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input required type="text" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input required type="email" placeholder="Your email address" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Summary
              </label>
              <Textarea
                required
                placeholder="Brief professional summary (max 250 words)"
                className="h-32"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CV
              </label>
              <Input required type="file" accept=".pdf,.doc,.docx" />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              Submit CV (R11.45)
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us - KZN</h3>
            <div className="space-y-2 text-gray-600">
              <p>031 023 0487</p>
              <p>info@gforcesolutions.org.za</p>
              <p>Unit 10, Gillitts Centre,</p>
              <p>4 Clifton Road</p>
              <p>Gillitts, 3610</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us - Gauteng</h3>
            <div className="space-y-2 text-gray-600">
              <p>031 023 0487</p>
              <p>info@gforcesolutions.org.za</p>
              <p>435 Strauss Crescent</p>
              <p>Wadeville, Germiston 07</p>
              <p>1422</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Us - Pretoria</h3>
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