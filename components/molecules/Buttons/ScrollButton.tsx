import React, {FunctionComponent} from 'react';
import ScrollButton               from '@Atoms/Buttons/Scroll';
import {useStyles}                from '@Presenters/useStyles';

interface OwnProps {
}

type Props = OwnProps;

const [className, styles] = useStyles(`
      width: 60px;
      height: 60px;
      display: inline-block;
      text-align: center;
      line-height: 60px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
      z-index: 10;
  `);

const ScrollButtonSection: FunctionComponent<Props> = () => {

  return (
    <div className={'scroll-section'}>
      <ScrollButton className={className}/>
      {styles}
      <style jsx>{`
        .scroll-section {
          position: absolute;
          width: 60px;
          height: 60px;
          left: 50%;
          margin-top: -30px;
          margin-left: -30px;
        }
      `}</style>
    </div>
  );
};

export default ScrollButtonSection;
