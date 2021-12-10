function mudarH1() {
    let input = document.getElementById('texto');
    let h1 = document.getElementsByTagName('h1')[0];                     
    h1.innerText = input.value;                                             //Para mudar o texto de h1, ele pega o valor do input, no caso o que eu digitei.
}