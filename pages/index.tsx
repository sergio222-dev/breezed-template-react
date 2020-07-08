import Head      from 'next/head'
import Container from '@Templates/container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Breeze demo with React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Container>
          Conainer
        </Container>
      </header>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}  </style>
    </>
  )
}
