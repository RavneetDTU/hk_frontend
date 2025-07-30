import { FAQItem } from "./FAQItem";

export type Category =
  | "Weight Loss"
  | "Weight Gain"
  | "Fitness"
  | "Disease Prevention"
  | "Plan & Pricing"
  | "Contact Us";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: Record<Category, FAQ[]> = {
  "Weight Loss": [
    {
      question: "Are There Any Weight Loss Tips For Women?",
      answer: "Yes! Women can focus on strength training to boost metabolism, prioritize protein intake, manage stress levels, and ensure adequate sleep. Hormonal balance plays a key role in weight management for women."
    },
    {
      question: "What Are The Best Foods For Weight Loss?",
      answer: "The best foods include lean proteins (chicken, fish, tofu), leafy greens, whole grains, nuts in moderation, and fruits with low glycemic index. Foods high in fiber and water content help you feel full longer."
    },
    {
      question: "Is Apple Cider Vinegar Good For Weight Loss?",
      answer: "Apple cider vinegar may help with weight loss by promoting fullness and reducing blood sugar spikes, but it`s not a magic solution. Use 1-2 tablespoons diluted in water before meals, but consult your doctor first."
    },
    {
      question: "How Can You Reduce Face Fat In A Week?",
      answer: "While spot reduction isn`t possible, reducing overall body fat through a calorie deficit, staying hydrated, limiting sodium intake, and doing facial exercises can help slim your face appearance."
    },
    {
      question: "Which Indian Drinks Are Helpful To Burn Fat?",
      answer: "Try green tea, jeera water (cumin), ajwain water (carom seeds), ginger lemon tea, or buttermilk. These drinks boost metabolism and aid digestion when combined with a healthy diet."
    }
  ],
  "Weight Gain": [
    {
      question: "How To Gain Weight Healthily?",
      answer: "Focus on calorie-dense nutritious foods like nuts, avocados, whole grains, and lean proteins. Eat frequent meals, incorporate strength training, and track your progress to ensure steady, healthy weight gain."
    },
    {
      question: "What Are The Best Foods For Bulking?",
      answer: "Opt for complex carbs (sweet potatoes, brown rice), healthy fats (olive oil, nuts), and high-quality proteins (chicken, fish, eggs). Dairy products and legumes are also excellent for clean bulking."
    }
  ],
  "Fitness": [
    {
      question: "What Is The Best Workout Routine?",
      answer: "A balanced routine includes strength training 3-4x/week, cardio 2-3x/week, flexibility exercises, and rest days. Tailor it to your goals - whether it`s building muscle, endurance, or general fitness."
    },
    {
      question: "Should You Exercise Daily?",
      answer: "Light activity daily is great, but intense workouts require rest days. Aim for 3-5 intense sessions weekly with active recovery (walking, yoga) on other days to prevent overtraining and injuries."
    }
  ],
  "Disease Prevention": [
    {
      question: "How Can Diet Prevent Diabetes?",
      answer: "Focus on whole foods, fiber-rich carbs, healthy fats, and lean proteins. Limit processed sugars and refined carbs. Maintain a healthy weight and include regular physical activity in your routine."
    },
    {
      question: "What Are Immunity Boosting Foods?",
      answer: "Citrus fruits, red bell peppers, broccoli, garlic, ginger, spinach, yogurt, almonds, turmeric, green tea, and papaya are excellent for immune support due to their vitamin and antioxidant content."
    }
  ],
  "Plan & Pricing": [
    {
      question: "What Plans Do You Offer?",
      answer: "We offer Basic (meal plans), Premium (meal + workout plans), and Platinum (personalized coaching) packages. All plans include progress tracking and community support with varying levels of personalization."
    },
    {
      question: "Is There A Free Trial?",
      answer: "Yes! We offer a 7-day free trial for our Basic plan so you can experience our platform. No credit card required. After the trial, you can choose to continue with any of our paid plans."
    }
  ],
  "Contact Us": [
    {
      question: "How To Reach Support?",
      answer: "You can email us at support@healthapp.com, call our helpline at +1 (800) 123-4567, or use the live chat feature on our website. Our team is available 9AM-9PM EST, 7 days a week."
    },
    {
      question: "Where Are You Located?",
      answer: "Our headquarters are in San Francisco, CA, but we serve clients worldwide through our digital platform. All our consultations and coaching sessions are conducted online for your convenience."
    }
  ]
};

type Props = {
  category: Category;
};

export const FAQContent = ({ category }: Props) => {
  return (
    <div className="mt-6 md:mt-10 space-y-4">
      {faqs[category].map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};