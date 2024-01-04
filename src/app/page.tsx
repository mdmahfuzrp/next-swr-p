import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Banner from "@/components/home/Banner";
import TopCategory from "@/components/home/TopCategory";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Banner />
      <TopCategory />
    </main>
  );
}
