import { StaticImageData } from "next/image";

// types/successStories.ts
export type SuccessStory = {
    id: number;
    imageUrl: string | StaticImageData;
    content: string;
  };
  
