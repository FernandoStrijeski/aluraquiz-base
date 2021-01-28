import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackGround from '../src/components/QuizBackGround';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } 
`;

export default function QuizPage() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', setName);

  return (
    <QuizBackGround backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz = Modelo Base</title>
        <meta name="title" content="Alura Quiz = Modelo Base" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/FernandoStrijeski/aluraquiz-base" />
        <meta property="og:title" content="Alura Quiz = Modelo Base" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://github.com/FernandoStrijeski/aluraquiz-base" />
        <meta property="twitter:title" content="Alura Quiz = Modelo Base" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <Widget.Content.Image backgroundImage={db.bg} />
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (info) {
                  console.log(info.target.value);
                  // State
                  setName(` ${info.target.value}`);
                }}
                placeholder="Informe seu nome"
              />
              <button type="submit" disabled={name.length === 1}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Em busca de auto conhecimento</h1>
          </Widget.Header>
          <Widget.Content>
            <p>teasda</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Strijeski" />
    </QuizBackGround>
  );
}
