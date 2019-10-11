export const parseQueryNodes = data =>
  data.map(({ frontmatter, ...rest }) => ({ ...frontmatter, ...rest }));

export const parseSingleNode = data => {
  const [first] = parseQueryNodes(data);
  return first;
};
