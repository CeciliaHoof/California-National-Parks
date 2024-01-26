import ImageGallery from "../components/ImageGallery";
import SiteExplanation from "../components/SiteExplanation";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

const Welcome = styled.p`
  font-size: 17px;
  text-align: center;
`;
const StyledContainer = styled(Container)`
  margin: 10px 10px 25px 10px;
`;

function Home() {
  return (
    <main>
      <StyledContainer>
        <h2>Welcome to Our Guide to California's National Parks!</h2>
        <Welcome>
          Embark on a journey through the breathtaking landscapes and diverse
          ecosystems of the eight National Parks located in California. Our
          website is your ultimate guide to discovering the wonders of these
          natural treasures. Immerse yourself in the beauty of iconic parks like
          Yosemite, Joshua Tree, and Sequoia, among others, and join us in
          preserving and celebrating the natural heritage of these remarkable
          parks. Your adventure begins here!
        </Welcome>
      </StyledContainer>
      <ImageGallery />
      <SiteExplanation />
    </main>
  );
}

export default Home;
