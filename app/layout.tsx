import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import TransitionEffect from '@/components/TransitionEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'HUUTAI | Personal Portfolio',
    description: 'Huutai is a website developer ...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
            <body
                suppressHydrationWarning={true}
                className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
            >
                {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[30rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> */}
                <ThemeContextProvider>
                    <TransitionEffect>{children}</TransitionEffect>
                    <Toaster position="top-center" />
                </ThemeContextProvider>
            </body>
        </html>
    );
}
