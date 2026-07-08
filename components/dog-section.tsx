"use client"

import Logo from "@/components/logo"
import Image from "next/image";
import { useEffect, useState } from "react"


export default function DogSection() {
        const [image, setImage] = useState("https://cdn4.thedogapi.com/optimized/8pr48PjzQD.jpg");
        const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getImage() {
        setLoading(true);
      const res = await fetch("/api/home");
      console.log(res)
      const data = await res.json();
      console.log(data.image)
      setImage(data.image);
      setLoading(false);
    }

    getImage();
  }, []);
  
   return (
      <div className="flex items-center justify-center min-h-screen">
         <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
               <div className="flex items-center">
                  <Logo />
               </div>
               <h3 className="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
                  Doggo Facts
               </h3>
               {loading ? <p>Loading...</p> : <Image alt="A doggo" src={image} width={500} height={500} />}
               
               
               
              
               

               
            </div>
         </div>
      </div>
   )
}
