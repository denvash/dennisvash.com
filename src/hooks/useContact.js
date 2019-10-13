import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    query: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`;

const useContact = () => {
  const queryData = useStaticQuery(query);
  return parseQueryNode(queryData.query.nodes);
};

export default useContact;
