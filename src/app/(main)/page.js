import AdoptPetSection from "@/component/AdoptPetSection";
import Banner from "@/component/Banner";
import PetAdopt from "@/component/PetAdopt";
import PetCareTips from "@/component/PetCareTips";
import Success from "@/component/Success";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <AdoptPetSection></AdoptPetSection>
     <PetAdopt></PetAdopt>
     <Success></Success>
     <PetCareTips></PetCareTips>
    </div>
  );
}
