import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizBackGround from '../src/components/QuizBackGround';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', setName);

  return (
    <QuizBackGround backgroundImage={db.bg}>
      <Head>
        <title>StrijesQuiz - DEV ou não DEV</title>
        <meta name="title" content="StrijesQuiz = DEV ou não DEV" />
        <meta name="description" content="Ser programador não está apenas em criar sites e aplicações. Você se considera um DEV?" />

        <link rel="shortcut icon" href={`${db.theme.favicon}`} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/FernandoStrijeski/aluraquiz-base" />
        <meta property="og:title" content="StrijesQuiz = DEV ou não DEV" />
        <meta property="og:description" content="Ser programador não está apenas em criar sites e aplicações. Você se considera um DEV?" />
        <meta property="og:image" content="https://www.dinamize.com.br/wp-content/uploads/2019/09/A-origem-do-dia-do-programador-topo.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://github.com/FernandoStrijeski/aluraquiz-base" />
        <meta property="twitter:title" content="StrijesQuiz = DEV ou não DEV" />
        <meta property="twitter:description" content="Ser programador não está apenas em criar sites e aplicações. Você se considera um DEV?" />
        <meta property="twitter:image" content="https://www.dinamize.com.br/wp-content/uploads/2019/09/A-origem-do-dia-do-programador-topo.png" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>E ai - DEV ou não DEV?</h1>
          </Widget.Header>
          <Widget.Content>
            <h2>Descubra agora se você tem a alma de um desenvolvedor. Bora começar?</h2>
            <br />
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              {/* nao usar onChange={function pq boas prat recomendam arrowfunction lambda} */}
              {/* <Input
                onChange={function (info) {
                  console.log(info.target.value);
                  // State
                  setName(` ${info.target.value}`);
                }}
                placeholder="Informe seu nome"
              /> */}

              <Input
                name="nomeDoUsuario"
                onChange={(info) => {
                  // console.log(info.target.value);
                  // State
                  setName(`${info.target.value}`);
                }}
                placeholder="Informe seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}

              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quizes da galerinha</h1>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Strijeski" />
    </QuizBackGround>
  );
}
