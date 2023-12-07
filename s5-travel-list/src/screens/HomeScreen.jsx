import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import PackageList from "../components/PackageList";
import data from "../data";

const HomeScreen = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <PackageList items={data} />
      <Footer />
    </div>
  );
};

export default HomeScreen;
