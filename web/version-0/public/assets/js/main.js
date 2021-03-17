'use strict';
const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-namePreview',
    defaultValue: 'Nombre Apellido',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-position',
    cardClass: '.js-positionPreview',
    defaultValue: 'Front-end developer',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },

  {
    inputClass: '.js-email',
    cardClass: '.js-emailPreview',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-phonePreview',
    defaultValue: '',
    cardPrefix: 'tel:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-linkedinPreview',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-githubPreview',
    defaultValue: '',
    cardPrefix: 'https://github.com/',
    cardElementAttribute: 'href',
  },
];

function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:
    console.log(
      'Empiezo una nueva iteración del for con la configuración del elemento:',
      inputTextConfig
    );
    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log(
      'Elemento del formulario:',
      inputTextConfig.inputClass,
      inputElement
    );
    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log(
      'Elemento del la tarjeta:',
      inputTextConfig.cardClass,
      cardElement
    );
    // obtengo el valor del input
    let newValue = inputElement.value;

    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log('Valor por defecto:', inputTextConfig.defaultValue);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }
    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === 'href') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        // limpio el prefijo por si acaso la usuaria ha escrito cosas como:
        // - https://github.com/migueldelmazo en vez de migueldelmazo a secas
        // - https://www.linkedin.com/in/migueldelmazo en vez de migueldelmazo a secas
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log('Valor del prefijo:', inputTextConfig.cardPrefix);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.href = newValue;
    }
    console.log('-------------------------------------------------');
  }
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

// obtengo los 6 inputs del html
const inputTextElements = document.querySelectorAll('.js-inputText');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}

// al arrancar la página proceso todos los inputs
// como updateAllInputs no recibe eventos puedo ejecutar esta función al inicio, tras un evento de usuaria o cuando me de la real gana!!!


'use strict';

const collapsable1 = document.querySelector('.js-slide1');
const collapsable2 = document.querySelector('.js-slide2');
const collapsable3 = document.querySelector('.js-slide3');

const designElement = document.querySelector('.js-design');
const fillElement = document.querySelector('.js-fill');
const shareElement = document.querySelector('.js-share');

function handleShow1() {
  collapsable1.classList.toggle('collapsable--close');
}
function handleShow2() {
  collapsable2.classList.toggle('collapsable--open');
}
function handleShow3() {
  collapsable3.classList.toggle('collapsable--open');
}

designElement.addEventListener('click', handleShow1);
fillElement.addEventListener('click', handleShow2);
shareElement.addEventListener('click', handleShow3);

'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 1;

function updatePalette() {
  cardElement.classList.remove('palette1', 'palette2', 'palette3', 'palette4');
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette' + checkedPalette);
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', updatePalette);
}

'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js-profileTrigger');
const fileField = document.querySelector('.js-profileUploadBtn');
const profileImage = document.querySelector('.js-profileImage');
const profilePreview = document.querySelector('.js-profilePreview');
let photo = '';
/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  photo = fr.result;
  updatePhoto();
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

const defaultPhoto = document.querySelector('.sample__photo');

function updatePhoto() {
  const currentPhoto = photo || `url(${defaultPhoto.style.backgroundImage}`;
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
}

/*   console.log(fr.result);
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  profileImage.style.backgroundImage = `url(${fr.result})`;
 */

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

'use strict';
const resetButtonElement = document.querySelector('.js-reset');

function resetInfo() {
  localStorage.clear();
}
resetButtonElement.addEventListener('click', resetInfo);

/*

Cómo vamos a usar siempre el local storage:

Guardar en el local storage:
- Cuando la usuaria haga cualquier cambio en la página que queramos guardar en el local storage llamamos a la función saveInLocalStorage
- 1º En ella obtenemos todos los datos a guardar
- 2º Los metemos en un objeto
- 3º Hacemos JSON.stringify
- 4º Hacemos localStorage.setItem(...)

Recuperar del local storage:
- Cuando arrancamos la página recuperamos los datos del local storage, para ello
- 1º Obtenemos los datos con localStorage.getItem(...)
- 2º Comprobamos si son datos válidos, diferente de null. Si no son datos válidos no hacemos nada más
- 3º Si son datos válidos los colocamos donde corresponda, en una variable global, en los campos de formulario con .value o donde sea.
- 4º En este proyecto en concreto los ponemos en el formulario
- 5º Llamamos a las funciones que replican los datos desde el formulario a la tarjeta

*/

// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
function getUserData() {
  // obtengo los valores de todos los campos
  return {
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-inputName').value,
    job: document.querySelector('.js-inputJob').value,
    email: document.querySelector('.js-inputEmail').value,
    phone: document.querySelector('.js-inputPhone').value,
    linkedin: document.querySelector('.js-inputLinkedin').value,
    github: document.querySelector('.js-inputGithub').value,
  };
}
// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
function saveInLocalStorage() {
  // obtengo los valores de todos los campos
  const userData = getUserData();
  // lo convierto a string porque local storage solo admite strings
  const userDataInString = JSON.stringify(userData);
  // lo guardo en el local storage en el campo que me apetece
  localStorage.setItem('userData', userDataInString);
}
// al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
function getFromLocalStorage() {
  // obtengo los datos desde el local storage
  const userDataInString = localStorage.getItem('userData');
  // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    // actualizo los inputs del formulario
    document.querySelector('.js-inputName').value = userData.name;
    document.querySelector('.js-inputJob').value = userData.job;
    document.querySelector('.js-inputEmail').value = userData.email;
    document.querySelector('.js-inputPhone').value = userData.phone;
    document.querySelector('.js-inputLinkedin').value = userData.linkedin;
    document.querySelector('.js-inputGithub').value = userData.github;
    // actualizo la variable global de la foto
    photo = userData.photo;
    // actualizo la paleta, para ello
    // - Recorro las 3 paletas
    // - Compruebo cuál tiene el valor que tengo en el local storage
    // - A la paleta que tiene el valor correcto le hago un .checked = true para activarla
    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    // propago los datos desde el formulario a la tarjeta
    updateAllInputs();
    updatePalette();
    updatePhoto();
  }
}

/*

Para actualizar la paleta hay otras dos formas de hacerlo:

1º Le pongo a cada radio button de las paletas la clase .palette-1, .palette-2 y .palette-3 y ejecuto
document.querySelector(`.js-palette-${userData.palette}`).checked = true;

2º Hasta ahora hemos utilizado selectores de id, etiqueta y clase para seleccionar elementos
Hay más formas de hacerlo por ejemplo si pongo: document.querySelector('.js-palette[value="2"]')
estoy seleccionando el elemento que tiene la clase .js-palette y que además tiene un atributo que se llama
value y que tiene el valor 2.

Por ello en la función getFromLocalStorage podría haber usado :
document.querySelector(`.js-palette[value="${userData.palette}"]`).checked = true;

Más info de selectores de atributos: https://developer.mozilla.org/es/docs/Web/CSS/Selectores_atributo

*/

'use strict';

// prevenimos el envío del formulario

const form = document.querySelector('.js-form');

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);

// prevenimos la apertura de ventana al pulsar intro (keyCode=13)
function handle13Keydown(ev) {
  var keyCode = ev.which;
  if (keyCode === 13) {
    ev.preventDefault();
    return false;
  }
}
form.addEventListener('keydown', handle13Keydown);

'use strict';

const createBtn = document.querySelector('.js-create-btn');
const cardResultElement = document.querySelector('.js-card-result');
const createdSection = document.querySelector('.js-created');
const errorElement = document.querySelector('.js-consoleError');
const errorSection = document.querySelector('.js-error');

function handleCreateBtn(ev) {
  ev.preventDefault();

  console.log('Mis datos', getUserData());

  const url = 'https://profileawesome.herokuapp.com/card';
  const data = getUserData();

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Server response:', data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
        cardResultElement.href = data.cardURL;
        createdSection.classList.remove('created--hidden');
        errorSection.classList.add('created--hidden');
      } else {
        errorElement.innerHTML = data.error;
        errorSection.classList.remove('created--hidden');
        createdSection.classList.add('created--hidden');
      }
    });
}

createBtn.addEventListener('click', handleCreateBtn);

// recuperamos la info desde el local storage
getFromLocalStorage();

// arrancamos la página

updateAllInputs();
updatePalette();
updatePhoto();

//# sourceMappingURL=main.js.map
