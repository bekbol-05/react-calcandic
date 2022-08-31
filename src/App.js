import React, { useEffect, useState } from 'react';
import AppClass from './AppClass';
import Home from './Components';

const App = () => {
  // const [visibleClass, setVisibleClass] = useState(true)
  // const toggleClass = () => {
  //   setVisibleClass((visible) => !visible)
  // }
  // const [n, setN] = useState(0)
  // const [n2, setN2] = useState(false)

  // Did Mount
  // useEffect(() => {
  //   console.log('ComponentDidMount , I born');
  // }, [])

  // Did Mount && Did Update
  // useEffect(() => {
  //   console.log('ComponentUpDate , I was changed');
  // }, [n, n2])

  // useEffect(() => {
  //   // Did Update без Did Mount задать условие
  //   if (n != 0) {
  //     console.log('ComponentUpDate , I was changed');
  //   }

  // }, [n])

  // Did Mounr && Update -без массива зависимости будет следить за всеми измениниями props && state
  // useEffect(() => {
  //   console.log('ComponentUpDate , I was changed');
  // })



  // useEffect(() => {

  //   return () => {
  //     console.log('WillUnmount');
  //   }
  // }, [])

  return (
    <div>
      {/* <button onClick={toggleClass}>Показать \ скрыть</button>
      {visibleClass && <AppClass />} */}
      {/* {n} */}

      {/* <button onClick={() => setN(n + 1)}>Change state n1</button>
      <button onClick={() => setN2(!n2)}>Change state n2</button>
      <button onClick={() => setN2(!n2)}>Change state n2</button> */}


      <Home />

    </div>
  );
};

export default App;