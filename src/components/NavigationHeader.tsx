
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const NavigationHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-rose-500 to-teal-500 bg-clip-text text-transparent">
            Safety Companion
          </h1>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Safety Map</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="ghost">Profile</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
