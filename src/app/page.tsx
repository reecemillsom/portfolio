"use client";
import { Navbar } from "../../components/navbar/navbar";
import { Section } from "../../components/section/section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section id="about" />
      <Section id="projects" />
      <Section id="interests" />
    </>
  );
}
