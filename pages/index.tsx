import Head               from 'next/head'
import Container          from '@Templates/container';
import Navbar             from '@Organism/Navbar';
import {setConfiguration} from 'react-grid-system';

setConfiguration({maxScreenClass: 'xl'});

export default function Home() {
  return (
    <>
      <Head>
        <title>Breeze demo with React</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <Container>
          <Navbar/>
        </Container>
      </header>
    </>
  )
}
