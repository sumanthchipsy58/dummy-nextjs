// app/page.tsx or pages/index.tsx depending on your routing structure
import styles from "./page.module.css"; // This imports the CSS module
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <Link href="/contact" prefetch={true}>contact</Link>
      <Link href="/about">about</Link>
      <Link href="/wishlist">wish list</Link>
      <Link href="/client-page">client page</Link>
    </div>
  );
}
