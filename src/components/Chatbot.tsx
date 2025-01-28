import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputText, setInputText] = useState('');

  const contactInfo = {
    kzn: `KZN Office:
    031 023 0487
    info@gforcesolutions.org.za
    Unit 10, Gillitts Centre,
    4 Clifton Road
    Gillitts, 3610`,
    gauteng: `Gauteng Office:
    031 023 0487
    info@gforcesolutions.org.za
    435 Strauss Crescent
    Wadeville, Germiston 07
    1422`,
    pretoria: `Pretoria Office:
    031 023 0487
    info@gforcesolutions.org.za
    1204 Twin Palms
    Olympus, Pretoria East
    0184`
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Enhanced bot response logic
    let botResponse = '';
    const lowercaseInput = inputText.toLowerCase();

    if (lowercaseInput.includes('cv') || lowercaseInput.includes('resume')) {
      botResponse = "You can generate a professional CV for only R11.45! Our service helps reduce the cost of creating CVs while ensuring high quality. Visit our 'Submit CV' section to get started. We provide a one-page template that's ATS-friendly and easy to customize.";
    } 
    else if (lowercaseInput.includes('job') || lowercaseInput.includes('career') || lowercaseInput.includes('position') || lowercaseInput.includes('work')) {
      botResponse = "We connect exceptional talent with outstanding opportunities. Visit our 'Find Jobs' section to explore current openings. We work with leading companies across various industries.";
    }
    else if (lowercaseInput.includes('kzn') || lowercaseInput.includes('durban')) {
      botResponse = contactInfo.kzn;
    }
    else if (lowercaseInput.includes('gauteng') || lowercaseInput.includes('johannesburg')) {
      botResponse = contactInfo.gauteng;
    }
    else if (lowercaseInput.includes('pretoria')) {
      botResponse = contactInfo.pretoria;
    }
    else if (lowercaseInput.includes('contact') || lowercaseInput.includes('office') || lowercaseInput.includes('location')) {
      botResponse = "We have offices in KZN, Gauteng, and Pretoria. Which location would you like to know more about?";
    }
    else if (lowercaseInput.includes('cost') || lowercaseInput.includes('price') || lowercaseInput.includes('fee')) {
      botResponse = "Our CV generation service costs only R11.45. This includes a professional template and formatting that helps you stand out to employers.";
    }
    else if (lowercaseInput.includes('template') || lowercaseInput.includes('format')) {
      botResponse = "We use a standardized one-page CV template that's proven to be effective. It includes sections for your personal details, work experience, education, and skills - all optimized for ATS systems.";
    }
    else {
      botResponse = "I apologize, but I'm not sure about that. Please contact our support team at info@gforcesolutions.org.za or visit one of our offices:\n\nKZN: 031 023 0487\nGauteng: 031 023 0487\nPretoria: 031 023 0487";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 bg-[#74b72e] hover:bg-[#74b72e]/90 text-white shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-[500px] flex flex-col animate-scale-in">
          <div className="p-4 bg-[#74b72e] text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">G-Force Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#74b72e]/90 text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-[#74b72e] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#74b72e]"
              />
              <Button
                onClick={handleSend}
                className="bg-[#74b72e] hover:bg-[#74b72e]/90 text-white"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;