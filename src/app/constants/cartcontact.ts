import { Mail, MapPin, MessageCircle } from "lucide-react";




export const cartcontact  = [
    {
      icon: Mail ,
      title: 'Email Us',
      description: 'Our support team is ready to assist.',
      contact: 'contact@sousstires.com',
    },
     {
      icon: MessageCircle,
      title: 'Call Us',
      description: 'Available Monday to Friday, 8am - 5pm.',
      contact: '+1 (555) 123-4567',
    },
     {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Drop by our office for a chat.',
      contact: '101 Web Lane, San Francisco, CA',
    },
    
] as const 