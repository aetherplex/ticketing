import { ChakraProvider } from '@chakra-ui/react';
import buildClient from '../api/build-client';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout currentUser={pageProps?.currentUser}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async ({ _, ctx }) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentuser');

  console.log(data);

  return {
    pageProps: {
      currentUser: data.currentUser,
    },
  };
};

export default MyApp;
