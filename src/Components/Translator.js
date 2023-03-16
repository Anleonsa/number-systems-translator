import React from 'react';
import '../styles/translator.css'

const Translator = () =>{
    
    //Declaración de los objetos que relacionan las letras con dígitos numéricos
    const numericalSymbols = {
        0 : 0,
        1 : 1,
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        A : 10,
        B : 11,
        C : 12,
        D : 13,
        E : 14,
        F : 15
    }
    const numToSymbols = {
        0 : 0,
        1 : 1,
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 'A',
        11 : 'B',
        12 : 'C',
        13 : 'D',
        14 : 'E',
        15: 'F'
    }

    //Función encargada de recibir como parámetro una base y retorna una lista (Array) con los valores que puede tener esa base
    const possibleSymbols = base => {
        let symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        return symbols.slice(0, base);
    }

    //Función encargada de invocar a las funciones traductoras para pintar los resultados en los inputs
    const calculateSystems = (currentInput, otherInput, currentBase, otherBase) => {
        let selectedBase = parseInt(currentBase.value);
        let baseObjective = parseInt(otherBase.value);

            //Ciclo encargado de borrar símbolos no posibles en el input según el sistema numérico elegido
            for(let symbol of currentInput.value){
                if(!possibleSymbols(selectedBase).includes(symbol.toLowerCase())){
                    currentInput.value = currentInput.value.replace(symbol, '');
                }
            }

            let numberToConvert = currentInput.value;

            //Condicionales que conducen al cálculo correcto dependiendo de las bases seleccionadas
            if(selectedBase === baseObjective)otherInput.value = numberToConvert;
            else if(selectedBase === 10) otherInput.value = convertDecimalToOther(numberToConvert, baseObjective);
            else if(baseObjective === 10) otherInput.value = convertOtherToDecimal(numberToConvert, selectedBase);
            else otherInput.value = convertDecimalToOther(convertOtherToDecimal(numberToConvert, selectedBase), baseObjective);
    }

    //Adición del evento del input 1
    const eventNumber1 = e =>{
        calculateSystems(
            e.target,
            document.getElementById('inputNumber2'),
            document.getElementById('select-systemBase1'),
            document.getElementById('select-systemBase2')
        )
    }

    //Adición del evento del input 2
    const eventNumber2 = e =>{
        calculateSystems(
            e.target,
            document.getElementById('inputNumber1'),
            document.getElementById('select-systemBase2'),
            document.getElementById('select-systemBase1')
        )
    }

    //Adición del evento del select de la base 1
    const eventBase1 = e =>{
        calculateSystems(
            document.getElementById('inputNumber2'),
            document.getElementById('inputNumber1'),
            document.getElementById('select-systemBase2'),
            e.target
        )
    }

    //Adición del evento del select de la base 2
    const eventBase2 = e =>{
        calculateSystems(
            document.getElementById('inputNumber1'),
            document.getElementById('inputNumber2'),
            document.getElementById('select-systemBase1'),
            e.target
        )
    }

    //Función para convertir un número de Decimal a otro sistema numérico
    const convertDecimalToOther = (decimal, base) => {
        let numberInList = [];
        for(let i = decimal; i >= 1; i = Math.trunc(i / base)){
            numberInList.push(numToSymbols[i % base]);
        }
        return numberInList.reverse().join('');
    }

    //Función para convertir un número de cualquier sistema numérico a decimal
    const convertOtherToDecimal = (number, base) => {
        number = number.toString().split('').reverse().join('');
        let decimal = 0;
        for(let i = number.length - 1; i >= 0; i--)decimal += numericalSymbols[number[i].toUpperCase()] * (base ** i);
        return decimal;
    }

    return(
        <div className="Translator-container">

            <div className="number-unit-card">
                <input type="text" className='input-numberToTranslate' id='inputNumber1' onChange={eventNumber1}/>
                <select className='select-systemBase' id="select-systemBase1" onChange={eventBase1} >
                    <option value={2}>En base 2 (Binario)</option>
                    <option value={3}>En base 3</option>
                    <option value={4}>En base 4</option>
                    <option value={5}>En base 5</option>
                    <option value={6}>En base 6</option>
                    <option value={7}>En base 7</option>
                    <option value={8}>En base 8 (Octal)</option>
                    <option value={9}>En base 9</option>
                    <option value={10}>En base 10 (Decimal)</option>
                    <option value={11}>En base 11</option>
                    <option value={12}>En base 12</option>
                    <option value={13}>En base 13</option>
                    <option value={14}>En base 14</option>
                    <option value={15}>En base 15</option>
                    <option value={16}>En base 16 (Hexadecimal)</option>
                </select>
            </div>

            <div className="number-unit-card">
                <input type="text" className='input-numberToTranslate' id='inputNumber2' onChange={eventNumber2}/>
                <select className='select-systemBase' id="select-systemBase2" onChange={eventBase2} >
                    <option value={2}>En base 2 (Binario)</option>
                    <option value={3}>En base 3</option>
                    <option value={4}>En base 4</option>
                    <option value={5}>En base 5</option>
                    <option value={6}>En base 6</option>
                    <option value={7}>En base 7</option>
                    <option value={8}>En base 8 (Octal)</option>
                    <option value={9}>En base 9</option>
                    <option value={10}>En base 10 (Decimal)</option>
                    <option value={11}>En base 11</option>
                    <option value={12}>En base 12</option>
                    <option value={13}>En base 13</option>
                    <option value={14}>En base 14</option>
                    <option value={15}>En base 15</option>
                    <option value={16}>En base 16 (Hexadecimal)</option>
                </select>
            </div>
        </div>
    );
}

export default Translator;