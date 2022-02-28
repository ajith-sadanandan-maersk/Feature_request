import {
  Container,
  Heading,
  Content,
  MidBar,
  Search,
  Searchbar,
  SearchIcon,
} from "../styles/page.elements";
import { GoSearch } from "react-icons/go";

const Page = () => {
  return (
    <Container>
      <Heading>Maersk Feature Requests</Heading>
      <Content>
        Share your ideas for future features and functionality for Maersk and vote on your
        favorites!
      </Content>
      <h5>
        Note: When submitting a new idea, please select the Enterprise or Business label first.
      </h5>
      <MidBar>
        <h3>Ideas(100)</h3>
        <Searchbar>
          <Search placeholder="Search..."></Search>
          <SearchIcon>
            <GoSearch />
          </SearchIcon>
        </Searchbar>

      </MidBar>
    </Container>
  );
};

export default Page;
