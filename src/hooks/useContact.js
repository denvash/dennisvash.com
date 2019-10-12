import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const projectsQuery = graphql`
  {
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
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
  const queryData = useStaticQuery(projectsQuery);
  return parseQueryNode(queryData.contact.nodes);
};

export default useContact;
