import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FunctionComponent} from 'react';
import {FaAngleLeft, FaAngleRight}                                                          from 'react-icons/fa';
import {useTheme}                                       from '../../../settings/theming';

interface OwnProps {
  size?: number;
  color?: string;
  direction: 'left' | 'right';
}

type Props = OwnProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const ArrowButton: FunctionComponent<Props> = ({color, size, direction, ...rest}) => {
  const theme = useTheme();
  return (
    <a {...rest} href={rest.href || '#'} className={`arrow ${rest.className}`}>
      {direction === 'left' && <FaAngleLeft size={size} color={color} />}
      {direction === 'right' && <FaAngleRight size={size} color={color} />}
      <style jsx>{`
        .arrow {
          width: 40px;
          height: 40px;
          z-index: 1000;
        }
      `}</style>
    </a>
  );
};

export default ArrowButton;
