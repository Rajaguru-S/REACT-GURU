import React,{useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import MyText from './components/UI/Text/MyText';

function App() {
  const [showText, setShowText] = useState(false);
  const [toggleEnable, setToggleEnable] = useState(false);
  console.log('MyApp');
  const textRender = useCallback(() => {
    if(toggleEnable){
    setShowText(textChange => !textChange);
  }
  },[toggleEnable])

  const toggleEnableHandler = () => {
    setToggleEnable(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showText && <p>Welcome KingGuru!!!</p>}
      <MyText show={showText}/>
      <Button onClick={toggleEnableHandler}>Toggle Enable!</Button>
      <Button onClick={textRender}>Click Me!</Button>
    </div>
  );
}

export default App;
