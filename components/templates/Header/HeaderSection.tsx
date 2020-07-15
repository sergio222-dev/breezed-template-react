import React, {FunctionComponent, useEffect, useState} from 'react';
import {useTheme}                                      from '../../../settings/theming';
import {useScroll}                                     from '@Presenters/useScroll';
import {usePage}                                       from '@Presenters/usePage';

interface OwnProps {}

type Props = OwnProps;

const HeaderSection: FunctionComponent<Props> = ({children}) => {
  const [sticky, setSticky] = useState(false);
  const [{page}] = usePage();
  const theme = useTheme();

  useScroll(({currentPosition: {y}}) => {
    setSticky(page !== 0);
  }, [page]);

  return (
    <header className={`header ${sticky ? 'header-sticky' : ''}`}>
      {children}
      <style jsx>{`
        .header {
          min-height: 80px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 100px;
          transition: all 0.5s ease 0s;
          background-color: transparent;
          
          & > * {
            transition: all 0.5s ease 0s;
          }
        }
        
        .header-sticky {
          background-color: ${theme.white};
          height: 80px;
          position: fixed;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }
      `}</style>
    </header>
  );
};

export default HeaderSection;
