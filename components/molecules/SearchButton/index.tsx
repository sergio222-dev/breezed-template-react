import React, { FunctionComponent } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useTheme} from '../../../settings/theming';

interface OwnProps {}

type Props = OwnProps;

const SearchButton: FunctionComponent<Props> = () => {

  const theme = useTheme();

  return (
    <>
      <div className="search-button">
        <a href="#" className="search-icon"><FaSearch /></a>
      </div>
      <style jsx>{`
        .search-button {
          padding: 0 0 0 15px;
          float: right;
          
          .search-icon {
            color: ${theme.green};
            width: 40px;
            height: 40px;
            display: inline-block;
            line-height: 44px;
            text-align: center;
            background-color: ${theme.white};
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
};

export default SearchButton;
