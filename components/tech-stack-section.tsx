import { PersonStanding, PawPrint, Landmark, Bot, BrainCog, Globe } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import FadeInView from './animate-ui/fade-in-view';


const stack = [
   {
      name: "Animals",
      icon: <PawPrint className="h-6 w-6 text-primary" />,
      description: "Learn random cool facts about the animal we live amongst especially cute ones like doggos",
   },
   {
      name: "The Internet",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      description: "Quite literally the biggest discovery of the 21st century!",
   },
   {
      name: "History",
      icon: <Landmark className="h-6 w-6 text-sky-500" />,
      description: "'Those who don't know history are destined to repeat it. - Edmund Burke'",
   },
   {
      name: "Humans",
      icon: <PersonStanding className="h-6 w-6 text-primary" />,
      description: "So much to learn about one of the smartest species alive!",
   },
   {
      name: "Artifical Intelligence",
      icon: <BrainCog className="h-6 w-6 text-indigo-500" />,
      description: "Quite possibly the biggest advancement in the recent years.",
   },
   {
      name: "Robots",
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      description: "A little about the future...",
   },
]

export default function TechStackSection() {

   return (
      <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
         <FadeInView className="text-center space-y-4 pb-16 mx-auto max-w-4xl">
            <Badge className='px-4 py-1.5 text-sm font-medium'>What you Can Learn</Badge>
            <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
               Powered by Modern Technology--The Internet
            </h2>
            <p className="text-xl text-muted-foreground pt-1">
               Information Sourced by a Human
            </p>
         </FadeInView>

         <Card className="grid divide-x divide-y overflow-hidden rounded-3xl border border-card sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
            {stack.map((item, index) => (
               <FadeInView
                  key={index}
                  delay={0.1 * (index + 2)}
                  className="group relative transition-shadow duration-300 hover:z-[1] hover:shadow-2xl hover:shadow-primary"
               >
                  <div className="relative space-y-8 py-12 p-8">
                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                     </div>
                     <div className="space-y-2">
                        <h5 className="text-xl text-muted-foreground font-semibold transition group-hover:text-primary">
                           {item.name}
                        </h5>
                        <p className="text-muted-foreground">
                           {item.description}
                        </p>
                     </div>
                  </div>
               </FadeInView>
            ))}
         </Card>
      </section>
   )
}
