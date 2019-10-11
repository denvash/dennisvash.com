import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const projectsQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
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
  const queryData = useStaticQuery(projectsQuery);
  return parseQueryNode(queryData.hero.nodes);
};

export default useHero;
