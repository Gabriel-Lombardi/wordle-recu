// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)

let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes',
  'messi'
];
const intentos = [];
const palabraCorrecta = dict[Math.trunc(Math.random() * dict.length)];
console.log(palabraCorrecta);

function handleChange(e) {
  let wordle = document.getElementById('juego');
  // ¿la palabra está en el dict?
  let intento = e.target.value;
  intentos.push(intento);
  if (dict.includes(intento) == false) return false;
  console.log(e.target.value);
  // intentos
  let numeroDeIntentos = 6;
  for (let i = 0; i < 1; i++) {
    let fila = document.createElement("div");
    fila.className = "filas";
    for (let j = 0; j < 5; j++) {
      // cuadrado con la letra
      let cuadrado = document.createElement("div")
      cuadrado.textContent = intento[j];
      // Letra correcta pero lugar incorrecto
      if(palabraCorrecta.includes(intento[j])) cuadrado.style.backgroundColor = 'yellow';
      // Letra incorrecta
      else cuadrado.style.backgroundColor = 'gray';
      // Letra correcta, lugar correcto
      if (intento[j] == palabraCorrecta[j]) cuadrado.style.backgroundColor = 'green';
      cuadrado.className = "grid";
      fila.appendChild(cuadrado);
    }
    wordle.appendChild(fila);
    numeroDeIntentos--;
    console.log(numeroDeIntentos);
  }

  let ganaste = palabraCorrecta == intento;
  let perdiste = numeroDeIntentos == 0;

  if (ganaste) alert('Buena papá')
  if (perdiste) alert('No se juega más dice el arbitro del encuentro! era ${palabraCorrecta}')
}
