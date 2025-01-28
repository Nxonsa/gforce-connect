import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response based on keywords
    let botResponse = '';
    const lowercaseInput = inputText.toLowerCase();

    if (lowercaseInput.includes('job') || lowercaseInput.includes('career') || lowercaseInput.includes('position')) {
      botResponse = "We connect exceptional talent with outstanding opportunities. Visit our 'Find Jobs' section to explore current openings.";
    } else if (lowercaseInput.includes('cv') || lowercaseInput.includes('resume')) {
      botResponse = "You can submit your CV through our 'Submit CV' button on the homepage. We'll review it and match you with suitable positions.";
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach')) {
      botResponse = "You can reach us at: support@g-force.com or call us at +1 (555) 123-4567. We're here to help!";
    } else {
      botResponse = "I apologize, but I'm not sure about that. Please contact our support team at support@g-force.com or call +1 (555) 123-4567 for more detailed information.";
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
          className="rounded-full p-4 bg-accent hover:bg-accent/90 text-white shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-[500px] flex flex-col animate-scale-in">
          <div className="p-4 bg-accent text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">G-Force Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent/90 text-white"
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
                      ? 'bg-accent text-white'
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
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button
                onClick={handleSend}
                className="bg-accent hover:bg-accent/90 text-white"
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