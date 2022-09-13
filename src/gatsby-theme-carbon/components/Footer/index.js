import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
    <strong>Bitcoin mining full stack company</strong>
    </p>
    <p>
    Pushing the mining industry forward with a full-stack solution from mining firmware up to the pool
    </p>
    <p>
     Build time: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://braiins.com/', linkText: 'Braiins Pool' },
    { href: 'https://braiins.com/', linkText: 'Braiins OS+' },
    { href: 'https://braiins.com/', linkText: 'Farm Proxy' },
    { href: 'https://braiins.com/', linkText: 'Startum V2' },
    { href: 'https://braiins.com/', linkText: 'Mining Insights' },
  ],
  secondCol: [
    { href: 'https://braiins.com/', linkText: 'Product Updates' },
    { href: 'https://braiins.com/', linkText: 'Blog' },
    { href: 'https://braiins.com/', linkText: 'Braiins Design Language' },
  ],
};

const FooterLogo = () => (
  <img src="/images/braiins-logo.svg" alt="Braiins" width="120px"/>
);

const CustomFooter = () => <Footer links={links} Content={Content} Logo={FooterLogo} />;

export default CustomFooter;
