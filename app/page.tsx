import { Hero } from "@/components/sections/Hero";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Partner } from "@/components/sections/Partner";
import { Pathway } from "@/components/sections/Pathway";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Partner />
      <Pathway />
      <Approach />
      <Contact />
    </>
  );
}
