// web/app/donate/page.tsx
import Image from "next/image";
import { FiCreditCard, FiDollarSign, FiMail, FiRepeat } from "react-icons/fi";

export default function DonatePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic7.jpg"
            alt="Support our ministry"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give Generously</h1>
          <p className="text-xl">Support the mission of Center for Renewal</p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ways to Give</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: <FiCreditCard className="text-3xl text-blue-500" />,
                  title: "Online Giving",
                  description: "Secure one-time or recurring donations",
                  action: "Give Online Now"
                },
                {
                  icon: <FiDollarSign className="text-3xl text-blue-500" />,
                  title: "Sunday Offering",
                  description: "Give during our worship services",
                  action: "Service Times"
                },
                {
                  icon: <FiMail className="text-3xl text-blue-500" />,
                  title: "Bank Transfer",
                  description: "Direct transfers to our account",
                  action: "Get Bank Details"
                },
                {
                  icon: <FiRepeat className="text-3xl text-blue-500" />,
                  title: "Standing Order",
                  description: "Set up regular automatic payments",
                  action: "Learn How"
                }
              ].map((option, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="flex justify-center mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{option.description}</p>
                  <div className="text-center">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                      {option.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Online Donation Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Online Donation</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="amount" className="block mb-2 font-medium">Amount (£)</label>
                    <input
                      type="number"
                      id="amount"
                      min="1"
                      step="1"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="10.00"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="frequency" className="block mb-2 font-medium">Frequency</label>
                    <select
                      id="frequency"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>One-time</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Annually</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="fund" className="block mb-2 font-medium">Designated Fund</label>
                  <select
                    id="fund"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>General Fund</option>
                    <option>Missions</option>
                    <option>Building Fund</option>
                    <option>Benevolence</option>
                    <option>Youth Ministry</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      I agree to the terms and conditions and authorize Center for Renewal 
                      to process this donation.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <FiCreditCard className="mr-2" /> Process Donation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Principles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Biblical Giving</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                verse: "2 Corinthians 9:7",
                text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              },
              {
                verse: "Proverbs 3:9",
                text: "Honor the LORD with your wealth, with the firstfruits of all your crops."
              },
              {
                verse: "Malachi 3:10",
                text: "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{principle.verse}</h3>
                <p className="text-gray-600 dark:text-gray-300 italic">"{principle.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Financial Transparency</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              We are committed to wise stewardship of the resources entrusted to us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                View Annual Report
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                Financial Policies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}