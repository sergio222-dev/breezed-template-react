import React, {FunctionComponent} from 'react';
import BrandTitle                 from '@Atoms/Typography/brandTitle';
import LinkbarList                from '@Atoms/Linkbar/List';
import LinkbarItem                from '@Atoms/Linkbar/Item';
import NavbarLink                 from '@Atoms/Typography/navbarLink';
import SearchButton               from '@Molecules/SearchButton';
import {usePage}                  from '@Presenters/usePage';

const Navbar: FunctionComponent = () => {
  const [{page},] = usePage();
  const homePage = 0;

  return (
    <nav>
      <BrandTitle alter={page !== homePage}>
        .breezed
      </BrandTitle>
      <LinkbarList>
        <LinkbarItem>
          <NavbarLink alter={page !== homePage} active={page === 1}>Home</NavbarLink>
        </LinkbarItem>
        <LinkbarItem>
          <NavbarLink alter={page !== homePage} active={page === 1}>about</NavbarLink>
        </LinkbarItem>
        <LinkbarItem>
          <NavbarLink alter={page !== homePage} active={page === 1}>Projects</NavbarLink>
        </LinkbarItem>
        <LinkbarItem>
          <NavbarLink alter={page !== homePage} active={page === 1}>DROP down</NavbarLink>
        </LinkbarItem>
        <LinkbarItem>
          <NavbarLink alter={page !== homePage} active={page === 1}>contact us</NavbarLink>
        </LinkbarItem>
        <SearchButton/>
      </LinkbarList>

    </nav>
  );
};

export default Navbar;
