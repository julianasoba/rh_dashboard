import HomeSummaryCards from "@/pages/home/components/sumarycards";
import HeaderHome from "./components/header";
import HomeContent from "./components/homecontent";

export default function Home() {
  return (
    <div className="h-full px-2">
      <HeaderHome />
      <HomeSummaryCards />
      <HomeContent />
    </div>
  );
}
