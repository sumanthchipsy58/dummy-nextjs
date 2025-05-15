import Link from 'next/link';
import React from 'react'

const page = () => {
    const styles = {
        container: {
            maxWidth: '600px',
            margin: '80px auto',
            padding: '40px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        heading: {
            fontSize: '32px',
            color: '#007BFF',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '18px',
            lineHeight: '1.6',
            margin: '10px 0',
        },
        goback_btn: {
            padding: '8px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px'
        }
    };
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.paragraph}>📍 Address: 123 Main Street, Bengaluru, India</p>
            <p style={styles.paragraph}>📞 Phone: +91 9876543210</p>
            <p style={styles.paragraph}>✉️ Email: contact@example.com</p>
            <Link href={'/'} style={styles.goback_btn}>Go Back</Link>
        </div>
    )
}

export default page