import { Inter } from 'next/font/google';
import styles from './page.module.css';

const interTitle = Inter({
    subsets: ['latin'],
    weight: '800',
    style: 'normal',
});
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    A Secure Platform for Managing Your Personal Medical
                    Information and Assistance.
                </p>
                <div>
                    <a
                        className={inter.className}
                        href="https://sombochea.medium.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By Chea Sambo
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <h1
                    className={interTitle.className}
                    style={{
                        fontSize: '3rem',
                    }}
                >
                    YourMed App
                </h1>
                <div className={styles.thirteen}>
                    <h2 className={inter.className}>1.0</h2>
                </div>
            </div>

            <div className={styles.grid}>
                {/* <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
            </div>

            <div
                className={inter.className}
                style={{
                    fontSize: '.8rem',
                }}
            >
                <p>&copy; YourMed {new Date().getFullYear()}</p>
            </div>
        </main>
    );
}
