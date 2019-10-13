import { parseQueryNode } from '@utils';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    query: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
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
  const queryData = useStaticQuery(query);
  return parseQueryNode(queryData.query.nodes);
};

export default useAbout;
