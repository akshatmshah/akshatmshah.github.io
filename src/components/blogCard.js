import React from "react";
import Link from "next/link";
import styles from "../styles/blogCard.module.css";

const BlogCard = ({ title, country, date, link }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <Link href={link} style={{ textDecoration: 'none' }} passHref>
        <div className={styles.blogCard}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{country}</p>
            </div>
            <div className={styles.date}>{formattedDate}</div>
          </div>
        </div>
    </Link>
  );
};

export default BlogCard;
