import React from "react";
import { cn } from "../../lib/utils";
import {
  TrendingUp,
  DollarSign,
  PieChart,
  CreditCard,
  Briefcase,
  Building,
} from "lucide-react";

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "investing":
      return <TrendingUp className="h-5 w-5 text-green-600" />;
    case "loans":
      return <DollarSign className="h-5 w-5 text-blue-600" />;
    case "insurance":
      return <PieChart className="h-5 w-5 text-purple-600" />;
    case "banking":
      return <Building className="h-5 w-5 text-gray-600" />;
    case "retirement":
      return <Briefcase className="h-5 w-5 text-orange-600" />;
    case "credit":
      return <CreditCard className="h-5 w-5 text-red-600" />;
    default:
      return <DollarSign className="h-5 w-5 text-blue-600" />;
  }
};

export const BentoGrid = ({ className, articles }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {articles.map((article, index) => (
        <BentoGridItem
          key={index}
          title={article.title}
          description={article.description}
          category={article.category}
          image={article.image}
        />
      ))}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  category,
  image,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-md dark:shadow-none p-6 dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="relative">
          <img
            src={image}
            className="w-full h-40 object-cover rounded-lg shadow-sm"
            alt={title}
          />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
            {getCategoryIcon(category)}
          </div>
        </div>
        <div className="font-sans font-bold text-gray-800 dark:text-gray-200 text-lg mb-2 mt-4">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-600 text-sm dark:text-gray-300 line-clamp-2">
          {description}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="font-sans font-semibold text-yellow-600 dark:text-yellow-400 text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full">
            {category}
          </div>
          <button className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:underline focus:outline-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
