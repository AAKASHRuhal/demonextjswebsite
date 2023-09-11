
import HomePage from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <main>
      <div className="content-wrapper">
      <Header/>
      <HomePage />
      </div>
      <Footer/>
    </main>
  );
}


