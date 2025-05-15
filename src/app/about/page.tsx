// app/about/page.tsx
import Link from "next/link";
import styles from "./about.module.css";

export default function page() {
  return (
    <div className={styles.about_container}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! Were passionate about building user-friendly web experiences using modern technologies like React, Next.js, and more.
      </p>
      <Link href="/" className={styles.back_button}>
        ← Back to Home
      </Link>
    </div>
  );
}
