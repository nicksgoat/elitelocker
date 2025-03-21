
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StickyMobileHeaderProps {
  children?: ReactNode;
  className?: string;
  tabs?: Array<{
    value: string;
    label: string;
  }>;
  defaultTab?: string;
  onTabChange?: (value: string) => void;
  headerContent?: ReactNode;
}

export function StickyMobileHeader({
  children,
  className,
  tabs,
  defaultTab,
  onTabChange,
  headerContent
}: StickyMobileHeaderProps) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: -10
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        duration: 0.2
      }} 
      className={cn("bg-black/90 backdrop-blur-lg border-b border-[#222]", className)}
    >
      {headerContent && (
        <div className="px-4 py-3">
          {headerContent}
        </div>
      )}
      
      {tabs && tabs.length > 0 && (
        <Tabs defaultValue={defaultTab || tabs[0].value} onValueChange={onTabChange} className="w-full">
          <TabsList className="justify-start px-4 bg-transparent py-0 my-[19px]">
            {tabs.map(tab => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value} 
                className="data-[state=active]:bg-primary/0 data-[state=active]:text-primary py-0 my-0 mx-0 px-[32px]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-2">{children}</div>
        </Tabs>
      )}
      
      {!tabs && children}
    </motion.div>
  );
}
