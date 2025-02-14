"use client";

import MyHeader from "@/components/ui/header";

import ImageGrid from "@/app/util/ImageGrid";
import {cardImages} from "@/app/items/CardImages";

import { MyTypewriter } from "@/app/util/Mytypewriter";
import { SkillsCarousel } from "@/app/util/carousels";
import Footer from "@/app/util/footer";

import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
      <MyHeader />
      
      <MyTypewriter />

      <main className="relative flex flex-col justify-start bg-slate-50 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-7">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-5 text-gray-500">
            My Projects
            <span className="text-xl text-blue-500 mx-5">
              <Link href="/projects">View All</Link>
            </span>
          </h2>
      <ImageGrid images={cardImages.slice(0,3)} />
      </div>
      </div>
    </main>


      <SkillsCarousel />

    </div>
    </div>
    <Footer />
    </>
  )
}