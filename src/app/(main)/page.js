import Banner from "@/component/Banner";
import PetAdopt from "@/component/PetAdopt";
import Success from "@/component/Success";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <PetAdopt></PetAdopt>
     <Success></Success>
    </div>
  );
}
