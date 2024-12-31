import { ProfileCard } from "./ProfileCard";
import { SideContent } from "./SideContent";

export function Hero() {
    return(
        <div className="flex">
            <ProfileCard/>
            <SideContent/>
        </div>
    )
}