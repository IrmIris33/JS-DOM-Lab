const calculate = () => {
    const fv = document.getElementById('fahv').value;
    let newcelv =(fv -32) * 5/9;
    console.log(newcelv);

    document.getElementById("celv").value = newcelv;

}



