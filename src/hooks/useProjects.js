import { parseQueryNodes } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    query: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          cover {
            childImageSharp {
              fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          show
          external
          github
          tech
          featured
        }
      }
    }
  }
`;

const useProjects = predicate => {
  const queryData = useStaticQuery(query);
  return parseQueryNodes(queryData.query.nodes).filter(predicate);
};

export default useProjects;
