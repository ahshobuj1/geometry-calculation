const getInputValue = (inputId) => {
    const InputArea = document.getElementById(inputId);
    const InputAreaValueString = InputArea.value;
    const InputAreaValue = parseFloat(InputAreaValueString);
    InputArea.value = '';

    return InputAreaValue;
};

const showCountAreaResult = (areaId, countArea) => {
    const showResult = document.getElementById(areaId);
    showResult.innerText = countArea.toFixed(2);
};

//* Dynamic History card
const setHistoryCard = (title, area) => {
    const history = document.getElementById('history');
    const p = document.createElement('p');
    const countChild = history.childElementCount;

    p.innerHTML = `<p class="text-xl font-bold">${
        countChild + 1
    }.${title}  = <button class="btn btn-sm btn-primary px-4 "> ${area.toFixed(
        2
    )}  cm<sup>2</sup></button></p>`;
    history.appendChild(p);
};

//*  Triangle Area
const triangleAreaCalculation = () => {
    const baseInputArea = getInputValue('triangleBase');
    const heightInputArea = getInputValue('triangleHeight');

    if (isNaN(baseInputArea) || isNaN(heightInputArea)) {
        alert('need valid number');
        return;
    }

    const countArea = 0.5 * baseInputArea * heightInputArea;
    showCountAreaResult('triangleArea', countArea);
    setHistoryCard('Triangle', countArea);
};

//* Rectangle Area
const rectangleAreaCalculation = () => {
    const widthInputArea = getInputValue('rectangleBase');
    const lengthInputArea = getInputValue('rectangleHeight');

    if (isNaN(widthInputArea) || isNaN(lengthInputArea)) {
        alert('need valid number');
        return;
    }

    const countArea = widthInputArea * lengthInputArea;
    showCountAreaResult('rectangleArea', countArea);
    setHistoryCard('Rectangle', countArea);
};

//* Parallelogram Area
const parallelogramAreaCalculation = () => {
    const baseInputArea = getInputValue('parallelogramBase');
    const heightInputArea = getInputValue('parallelogramHeight');

    if (isNaN(baseInputArea) || isNaN(heightInputArea)) {
        alert('need valid number');
        return;
    }

    const countArea = baseInputArea * heightInputArea;
    showCountAreaResult('parallelogramArea', countArea);
    setHistoryCard('Parallelogram', countArea);
};

//* Ellipse Area
const ellipseAreaCalculation = () => {
    const baseInputArea = getInputValue('ellipseBase');
    const heightInputArea = getInputValue('ellipseHeight');

    if (isNaN(baseInputArea) || isNaN(heightInputArea)) {
        alert('need valid number');
        return;
    }

    const countArea = 3.14159265359 * baseInputArea * heightInputArea;
    showCountAreaResult('ellipseArea', countArea);
    setHistoryCard('Ellipse', countArea);
};

//* Code without function
/* const triangleAreaCalculation = () => {
    const baseInputArea = document.getElementById('triangleBase');
    const baseInputAreaValueString = baseInputArea.value;
    const baseInputAreaValue = parseFloat(baseInputAreaValueString);
    baseInputArea.value = '';

    console.log(baseInputAreaValue);

    const heightInputArea = document.getElementById('triangleHeight');
    const heightInputAreaValueString = heightInputArea.value;
    const heightInputAreaValue = parseFloat(heightInputAreaValueString);
    heightInputArea.value = '';

    console.log(baseInputAreaValue, heightInputAreaValue);

    const countArea = 0.5 * baseInputAreaValue * heightInputAreaValue;

    const showResult = document.getElementById('areaResult');
    showResult.innerText = countArea;
}; */
