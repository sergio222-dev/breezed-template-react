import React, {ButtonHTMLAttributes, FunctionComponent} from 'react';

interface OwnProps {}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Prev: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button {...props} className={'prev-button'}>Prev</button>
      <style jsx>{`
        .prev-button {
          position: absolute;
          width: 100px;
          left: 50px;
          bottom: 0;
          z-index: 100;
        }
      `}</style>
    </>
  );
};

export default Prev;
