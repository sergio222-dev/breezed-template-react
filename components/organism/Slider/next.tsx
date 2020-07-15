import React, {ButtonHTMLAttributes, FunctionComponent} from 'react';

interface OwnProps {}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Next: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button {...props} className={'next-button'}>Next</button>
      <style jsx>{`
        .next-button {
          position: absolute;
          width: 100px;
          right: 50px;
          bottom: 0;
          z-index: 100;
        }
      `}</style>
    </>
  );
};

export default Next;
