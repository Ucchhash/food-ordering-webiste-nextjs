import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className='layout__'>
            <Navbar />
            <main className='main__'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
