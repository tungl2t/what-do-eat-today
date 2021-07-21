import { ReactNode } from 'react';

import ScrollToTop from '@/components/scroll-to-top';
import Header from '@/components/header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
    </>
  );
};

export default Layout;
