import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Posts from "../Components/Posts/Posts";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
  )
}
