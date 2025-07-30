import { useStore } from '@/store/useStore';

export const Newsletter = () => {
  const { newsletterEmail, setNewsletterEmail, subscribeNewsletter } = useStore();

  return (
    <div className="bg-indigo-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Subscribe to our Newsletter</h3>
      <p className="text-gray-600 mb-4">Stay up to date</p>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="name@email.com"
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
        />
        <button
          onClick={subscribeNewsletter}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        By subscribing you agree to our privacy and policy
      </p>
    </div>
  );
};