import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">-- Fast React Pizza .Co ---</h1>
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
