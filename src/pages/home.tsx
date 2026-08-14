import HeaderHome from "@/components/home/header";
import HomeContent from "@/components/home/homecontent";
import HomeSummaryCards from "@/components/home/sumarycards";


export default function Home() {
  return (
    <div className="h-full px-2">
      <HeaderHome />
      <HomeSummaryCards />
      <HomeContent />
    </div>
  );
}
