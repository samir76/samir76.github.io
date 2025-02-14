"use client";

// import MasonryCardsOnImages  from "@/app/util/cardsonimages";
import MyHeader from "@/components/ui/header";
import Photoalbum from "@/app/util/photoalbum";
import {awash} from "@/app/items/farmguide"; 
import Footer from "@/app/util/footer";
import TheBreadcrumbs from "@/app/util/thebreadcrumbs";

export default function farmguide() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-7">
      <MyHeader/>
      <TheBreadcrumbs/>

      <div className="mt-10 mb-5">
        <h2 className="font-extrabold text-3xl text-gray-600 mb-5">WEBSITE SHOWCASE (AWASH RESTAURANT)</h2>
        <p className="text-balance text-gray-500 text-lg mt-4 mb-8">This is the website I did for Awash restaurant. <br/>
        Feel free to have a look! <br/>
        <span className="font-bold italic">(Click on one of the images to View in Slideshow format or in Full Screen.)</span></p>
      </div>
        <Photoalbum photos={awash} />
    </div>
    </div>
<Footer />
</>
  );
}