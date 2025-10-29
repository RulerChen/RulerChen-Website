import React, { type ReactNode, useMemo } from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type { WrapperProps } from '@docusaurus/types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const location = useLocation();
  const baseUrl = useBaseUrl('/');

  // Hide navbar on the homepage
  const shouldHideNavbar = useMemo(() => location.pathname === baseUrl, [location.pathname, baseUrl]);

  if (shouldHideNavbar) {
    return null;
  }

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
