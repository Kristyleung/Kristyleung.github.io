import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useTheme } from '@emotion/react'

const linkStyle = ({ theme }) => ({
  color: theme.colors.primary,
  fontFamily: theme.font.family.text,
})

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  const theme = useTheme()
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        css={linkStyle({ theme })}
        partiallyActive={partiallyActive}
        to={to}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a css={linkStyle({ theme })} href={to} {...props}>
      {children}
    </a>
  )
}

export default Link
