// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header.js'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'
import { footer } from './componentes/footer'

document.querySelector('#header').innerHTML = header.template
header.script()

document.querySelector('#footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home

// const user = await Habitacion.getAllById(2)
// console.log(user)

window.location = '/#/home'
