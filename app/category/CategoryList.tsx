"use client";
import useCategory from "../hooks/useCategory";

const CategoryList = () => {
  const { data: categories } = useCategory();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
