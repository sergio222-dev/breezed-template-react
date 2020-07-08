import React, {FunctionComponent} from 'react';
import BrandTitle                 from '@Atoms/Typography/brandTitle';
import NavbarLink                 from '@Atoms/Typography/navbarLink';
import NavbarTemplate             from '@Templates/NavbarTemplate';
import LinkbarList                from '@Atoms/Linkbar/List';
import LinkbarItem                from '@Atoms/Linkbar/Item';

interface OwnProps {
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = () => {
  return (
    <>
      <NavbarTemplate>
        <nav className={'navbar'}>
          <BrandTitle>.breezed</BrandTitle>
          <LinkbarList>
            <LinkbarItem>
              <NavbarLink>Home</NavbarLink>
            </LinkbarItem>
            <LinkbarItem>
              <NavbarLink>about</NavbarLink>
            </LinkbarItem>
            <LinkbarItem>
              <NavbarLink>Projects</NavbarLink>
            </LinkbarItem>
            <LinkbarItem>
              <NavbarLink>DROP down</NavbarLink>
            </LinkbarItem>
            <LinkbarItem>
              <NavbarLink>contact us</NavbarLink>
            </LinkbarItem>
          </LinkbarList>
        </nav>
      </NavbarTemplate>
      <style jsx>{`
        .navbar {
          min-height: 80px;
          background: transparent;
        }
      `}</style>
    </>
  );
};

export default Navbar;
