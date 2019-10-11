import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const projectsQuery = graphql`
  {
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        frontmatter {
          title
          avatar {
            childImageSharp {
              fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          skills
        }
        html
      }
    }
  }
`;

const useAbout = () => {
  const queryData = useStaticQuery(projectsQuery);
  return parseQueryNode(queryData.about.nodes);
};

export default useAbout;
