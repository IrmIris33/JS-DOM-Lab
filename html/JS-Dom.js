// Part 1 - Converting Fahrenheit value to Celsius with click button
//Part 2 - Converting Fahrenheit value to Kelvin and Rankine


const calculate = () => {
    const fv = parseFloat(document.getElementById('fahv').value);
        
    let newfahv = (fv);
    console.log(newfahv); //verified the calculation
    document.getElementById("fahv2").value = newfahv;


    let newcelv = (fv - 32) * 5/9;
    console.log(newcelv); //verified the calculation
    document.getElementById("celv").value = newcelv;


    let newkelv = parseFloat((fv - 32) / 1.8) + 273.15;
    console.log(newkelv); //verified the calculation
    document.getElementById("kelv").value = newkelv;


    let newrankv = parseFloat(fv + 459.67).toFixed(2);
    console.log(newrankv); //verified the calculation
    document.getElementById("rankv").value = newrankv;

}
