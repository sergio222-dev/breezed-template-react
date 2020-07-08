import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const LinkbarItem: FunctionComponent<Props> = ({children}) => {

  return (
    <>
      <li className="listItem">{children}</li>
      <style jsx>{`
        .listItem {
          padding: 0 20px;
          margin: 0;
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default LinkbarItem;
