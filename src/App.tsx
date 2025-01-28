import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './pages/Portfolio';
import SubmitCV from './pages/SubmitCV';
import About from './pages/About';
import Media from './pages/Media';
import Vacancies from './pages/Vacancies';
import { Toaster } from './components/ui/toaster';
import Chatbot from './components/Chatbot';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { useToast } from './components/ui/use-toast';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [lockEndTime, setLockEndTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const storedLockEndTime = localStorage.getItem('lockEndTime');
    
    if (storedLockEndTime) {
      const endTime = parseInt(storedLockEndTime);
      if (endTime > Date.now()) {
        setIsLocked(true);
        setLockEndTime(endTime);
      } else {
        localStorage.removeItem('lockEndTime');
      }
    }

    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthentication = () => {
    if (isLocked) {
      const remainingTime = Math.ceil((lockEndTime! - Date.now()) / 1000 / 60);
      toast({
        title: "Access Locked",
        description: `Please wait ${remainingTime} minutes or use the PIN code.`,
        variant: "destructive"
      });
      return;
    }

    if (password === '123321Eagi' || pin === '2580') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      toast({
        title: "Success",
        description: "Access granted!",
      });
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 2) { // Lock after 3 failed attempts
        const lockEndTime = Date.now() + 10 * 60 * 1000; // 10 minutes
        setIsLocked(true);
        setLockEndTime(lockEndTime);
        localStorage.setItem('lockEndTime', lockEndTime.toString());
        toast({
          title: "Access Locked",
          description: "Too many failed attempts. Please wait 10 minutes or use the PIN code.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid password or PIN",
          variant: "destructive"
        });
      }
    }
    setPassword('');
    setPin('');
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Dialog open={!isAuthenticated} modal>
          <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Enter Password or PIN</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <Button onClick={handleAuthentication}>
                Submit
              </Button>
              {isLocked && lockEndTime && (
                <p className="text-sm text-red-500">
                  Locked for {Math.ceil((lockEndTime - Date.now()) / 1000 / 60)} minutes
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/submit-cv" element={<SubmitCV />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
        <Toaster />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;