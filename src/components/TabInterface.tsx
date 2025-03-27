
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import { Users, DumbbellIcon } from "lucide-react";

interface TabInterfaceProps {
  athleteContent: ReactNode;
  creatorContent: ReactNode;
}

export const TabInterface = ({ athleteContent, creatorContent }: TabInterfaceProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="athletes" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="inline-flex bg-secondary/80 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger 
              value="athletes" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-200"
            >
              <DumbbellIcon className="w-5 h-5" />
              <span className="font-medium">Athletes</span>
            </TabsTrigger>
            <TabsTrigger 
              value="creators" 
              className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Creators</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="athletes" className="mt-0 animate-in fade-in-50 duration-300">
          {athleteContent}
        </TabsContent>
        
        <TabsContent value="creators" className="mt-0 animate-in fade-in-50 duration-300">
          {creatorContent}
        </TabsContent>
      </Tabs>
    </div>
  );
};
