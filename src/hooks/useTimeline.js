import { parseQueryNodes } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    query: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/timeline/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          company
          location
          range
          url
        }
        html
      }
    }
  }
`;

const useTimeline = () => {
  const queryData = useStaticQuery(query);
  return parseQueryNodes(queryData.query.nodes);
};

export default useTimeline;
