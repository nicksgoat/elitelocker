import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListOrdered, Activity, Dumbbell } from "lucide-react";
interface TopNavTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
export const TopNavTabs: React.FC<TopNavTabsProps> = ({
  activeTab,
  setActiveTab
}) => {
  return <div className="bg-black/80 backdrop-blur-lg border-b border-[#222] sticky top-16 z-10 w-full">
      <div className="container mx-auto py-[11px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center w-full bg-transparent py-4">
            <TabsTrigger value="featured" className="flex items-center gap-2 px-6 py-2 data-[state=active]:text-primary transition-all duration-200 bg-black">
              <Activity className="w-4 h-4" />
              <span className="font-medium">Featured</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center gap-2 px-6 py-2 data-[state=active]:text-primary transition-all duration-200 bg-inherit">
              <Dumbbell className="w-4 h-4" />
              <span className="font-medium">Exercises</span>
            </TabsTrigger>
            <TabsTrigger value="programs" className="flex items-center gap-2 px-6 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-200">
              <ListOrdered className="w-4 h-4" />
              <span className="font-medium">Programs</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>;
};