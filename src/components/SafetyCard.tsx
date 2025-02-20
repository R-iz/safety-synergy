
import { Shield, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SafetyCardProps {
  title: string;
  description: string;
  icon: "shield" | "map" | "users";
  stats?: string;
}

const SafetyCard = ({ title, description, icon, stats }: SafetyCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "shield":
        return <Shield className="w-5 h-5 text-teal-500" />;
      case "map":
        return <MapPin className="w-5 h-5 text-rose-500" />;
      case "users":
        return <Users className="w-5 h-5 text-teal-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SafetyCard;
