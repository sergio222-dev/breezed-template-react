import React, {FunctionComponent, useState} from 'react';
import {useTheme}                           from '../../../settings/theming';
import {TypographyProps}          from '@Atoms/Typography/typography.interface';
import {useScroll}                from '@Presenters/useScroll';

type Props = TypographyProps;

const NavbarLink: FunctionComponent<Props> = ({children, alter, active}) => {
  const theme = useTheme();

  return (
    <a className="navbar-link" href="#">
      {children}
      <style jsx>{`
        .navbar-link {
          color: ${active ? theme.green : alter ? theme.black : theme.white};
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
            color: ${active ? theme.green : alter ? theme.black : theme.white};
          }
        }
      `}</style>
    </a>
  );
};

export default NavbarLink;
