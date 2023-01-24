// Helper functions to query hygraph headless CMS
import { gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const GET_PORTFOLIO_DATA = gql`
  query PortfolioProfile {
    portfolioProfile(where: { slug: "karin-fernandez-portfolio" }) {
      id
      aboutText {
        html
      }
      description {
        html
      }
      projects {
        id
        name
        githubUrl
        url
        summary {
          text
        }
        image {
          url
        }
      }
    }
  }
`;

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

export default GET_PORTFOLIO_DATA;
