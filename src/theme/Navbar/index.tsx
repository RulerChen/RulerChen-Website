import React, { type ReactNode } from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type { WrapperProps } from '@docusaurus/types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const location = useLocation();
  
  // Hide navbar on the homepage
  if (location.pathname === useBaseUrl('/')) {
    return null;
  }
  
  return (
    <>
      <Navbar {...props} />
    </>
  );
}
