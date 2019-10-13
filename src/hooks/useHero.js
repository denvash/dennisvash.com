import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    query: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      nodes {
        frontmatter {
          title
          name
          subtitle
        }
        html
      }
    }
  }
`;

const useHero = () => {
  const queryData = useStaticQuery(query);
  return parseQueryNode(queryData.query.nodes);
};

export default useHero;
