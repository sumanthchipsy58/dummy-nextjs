// app/wishlist/page.tsx
import Link from "next/link";
import styles from "./wishlist.module.css";

export default function WishlistPage() {
    return (
        <div className={styles.wishlist_container}>
            <h1>Your Wishlist</h1>
            <ul className={styles.wishlist_items}>
                <li>🧥 Leather Jacket</li>
                <li>👟 Nike Air Max</li>
                <li>⌚ Smart Watch</li>
                <li>🎧 Noise Cancelling Headphones</li>
            </ul>
            <Link href="/" className={styles.back_button}>
                ← Back to Home
            </Link>
        </div>
    );
}
