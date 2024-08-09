import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

// Parent component & Root Component
function App() {

  const buttonProps = {
    text: 'mail',
    color: 'red',
    a: 1,
    b: 2
  }

  return (
    <>
    <Button {...buttonProps} />
    <Button text={'mail'} color={'red'} a={1} b={2} />
    <Button text={'cafe'} color={'blue'} />
    <Button text={'blog'} />
    <Button>
      <div>child node</div>
    </Button>
    <Button>
      <Header />
    </Button>
    </>
  );
}

export default App;