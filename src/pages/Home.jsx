import HeroBanner from "../components/home/HeroBanner";
import SearchBar from "../components/home/SearchBar";
import CategoryCard from "../components/home/CategoryCard";
import ProductGrid from "../components/product/ProductGrid";
import StoreSection from "../components/home/StoreSection";
import DealsSection from "../components/home/DealsSection";
import FlashDeals from "../components/home/FlashDeals";
function Home() {
  return (
    <>
      <HeroBanner />
      <SearchBar />
      <CategoryCard />
        <FlashDeals />
      <DealsSection />
      <ProductGrid />
      <StoreSection />
    </>
  );
}

export default Home;