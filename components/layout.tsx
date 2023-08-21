import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="no-scrollbar w-full flex justify-center items-center">{children}</main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
