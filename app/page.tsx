import HomeV3 from "./home-v3/page";
import HomeMobile from "@/components/mobile/v2/HomeMobile";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomeV3 />
      </div>

      <div className="md:hidden">
        <HomeMobile />
      </div>
    </>
  );
}