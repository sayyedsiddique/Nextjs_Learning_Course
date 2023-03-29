import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

export const getStaticProps = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()


  return {
    props: {
      data
    }
  }
}

const Blog = ({data}) => {
  console.log("data ", data)

  return (
    <div>
      <Navbar />
      {data && data.slice(0, 5).map((item) => {
        return <div key={item.id}>
          <h3>{item.id}</h3>
          <Link href={`/blogpost/${item.id}`}><h2>{item.title}</h2></Link>
        </div>
      })}
    </div>
  );
};

export default Blog;
