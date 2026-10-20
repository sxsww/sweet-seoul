import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Catalog } from "./components/Catalog/Catalog";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <div className="layout">
      <Header />

      <main>
        <Hero />
        <Catalog />
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}