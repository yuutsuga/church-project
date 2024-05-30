import Activities from "./Components/Activities/Activities";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <body className="body">
      <Header />
      <Hero />
      <Activities />
      <Footer />      
    </body>
  );
}
