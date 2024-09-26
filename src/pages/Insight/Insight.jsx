import React, { useState, useEffect } from "react";
import { BentoGrid } from "../../components/ui/bento-grid";
import ReusableHero from "../../components/Hero/ReusableHero";
import Footer from "../../components/Footer/Footer";
import {
  ChevronRight,
  TrendingUp,
  DollarSign,
  PieChart,
  CreditCard,
  Briefcase,
  Building,
  ArrowRight,
} from "lucide-react";
import investing from "../../assets/images/investing.jpg";
import investing2 from "../../assets/images/investing2.jpg";
import insurance from "../../assets/images/insurance.jpg";
import loans from "../../assets/images/loans.jpg";
import loans2 from "../../assets/images/loans2.png";
import banking from "../../assets/images/Banking.jpg";
import retirement from "../../assets/images/retirement.jpg";
import credit from "../../assets/images/credit.jpg";

const articles = [
  {
    id: 1,
    title: "The Future of Personal Loans",
    description:
      "Discover how personal loans are evolving and what this means for your financial future.",
    category: "Loans",
    image: loans,
  },
  {
    id: 2,
    title: "Investing in 2023: A Comprehensive Guide",
    description:
      "Learn the best strategies for investing in 2023 to maximize your returns.",
    category: "Investing",
    image: investing,
  },
  {
    id: 3,
    title: "Understanding Life Insurance Policies",
    description:
      "A detailed guide to understanding different types of life insurance policies and choosing the right one for you.",
    category: "Insurance",
    image: insurance,
  },
  {
    id: 4,
    title: "The Benefits of Online Banking",
    description:
      "Explore the advantages of using online banking platforms for managing your finances.",
    category: "Banking",
    image: banking,
  },
  {
    id: 5,
    title: "Planning for Retirement: What You Need to Know",
    description:
      "Essential tips and strategies for planning a comfortable retirement.",
    category: "Retirement",
    image: retirement,
  },
  {
    id: 6,
    title: "Unlocking the Potential of Credit Cards",
    description:
      "How to make the most of your credit card benefits and avoid common pitfalls.",
    category: "Credit",
    image: credit,
  },
  {
    id: 7,
    title: "Navigating the Stock Market: Beginner's Guide",
    description:
      "A comprehensive introduction to the stock market for novice investors.",
    category: "Investing",
    image: investing2,
  },
  {
    id: 8,
    title: "Demystifying Mortgage Options",
    description:
      "Understanding different types of mortgages and choosing the right one for your home purchase.",
    category: "Loans",
    image: loans2,
  },
];

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "investing":
      return <TrendingUp className="h-6 w-6 text-green-600" />;
    case "loans":
      return <DollarSign className="h-6 w-6 text-blue-600" />;
    case "insurance":
      return <PieChart className="h-6 w-6 text-purple-600" />;
    case "banking":
      return <Building className="h-6 w-6 text-gray-600" />;
    case "retirement":
      return <Briefcase className="h-6 w-6 text-orange-600" />;
    case "credit":
      return <CreditCard className="h-6 w-6 text-red-600" />;
    default:
      return <DollarSign className="h-6 w-6 text-blue-600" />;
  }
};

const Insight = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [trendingArticles, setTrendingArticles] = useState([]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    setFeaturedArticle(articles[randomIndex]);

    const trending = articles.sort(() => 0.5 - Math.random()).slice(0, 3);
    setTrendingArticles(trending);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 font-playfair">
      <ReusableHero
        title="Financial Frontier"
        subText="Where Wealth Meets Wisdom"
      />

      <main className="container mx-auto px-4 py-12">
        <h2 className=" text-5xl font-bold  text-center text-black mb-8">
          Insights on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">
            {" "}
            Financial Services
          </span>
        </h2>

        {featuredArticle && (
          <div className="mb-16 max-w-5xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="flex  flex-col md:flex-row items-center">
              <div className="relative w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                  {getCategoryIcon(featuredArticle.category)}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative inline-block text-center">
                  <div className="absolute inset-0 bg-yellow-300 transform -skew-x-12"></div>
                  <span className="relative z-10 inline-block text-gray-600 text-sm font-semibold px-3 py-1 rounded-full ">
                    Featured Insight
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {featuredArticle.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {featuredArticle.description}
                </p>
                <button className="group inline-flex items-center rounded-lg  bg-gradient-to-r from-yellow-600 to-purple-600  px-6 py-3 text-lg font-semibold text-white hover:bg-yellow-300 transition-colors duration-300">
                  Read full article
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Trending Topics
        </h3>

        <div className="grid  grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 mb-16">
          {trendingArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {getCategoryIcon(article.category)}
                  <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {article.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {article.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>
                <button className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-semibold hover:text-purple-800 dark:hover:purple-300 transition-colors duration-300">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Latest Financial Insights
        </h3>

        <BentoGrid articles={articles} className="mb-16" />

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
            Financial Tip of the Day
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6">
            "Start investing early and consistently. The power of compound
            interest can significantly grow your wealth over time."
          </p>
          <div className="text-center">
            <button className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Explore Investment Strategies
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Stay Informed with Our Newsletter
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest financial insights, tips,
            and exclusive content delivered straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Insight;
