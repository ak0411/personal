import { Container, Divider } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          pt: 4,
          pb: 2,
          minHeight: '100%',
        }}
      >
        <Header />
        <Divider />
        <About />
        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default App;
