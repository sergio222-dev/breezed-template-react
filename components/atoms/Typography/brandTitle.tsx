import React, {FunctionComponent} from 'react';
import {useTheme}                 from '@Templates/theming';

interface OwnProps {
}

type Props = OwnProps;

const BrandTitle: FunctionComponent<Props> = ({children}) => {
  const theme = useTheme();
  return (
    <>
      <a className={'logo'} href={'#'}>{children}</a>
      <style jsx>{`
        .logo {
          line-height: 80px;
          color: ${theme.mainTextColor};
          font-size: 28px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          float: left;
          
          &:visited {
            color: ${theme.mainTextColor};
          }
        }
      `}</style>
    </>
  );
};

export default BrandTitle;
