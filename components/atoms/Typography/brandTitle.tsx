import React, {FunctionComponent} from 'react';
import {useTheme}                 from '../../../settings/theming';

interface OwnProps {
  alter?: boolean;
}

type Props = OwnProps;

const BrandTitle: FunctionComponent<Props> = ({children, alter}) => {
  const theme = useTheme();
  return (
    <>
      <a className={'logo'} href={'#'}>{children}</a>
      <style jsx>{`
        .logo {
          line-height: 80px;
          color: ${alter ? theme.black : theme.white};
          font-size: 28px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          float: left;
          
          &:visited {
            color: ${alter ? theme.black : theme.white};
          }
        }
      `}</style>
    </>
  );
};

BrandTitle.defaultProps = {
  alter: false,
}

export default BrandTitle;
