import { ProfileCard } from "./ProfileCard";
import { SideContent } from "./SideContent";

export function Hero() {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen max-w-7xl mx-auto px-6 lg:px-0">
        <div className="lg:w-1/3 flex-shrink-0">
          <ProfileCard />
        </div>
  
        <div className="lg:w-2/3 overflow-y-auto">
          <SideContent />
        </div>
      </div>
    );
}
  
