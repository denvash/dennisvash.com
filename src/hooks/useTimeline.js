import { parseQueryNodes } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const projectsQuery = graphql`
  {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
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
  const queryData = useStaticQuery(projectsQuery);
  return parseQueryNodes(queryData.jobs.nodes);
};

export default useTimeline;
