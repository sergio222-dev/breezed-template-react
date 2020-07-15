import React, {AnchorHTMLAttributes, FunctionComponent} from 'react';
import {useTheme}                                       from '../../../settings/theming';
import {FaArrowDown}                                    from 'react-icons/fa';

interface OwnProps {}

type Props = OwnProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const ScrollButton: FunctionComponent<Props> = ({...rest}) => {
  const theme = useTheme();
  return (
    <a {...rest} href={rest.href || '#'} className={`${rest.className || ''} scroll-button `}>
      <FaArrowDown />
      <style jsx>{`
        .scroll-button {
          background-color: ${theme.green};
          color: ${theme.white};
          border-radius: 50%;
        }
      `}</style>
    </a>
  );
};

export default ScrollButton;
