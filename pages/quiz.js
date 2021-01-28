/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizBackGround from '../src/components/QuizBackGround';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import Image from '../src/components/Image';

function QuestionWidget({
  totalQuestions,
  question,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {/* // a chave mais externa é do react interpolado com as internas do template str js */}
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <Image src={question.image} />
      <Widget.Content>
        <form
          onSubmit={(info) => {
            info.preventDefault();
            onSubmit();
          }}
        >
          <h2>
            {question.title}
          </h2>
          <p>
            {question.description}
          </p>

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* Uma forma boa de ver o conteudo do json e array em runtime na tela */}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Image
        src="https://viviyuan.com/viviyuan/App/images/loading.gif"
      />
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  // const router = useRouter();
  // const [name, setName] = React.useState('');
  // console.log('retorno do useState', setName);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

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
        <QuizLogo />

        {/* se a var for igual a LOADING entao mostra o loading. */}
        {/* {screenState === 'LOADING'
          ? <LoadingWidget />
          : (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
            />
          )} */}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/FernandoStrijeski" />
    </QuizBackGround>
  );
}
