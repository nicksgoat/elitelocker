import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
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
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Success!",
      description: "You've been added to the waitlist."
    });
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: ""
    });
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
            <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required className="text-black bg-gray-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required className="text-black bg-gray-50" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone number <span className="text-gray-500">(Optional for Launch Updates)</span>
            </label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} className="text-black bg-zinc-50" />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Your role <span className="text-gray-500">(Optional)</span>
            </label>
            <select id="role" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-black bg-white" value={formData.role} onChange={e => setFormData({
            ...formData,
            role: e.target.value
          })}>
              <option value="">Select your role</option>
              <option value="athlete">Athlete</option>
              <option value="trainer">Trainer</option>
              <option value="coach">Coach</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <button type="submit" className="w-full text-white py-3 rounded-md font-semibold transition-colors bg-zinc-950 hover:bg-zinc-800">
            Join the Waitlist
          </button>
        </form>
      </DialogContent>
    </Dialog>;
}