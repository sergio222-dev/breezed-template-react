import React, { FunctionComponent } from 'react';
import {useTheme}                   from '@Templates/theming';

interface OwnProps {}

type Props = OwnProps;

const NavbarLink: FunctionComponent<Props> = ({children}) => {
  const theme = useTheme();

  return (
    <>
      <a className="navbarLink" href="#">{children}</a>
      <style jsx>{`
        .navbarLink {
          color: ${theme.mainTextColor};
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          height: 40px;
          line-height: 40px;
          border: transparent;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          
          &:hover {
            opacity: 0.5;
          }
          
          &:visited {
            color: ${theme.mainTextColor};
          }
        }
      `}</style>
    </>
  );
};

export default NavbarLink;
