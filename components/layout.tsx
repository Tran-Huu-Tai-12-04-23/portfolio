import Footer from '@/components/footer';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="no-scrollbar w-full flex justify-center items-center">{children}</main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
