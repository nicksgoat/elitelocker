
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import { DumbellIcon, Users } from "lucide-react";

interface TabInterfaceProps {
  athleteContent: ReactNode;
  creatorContent: ReactNode;
}

export const TabInterface = ({ athleteContent, creatorContent }: TabInterfaceProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="creators" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="inline-flex bg-secondary/80 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger 
              value="creators" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Creators</span>
            </TabsTrigger>
            <TabsTrigger 
              value="athletes" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <path d="M6 5v11"></path>
                <path d="M18 5v11"></path>
                <path d="M6 11h12"></path>
                <path d="M6 5h12"></path>
                <path d="M6 16h12"></path>
                <circle cx="6" cy="5" r="2"></circle>
                <circle cx="18" cy="5" r="2"></circle>
                <circle cx="6" cy="11" r="2"></circle>
                <circle cx="18" cy="11" r="2"></circle>
                <circle cx="6" cy="16" r="2"></circle>
                <circle cx="18" cy="16" r="2"></circle>
              </svg>
              <span className="font-medium">Athletes</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="creators" className="mt-0 animate-in fade-in-50 duration-300">
          {creatorContent}
        </TabsContent>
        
        <TabsContent value="athletes" className="mt-0 animate-in fade-in-50 duration-300">
          {athleteContent}
        </TabsContent>
      </Tabs>
    </div>
  );
};
