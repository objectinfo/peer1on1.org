import GatsbyLink from 'gatsby-link';

export const Link = ({ children, ...props }) => (
  <GatsbyLink
    {...props}
    css={{
      color: 'inherit',
      backgroundImage: 'none',
      display: 'flex',
      ...(props.css || {}),
    }}
  >
    {children}
  </GatsbyLink>
);

export default Link;
