
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";

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
    role: "",
    username: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState<"available" | "unavailable" | "checking" | "empty" | "error">("empty");
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name?.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone?.trim()) {
      errors.phone = "Phone number is required";
    }
    
    if (formData.username?.trim() && usernameStatus !== "available") {
      errors.username = "Please enter an available username";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const checkUsernameAvailability = async (username: string) => {
    if (!username.trim()) {
      setUsernameStatus("empty");
      return;
    }
    
    setUsernameStatus("checking");
    
    try {
      const { data, error } = await supabase.rpc('is_username_available', { username });
      
      if (error) {
        console.error("Error checking username availability:", error);
        setUsernameStatus("error");
        return;
      }
      
      setUsernameStatus(data ? "available" : "unavailable");
    } catch (error) {
      console.error("Exception checking username availability:", error);
      setUsernameStatus("error");
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value.trim();
    setFormData({
      ...formData,
      username
    });
    
    // Debounce the availability check
    const timeoutId = setTimeout(() => {
      checkUsernameAvailability(username);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Check if email already exists in waitlist
      const { data: existingEmails, error: checkError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', formData.email);
        
      if (checkError) {
        console.error("Error checking for existing email:", checkError);
        throw checkError;
      }
        
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
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: formData.email,
            username: formData.username || null,
            metadata: {
              phone: formData.phone,
              role: formData.role
            }
          }
        ]);

      if (insertError) {
        console.error("Error inserting to waitlist:", insertError);
        throw insertError;
      }

      console.log("Successfully added to waitlist:", formData.email);
      
      toast({
        title: "Success!",
        description: "You've been added to the waitlist."
      });
      
      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        username: ""
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

  // Render username availability indicator
  const renderUsernameStatus = () => {
    if (usernameStatus === "empty" || !formData.username) {
      return null;
    }
    
    if (usernameStatus === "checking") {
      return <Loader2 className="h-4 w-4 animate-spin text-yellow-500 ml-2" />;
    }
    
    if (usernameStatus === "available") {
      return (
        <div className="flex items-center text-green-500 text-xs mt-1">
          <Check className="h-3 w-3 mr-1" />
          Username available
        </div>
      );
    }
    
    if (usernameStatus === "unavailable") {
      return (
        <div className="flex items-center text-red-500 text-xs mt-1">
          <AlertCircle className="h-3 w-3 mr-1" />
          Username already taken
        </div>
      );
    }

    return null;
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
            <Label htmlFor="name" className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </Label>
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
              className={`text-black bg-gray-50 ${validationErrors.name ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {validationErrors.name && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </Label>
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
              className={`text-black bg-gray-50 ${validationErrors.email ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone number <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              value={formData.phone} 
              onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} 
              required
              className={`text-black bg-zinc-50 ${validationErrors.phone ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {validationErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
            )}
          </div>
          <div>
            <Label htmlFor="username" className="block text-sm font-medium mb-1">
              Reserve username <span className="text-gray-500">(Optional)</span>
            </Label>
            <div className="flex items-center">
              <Input 
                id="username" 
                type="text" 
                placeholder="Choose a username" 
                value={formData.username} 
                onChange={handleUsernameChange}
                className={`text-black bg-zinc-50 ${validationErrors.username ? 'border-red-500' : ''}`}
                disabled={isSubmitting}
              />
              {usernameStatus === "checking" && (
                <Loader2 className="h-4 w-4 animate-spin text-gray-500 ml-2" />
              )}
            </div>
            {renderUsernameStatus()}
            {validationErrors.username && (
              <p className="text-red-500 text-xs mt-1">{validationErrors.username}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">Reserve your username now to claim it when we launch!</p>
          </div>
          <div>
            <Label htmlFor="role" className="block text-sm font-medium mb-1">
              Your role <span className="text-gray-500">(Optional)</span>
            </Label>
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
