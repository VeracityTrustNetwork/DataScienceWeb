
import { Image } from '@chakra-ui/image';
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'

import Nav from 'components/Nav';


const Index = () => {

  return (<>
    <DarkModeSwitch />
    <Nav navs={[{ path: '1' }, { path: '2' }, { path: '3' }]} />
    <Container mt='8vh' pt='5em' height="92vh" className='super-content-wrapper'>

      <article id="block-e2a914f97c1f44ee9e65712b9d1250d6" className="notion-root">
        <h1 className="notion-header__title">Exploring Data Science</h1>
        <h2 id="block-49d862a1451945239e9ce13b6954abcc" className="notion-heading">
          <span
            className="notion-heading__anchor"
            id="49d862a1451945239e9ce13b6954abcc"
          />
          <span className="notion-semantic-string">
            <span>
              Software Crafters Leeds in Collaboration with Veracity Trust Network
      </span>
          </span>
        </h2>
        <div id="block-bbaa5d8586e542cc97f9624370c15f8c" className="notion-text">
          <p className="notion-text__content">
            <span className="notion-semantic-string" />
          </p>
        </div>
        <blockquote
          id="block-1a783e2c1a084de48861ebf72ba9b128"
          className="notion-quote"
        >
          <span className="notion-semantic-string">
            <span>
              1st November 2023 | 6:00 PM to 7.30 PM GMT Platform, New Station St
              Leeds, LS1 4JB
      </span>
          </span>
        </blockquote>
        <div id="block-437cdd64c17847cc84b77b206e3e90ab" className="notion-text">
          <p className="notion-text__content">
            <span className="notion-semantic-string" />
          </p>
        </div>
        <a
          id="block-exercise-1"
          className="notion-link notion-page emoji"
          href="/exercise-1"
        >
          <div>
            <div className="notion-page__icon">
              <span
                className="notion-icon text"
                style={{
                  width: "1.25em",
                  height: "1.25em",
                  fill: "var(--color-text-default-light)"
                }}
              >
                📨
        </span>
            </div>
            <div className="notion-page__title">
              <span className="notion-semantic-string">
                <span>Exercise 1</span>
              </span>
            </div>
          </div>
        </a>
        <a
          id="block-exercise-2"
          className="notion-link notion-page emoji"
          href="/exercise-2"
        >
          <div>
            <div className="notion-page__icon">
              <span
                className="notion-icon text"
                style={{
                  width: "1.25em",
                  height: "1.25em",
                  fill: "var(--color-text-default-light)"
                }}
              >
                📨
        </span>
            </div>
            <div className="notion-page__title">
              <span className="notion-semantic-string">
                <span>Exercise 2</span>
              </span>
            </div>
          </div>
        </a>
        <a
          id="block-exercise-3"
          className="notion-link notion-page emoji"
          href="/exercise-3"
        >
          <div>
            <div className="notion-page__icon">
              <span
                className="notion-icon text"
                style={{
                  width: "1.25em",
                  height: "1.25em",
                  fill: "var(--color-text-default-light)"
                }}
              >
                📨
        </span>
            </div>
            <div className="notion-page__title">
              <span className="notion-semantic-string">
                <span>Exercise 3</span>
              </span>
            </div>
          </div>
        </a>
      </article>
      <div style={{position:'fixed',bottom:0,right:'430px'}}>
      <div className="parallelogram" id="one"></div>
<div className="parallelogram" id="two"></div>
<div className="parallelogram" id="three"></div>
<div className="parallelogram" id="four"></div>
<div className="parallelogram" id="five"></div>
<div className="parallelogram" id="six"></div>
      </div>
      <div className={'gradidiv-s'} style={{width: '500px',
    height: '500px',
    borderRadius: '50%',
    
    position: 'fixed',
    bottom: '-150px',
    right: '-30px'}}>  <Image w='300px' style={{
        position: 'absolute',
        bottom: '250px',
        right: '100px'
      }} src='/img/logo.png' />
</div>
  </Container>
      </>)
}

export default Index;