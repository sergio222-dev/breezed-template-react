import React               from 'react';
import Head                from 'next/head'
import {setConfiguration}  from 'react-grid-system';
import ScrollButtonSection from '@Molecules/Buttons/ScrollButton';
import Navbar              from '@Organism/Navbar';
import Slider              from '@Organism/Slider';
import Header              from '@Templates/Header/HeaderSection';
import Container           from '@Templates/Responsive/Container';
import Section             from '@Templates/Section/SectionTemplate';

setConfiguration({maxScreenClass: 'xl'});

export default function Home() {
  return (
    <div className={'ala'}>
      <Head>
        <title>Breeze demo with React</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header>
        <Container>
          <Navbar/>
        </Container>
      </Header>
      <main>
        <Section>
          <Slider/>
          <ScrollButtonSection/>
        </Section>
        <Section paddingTop={120}>
          <Container>

          </Container>
        </Section>
      </main>
      <style jsx>{`
        //.ala {
        //  height: 2000px;
        //  background-color: black;
        //}
      `}</style>
    </div>
  )
}
