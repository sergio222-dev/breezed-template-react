import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const LinkbarList: FunctionComponent<Props> = ({children}) => {

  return (
    <>
      <ul className="linkbar">
        {children}
      </ul>
      <style jsx>{`
        .linkbar {
          display: flex;
          margin-top: 20px;
          float: right;
          position: relative;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default LinkbarList;
