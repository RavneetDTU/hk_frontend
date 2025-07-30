import { workPlan } from "../types/workTypes";
import workPlanImg1 from "@/assets/how-it-works/HOW-IT-WORK-BANNER-2-556x469.jpg";
import workPlanImg2 from "@/assets/how-it-works/HOW-IT-WORK-BANNER-3-556x469.jpg";
import workPlanImg3 from "@/assets/how-it-works/HOW-IT-WORK-BANNER-4-556x469.jpg";




export const workPlanData: workPlan[] = [
    {
      id: 1,
      imageUrl: workPlanImg1,
        header: 'Personalized coaching for your unique goals',
      content: 'Your dedicated health coach designs a transformation plan that is personalized to your health needs and targets the root cause of your weight gain.'
    },
    {
      id: 2,
      imageUrl: workPlanImg2,
      header: 'Taking it one day at a time',
      content: 'Your healthiclick plan prescribes simple changes in your meals and habits that are easily achievable and lead to long-term weight loss outcomes.'
    },
    {
      id: 3,
      imageUrl: workPlanImg3,
      header: 'Backed by behavioral science',
      content: 'Our coaches work with you to help you form routines and habits in your day to day that are backed by the latest in behavioral sciences and proven to your weight loss journey simpler.'
    },

  ];