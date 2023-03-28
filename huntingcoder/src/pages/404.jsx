import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const NotFoundPage = () => {
  return (
    <div id="notfound">
      <nav className={styles.mainNav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found!</h2>
        <p>
          The page you looking for might have been removed had its name changed
          or it temporarily unavailable.
        </p>
        <a href="#">Back To Homepage</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
