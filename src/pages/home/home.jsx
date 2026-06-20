import CreativeServices from "../../components/home/CreativeServices/CreativeServices";
// import ClientReviews from "../../components/home/ClientReviews/ClientReviews";
import HeroPortfolio from "../../components/home/HeroSection";
import AboutMe from "../../components/home/AboutMe";
import LatestProjects from "../../components/home/MyProjects";
import ClientReviews from "../../components/home/ClientReviews";

export default function home() {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroPortfolio/>
      <AboutMe />
      <CreativeServices />
      <LatestProjects/>
      <ClientReviews />

    </>
  );
}
