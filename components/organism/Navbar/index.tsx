import React, { FunctionComponent } from 'react';
import BrandTitle                   from '@Atoms/Typography/brandTitle';

interface OwnProps {}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = () => {
  return (
    <div>
      <BrandTitle>.breezed</BrandTitle>
    </div>
  );
};

export default Navbar;
