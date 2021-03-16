![image](https://github.com/Adalab/project-promo-l-module-3-team-9/blob/dev/web/src/images/logo-delicious.png)
# Delicious Profile Card

`Delicious Profile Card` es un proyecto creado por las cuatro integrantes del equipo `Delicious Code`: [Cristina Blanco](https://github.com/CrisBIB), [Marta Cano](https://github.com/Martcacio), [Mercedes Fe](https://github.com/mermfb) y [Natalia Migallón](https://github.com/NataliaMigallon). 
En él hemos programado una aplicación que genera tarjetas de visita virtuales con los datos personales de la usuaria (nombre, puesto de trabajo, email, foto de perfil, teléfono, y cuentas de Linkedin y GitHub), y que puede ser compartida a través de las diferentes redes sociales mediante URL compartida. 
Para desarrollar esta web hemos utilizado diferentes herramientas como HTML5, CSS3, SASS, Java Script y React, además de programar nuestro propio servidor con NODE JS y su módulo Express JS.

Para ver el proyecto tienes dos opciones: hacer click [aquí](https://delicious-profile-card.herokuapp.com/), o instalarlo en tu ordenador.

## Instalación

1.	Clonar este repositorio
2.	Introducir en la terminal npm install
3.	Introducir en la terminal npm start para poder hacer cambios y verlos a tiempo real
4.	Introducir en la terminal npm install express
5.	Introducir en la terminal npm install cors
6.	Introducir en la terminar npm build


## Descripción

La SPA (Single Page Application) empieza con una sencilla “landing” que consta del logotipo, un footer y una somera descripción tanto escrita como visual a través de tres iconos, en donde la usuaria puede ver en qué consiste la web. Dándole al botón `COMENZAR` le redirige a la denominada “cardpage”, que es el contenido principal. 
La interfaz se divide verticalmente en el header, protagonizado por el logotipo, el main, donde se sitúa la propia aplicación, y el footer. En la horizontal, el main se subdivide en una mitad izquierda que recoge el formulario, y la otra mitad derecha, donde se previsualiza la tarjeta a la vez que la usuaria va interactuando. 
A su vez, el formulario está estructurado en tres partes en la vertical: la primera es la sección “diseña”, donde ponemos a disposición de la usuaria cuatro paletas de color con distintas tonalidades; la segunda es la parte de “rellena”, donde se tienen que introducir los datos que conformarán la tarjeta, así como una fotografía; y la tercera es el botón de `CREAR TARJETA`.


## Estructura del proyecto
```
Delicious Profile Card
├── docs
├── node_modules
├── public
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── CardPage.js
│   │   ├── Collapsable.js
│   │   ├── Design.js
│   │   ├── Fill.js
│   │   ├── Footer.js
│   │   ├── Form.js
│   │   ├── GetAvatar.js
│   │   ├── Header.js
│   │   ├── Input.js
│   │   ├── LandingPage.js
│   │   ├── LandingPage.js
│   │   ├── LandingPage.js
│   │   ├── LandingPage.js
│   │   ├── LandingPage.js
│   │   ├── LandingPage.js
│   │   └── Main.js

│   ├── images
│   │    ├── background.gif
│   │    ├── header_image.gif
│   │    ├── header_logo.png
│   │    ├── rick_morty_mobile.jpg
│   │    ├── rick_morty_tablet.jpg
│   │    └── rick_morty_desktop.jpg
│   ├── services
│   │    ├── api.js
│   │    └── localStorage.js
│   ├── stylesheets
│   │   ├── core
│   │   │   ├── _reset.scss
│   │   │   └── _variables.scss
│   │   ├── layout
│   │   │   ├── _characterCard.scss
│   │   │   ├── _characterDetail.scss
│   │   │   ├── _characterList.scss
│   │   │   ├── _filterByGender.scss
│   │   │   ├── _filterByName.scss
│   │   │   ├── _filterBySpecies.scss
│   │   │   ├── _filterByStatus.scss
│   │   │   ├── _filters.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _loading.scss
│   │   ├── pages
│   │   │   └── index.scss
│   │   └── App.scss
│   └── index.js
├── .gitignore
├── debug.log
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
