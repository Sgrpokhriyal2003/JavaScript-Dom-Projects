const form = document.querySelector('form')
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    //const answer = document.querySelector('#answer');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Give A Valid Height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Give A Valid Weight`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        result.innerHTML = `<span>${bmi}</span>`
    }
    //homework task
    // if(answer < 18.6){
    //     answer.innerHTML = `UnderWeight`
    // }
    // else if(answer >= 18.6 &&  answer <= 24.9){
    //     answer.innerHTML = `Normal Range`
    // }
    // else{
    //     answer.innerHTML = `OverWeight`
    // }
});