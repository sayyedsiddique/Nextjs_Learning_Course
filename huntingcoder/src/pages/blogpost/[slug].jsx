import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";

export const getStaticPaths = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
}

const Slug = () => {
  const router = useRouter();
  const { pageno } = router.query;
  console.log(pageno);
  return (
    <div>
      <Navbar />
      <h1>Hello Dynamic</h1>
    </div>
  );
};

export default Slug;
