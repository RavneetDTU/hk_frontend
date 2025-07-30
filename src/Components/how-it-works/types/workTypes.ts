import { StaticImageData } from "next/image";

// types/successStories.ts
export type workPlan = {
    id: number;
    imageUrl: string | StaticImageData;
    header: string;
    content: string;
  };
  
