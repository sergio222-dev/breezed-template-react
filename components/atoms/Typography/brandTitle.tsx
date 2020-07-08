import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const BrandTitle: FunctionComponent<Props> = ({children}) => {

  return (
    <>
      <a className={'logo'} href={'#'}>{children}</a>
      <style jsx>{`
        .logo {
          line-height: 80px;
          color: white;
          font-size: 28px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          float: left;
          
          &:visited {
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default BrandTitle;
