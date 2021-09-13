import 'antd/dist/antd.css';
import '../styles/globals.scss';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { FC } from 'react';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line
  return <Component {...pageProps} />;
};

export default MyApp;
