
import { useEffect } from "react";
import NavigationHeader from "@/components/NavigationHeader";
import SOSButton from "@/components/SOSButton";
import SafetyCard from "@/components/SafetyCard";

const Index = () => {
  useEffect(() => {
    // Request location permission
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location access granted:", position);
        },
        (error) => {
          console.error("Location access denied:", error);
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-teal-50">
      <NavigationHeader />
      <main className="container mx-auto px-4 pt-24 pb-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Safety Companion</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your personal safety assistant. Access emergency features, share your location,
              and stay connected with your trusted contacts.
            </p>
          </section>

          <div className="flex flex-col items-center justify-center mb-12">
            <SOSButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
            <SafetyCard
              title="Safe Zone Status"
              description="Current location safety rating"
              icon="shield"
              stats="Safe Area"
            />
            <SafetyCard
              title="Nearby Reports"
              description="Community safety reports in your area"
              icon="map"
              stats="2 Recent"
            />
            <SafetyCard
              title="Trusted Contacts"
              description="Emergency contacts who can help"
              icon="users"
              stats="5 Active"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
