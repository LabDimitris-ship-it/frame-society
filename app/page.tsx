import HomeV2 from "./home-v2/page";
import HomeMobile from "@/components/mobile/v2/HomeMobile";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <HomeV2 />
      </div>

      <div className="md:hidden">
        <HomeMobile />
      </div>
    </>
  );
}