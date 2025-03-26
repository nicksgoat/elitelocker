
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function WaitlistDialog({
  isOpen,
  onClose,
  title = "Join the Waitlist"
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Check if email already exists in waitlist
      const { data: existingEmails } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', formData.email);
        
      if (existingEmails && existingEmails.length > 0) {
        toast({
          title: "Already registered",
          description: "This email is already on our waitlist.",
          variant: "default"
        });
        setIsSubmitting(false);
        return;
      }

      // Insert into waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: formData.email,
            username: formData.name,
            metadata: {
              phone: formData.phone,
              role: formData.role
            }
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist."
      });
      
      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: ""
      });
      onClose();
    } catch (error) {
      console.error("Error saving to waitlist:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold flex items-center gap-2">
            {title} <span className="animate-float">🚀</span>
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-500">
          Get ahead of the competition. Secure your spot for early access and insider updates!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Enter your full name" 
              value={formData.name} 
              onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} 
              required 
              className="text-black bg-gray-50" 
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email address" 
              value={formData.email} 
              onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} 
              required 
              className="text-black bg-gray-50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone number <span className="text-gray-500">(Optional for Launch Updates)</span>
            </label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              value={formData.phone} 
              onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} 
              className="text-black bg-zinc-50"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Your role <span className="text-gray-500">(Optional)</span>
            </label>
            <select 
              id="role" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-black bg-white" 
              value={formData.role} 
              onChange={e => setFormData({
                ...formData,
                role: e.target.value
              })}
              disabled={isSubmitting}
            >
              <option value="">Select your role</option>
              <option value="athlete">Athlete</option>
              <option value="trainer">Trainer</option>
              <option value="coach">Coach</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <Button 
            type="submit" 
            className="w-full text-white py-3 rounded-md font-semibold transition-colors bg-zinc-950 hover:bg-zinc-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>;
}
