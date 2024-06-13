import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden max-w-[1920px] mx-auto">
        <Header/>
        <Footer />
      </div>
    </>
  );
}
