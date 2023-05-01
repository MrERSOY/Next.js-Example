import { Inter } from 'next/font/google';

import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "./styles.module.css";

import '@/styles/globals.css'

const interFont = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={interFont.className}>
            <body className={styles.container}>
                <Header />
                <main>{children}</main>
                <Footer />
                </body>
        </html>
    );
}