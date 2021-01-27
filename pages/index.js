import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackGround from '../src/components/QuizBackGround'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;


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


export default function Home() {
  return (
    <QuizBackGround backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.questions[0].title}</h1>
          </Widget.Header>
          <Widget.Content>
          <h1>{db.questions[0].description}</h1>            
            <option>{db.questions[0].alternatives[0]}</option>
            <option>{db.questions[0].alternatives[1]}</option>
            <option>{db.questions[0].alternatives[2]}</option>
            <option>{db.questions[0].alternatives[3]}</option>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>{db.questions[1].title}</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>{db.questions[1].description}</h1>
            <option>{db.questions[1].alternatives[0]}</option>
            <option>{db.questions[1].alternatives[1]}</option>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Strijeski"/>
    </QuizBackGround>     
  )

}

