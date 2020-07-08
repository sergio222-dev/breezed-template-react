import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Container: FunctionComponent<Props> = ({children}) => {
  return (
    <>
      <div className={'container'}>
        {children}
      </div>
      <style jsx>{`
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            max-width: 960px;
          }
        }        
        
        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            max-width: 720px;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767px) {
          .container {
            max-width: 540px;
          }
        }
        
        .container {
          width: 100%;
          padding-left: 15px;
          padding-right: 15px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </>
  );
};

export default Container;
