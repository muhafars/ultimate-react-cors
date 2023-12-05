import Products from "../components/Products";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center">-- Fast React Pizza .Co ---</h1>
        <Products />
      </main>
    </>
  );
};

export default HomeScreen;
