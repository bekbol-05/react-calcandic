import React, { useState } from 'react';

const Home = () => {
    const btnArr = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '0', 'AC', 'C', '=',
        '+', '-', '.', '*', '/',
    ]
    const [result, setResult] = useState('')
    const Clear = () => setResult(result.substring(0, result.length - 1))
    const allClear = () => setResult('')
    const calc = () => setResult(eval(result))

    const AddSimbol = (element) => setResult(result + element)

    const getNum = (event) => {
        if (event == 'C') {
            return Clear()

        }
        if (event == 'AC') {
            return allClear()
        }
        if (event == '=') {
            return calc()
        }



        AddSimbol(event)
    }

    return (
        <div>
            <div>
                <textarea value={result} disabled={true} cols="50" rows="3"></textarea>
                <div>
                    {
                        btnArr.map((el, index) => (
                            <button onClick={() => getNum(el)} key={index}>{el}</button>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;