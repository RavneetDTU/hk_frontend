// store/testimonials.ts
import { create } from "zustand";
import testimonialImag1 from "@/assets/uifaces-popular-image.jpg";
import testimonialImag2 from "@/assets/uifaces-popular-image (1).jpg";
import testimonialImag3 from "@/assets/uifaces-popular-image (2).jpg";
import { StaticImageData } from "next/image";

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string | StaticImageData; 
  message: string;
  stars: number;
}

interface TestimonialStore {
  testimonials: Testimonial[];
  fetchTestimonials: () => void;
}

interface StoreState {
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  subscribeNewsletter: () => Promise<void>;
}

export const useTestimonialStore = create<TestimonialStore>((set) => ({
  testimonials: [],
  fetchTestimonials: () => {
    set({
      testimonials: [
        {
          id: "1",
          name: "Lena",
          avatar: testimonialImag1,
          message:
            "Insightix transformed my business with a sleek, user-friendly sales template. Highly recommend!",
          stars: 5,
        },
        {
          id: "2",
          name: "Finn Allen",
          avatar: testimonialImag2,
          message:
            "It`s user-friendly and has significantly improved our sales analytics",
          stars: 5,
        },
        {
          id: "3",
          name: "Jasper dams",
          avatar: testimonialImag3,
          message:
            "Our sales team has found it easy to navigate, and our analytics are now more robust than ever. Highly recommended!",
          stars: 5,
        },
        {
          id: "4",
          name: "Maxim",
          avatar: testimonialImag1,
          message:
            "Insightix delivered an exceptional analytics template that streamlined our sales process. Very impressed!",
          stars: 5,
        },
        {
          id: "5",
          name: "Daniel Smith",
          avatar: testimonialImag2,
          message:
            "Insightix provided a fantastic template that exceeded my expectations. Highly functional and beautifully designed!",
          stars: 5,
        },
        {
          id: "6",
          name: "Sophie",
          avatar: testimonialImag3,
          message:
            "The sales template is intuitive and has boosted our engagement.",
          stars: 5,
        },
        {
          id: "7",
          name: "Tobias Luce",
          avatar: testimonialImag1,
          message:
            "The Insightix sales template is incredibly functional and visually appealing. Great for our needs!",
          stars: 5,
        },
        {
          id: "8",
          name: "Clara Smith",
          avatar: testimonialImag2,
          message:
            "The Insightix template elevated our analytics capabilities. Easy to use and visually stunning!",
          stars: 5,
        },
        {
          id: "9",
          name: "Mark Alex",
          avatar: testimonialImag3,
          message:
            "The positive feedback from clients has been overwhelming. I`m thoroughly impressed!",
          stars: 5,
        },
      ],
    });
  },
}));

export const useStore = create<StoreState>((set) => ({
  newsletterEmail: '',
  setNewsletterEmail: (email) => set({ newsletterEmail: email }),
  subscribeNewsletter: async () => {
    const email = useStore.getState().newsletterEmail;
    console.log('Subscribing:', email);
    set({ newsletterEmail: '' });
  },
}));
