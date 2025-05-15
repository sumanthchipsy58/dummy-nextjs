'use client'
import React from 'react'
import Link from "next/link";
import styles from "./client.module.css";

const page = () => {
    return (
        <div className={styles.client_container}>
            <h1>Our Clients</h1>
            <p>
                We proudly serve a diverse range of clients from startups to enterprises,
                helping them grow with innovative digital solutions.
            </p>
            <Link href="/" className={styles.back_button}>
                ← Back to Home
            </Link>
        </div>
    )
}

export default page