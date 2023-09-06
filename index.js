function getInputByElement (element){
    const field = document.getElementById(element);
    const fieldString = field.value;
    const input = parseInt(fieldString);
    return input;
}


function getNameElement (event){
    const logic = document.getElementById(event);
    return logic
}

function getMultiplyWithExtraNumber (A, B){
    const trainer = getInputByElement(A);
    const trainerB = getInputByElement(B);
    const trainerCalculate = .5 * trainer * trainerB;
    if(isNaN(trainer,trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('btn-triangle')
        const area = document.getElementById('resultArea');
        const section = document.createElement('section');
        const logical = logic.innerText;
        const h2 = document.createElement('h2');
        h2.innerText = logical;
        section.appendChild (h2);

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate;
        section.appendChild(h3);
        area.appendChild(section)
    }

    
    
}

function getMultiply (A,B){
    const trainer = getInputByElement(A);
    const trainerB = getInputByElement(B);
    const trainerCalculate = trainer * trainerB;
    if(isNaN(trainer,trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('btn-triangle')
        const area = document.getElementById('resultArea');
        const section = document.createElement('section');
        const logical = logic.innerText;
        const h2 = document.createElement('h2');
        h2.innerText = logical;
        section.appendChild (h2);

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate;
        section.appendChild(h3);
        area.appendChild(section)
    }
}


document.getElementById('btn-triangle').addEventListener('click', function(){
    getMultiplyWithExtraNumber('triangleB', 'triangleH');
});
document.getElementById('btn-rectangle').addEventListener('click', function(){
    getMultiply('rectangleW', 'rectangleL');
});
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    getMultiply('parallelogramB', 'parallelogramH');
});
document.getElementById('btn-rhombus').addEventListener('click', function(){
    getMultiplyWithExtraNumber('rhombus1', 'rhombus2');
});
document.getElementById('btn-pentagon').addEventListener('click', function(){
    getMultiplyWithExtraNumber('PentagonP', 'PentagonB');
});
document.getElementById('btn-ellipse').addEventListener('click', function(){
    getMultiplyWithExtraNumber('ellipseA', 'ellipseB');
});

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})




function checkMe(){
    const box = getNameElement('triangleCheck');
    const inputId = getNameElement('triangleB');
    const inputId2 = getNameElement('triangleH');

    if(box.checked === true){
        inputId.removeAttribute('disabled');
        inputId2.removeAttribute('disabled');
    }
    else{
        inputId.setAttribute('disabled', true);
        inputId2.setAttribute('disabled', true);
    }
}
