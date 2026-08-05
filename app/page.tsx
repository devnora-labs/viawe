import { Hero } from "@/components/sections/Hero";
import { Routes } from "@/components/sections/Routes";
import { Partner } from "@/components/sections/Partner";
import { Pathway } from "@/components/sections/Pathway";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Routes />
      <Partner />
      <Pathway />
      <Approach />
      <Contact />
    </>
  );
}
