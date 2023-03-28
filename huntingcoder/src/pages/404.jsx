import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Navbar from '../../components/Navbar'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div id="notfound">
      <Navbar />
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you looking for might have been removed had its name changed
          or it temporarily unavailable.
        </p>
        <div className="home_btn" style={{ marginTop: "20px" }} onClick={() => router.push('/')}>
          {/* <Link href="/">Back To Homepage</Link> */}
          Back To Homepage
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
