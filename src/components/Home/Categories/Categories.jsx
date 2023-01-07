import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="mx-auto max-w-[1350px] px-4 py-8">
      <div>
        <span className="inline-block h-1 w-12 bg-red-700"></span>
        <h2 className="mt-1 text-lg font-extrabold uppercase tracking-wide lg:text-xl text-[#FF497C] flex items-center gap-x-3">
          <span className="w-10 h-10 border-4 border-red-700 shadow-inner shadow-slate-50 flex items-center justify-center bg-[#FF497C] rounded-full">
            <BiCategory className="inline-block text-red-50 animate-pulse"></BiCategory>
          </span>
          Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-8 gap-6 text-center">
        {categories.map((category) => (
          <Link
            className=""
            to={`/categories/${category._id}`}
            key={category._id}
          >
            <div className="group h-24 border-2 rounded hover:scale-105 hover:duration-500 hover:border-gray-700 hover:rotate-y-90">
              <img
                className="h-full object-contain mx-auto group-hover:scale-50 duration-500"
                src={category.logo}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
