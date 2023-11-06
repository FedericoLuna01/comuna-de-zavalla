import { News } from "@/types/types";
import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { PiFireExtinguisherFill, PiPoliceCar } from 'react-icons/pi'

export const INFO_ITEMS = [
  {
    id: 1,
    title: 'Teléfono',
    label: '0341 497-0038',
    icon: <BsFillTelephoneFill size={40} color='#FEDB27' />,
    href: 'callto:+5493413151617',
  },
  {
    id: 3,
    title: 'Dirección',
    label: 'Calle Sarmiento 3385',
    icon: <FaMapMarkerAlt size={40} color='#D570B2' />,
    href: 'googlemaps.com',
  },
  {
    id: 4,
    title: 'Horario',
    label: 'Lunes a Viernes de 7 a 13hs',
    icon: <BsClockFill size={40} color='#EA3D3F' />,
    href: '#contacto',
  }
]

export const MENU_ITEMS = [
  {
    id: 1,
    label: 'Inicio',
    href: '/#inicio',
  },
  {
    id: 2,
    label: 'Noticias',
    href: '/noticias',
  },
  {
    id: 3,
    label: 'Licencia',
    href: '/licencia-de-conducir',
  },
  {
    id: 4,
    label: 'Contacto',
    href: '/#contacto',
  }
]

export const PHONES_ITEMS = [
  {
    id: 1,
    title: 'Bomberos',
    number: '4970851 o 4970026',
    icon: <PiFireExtinguisherFill color='#C4D42D' size={80} />
  },
  {
    id: 2,
    title: 'Policía',
    number: '4970037',
    icon: <PiPoliceCar color='#C4D42D' size={80} />
  },
]

export const NEWS_ITEMS: News[] = [
  {
    id: 11,
    title: 'Continuamos con las Charlas de Prevención: "Digamos NO a las drogas"',
    category: 'Educación',
    description: 'Estuvimos en la escuela Joaquina Villarino de Soage N 6371, donde interactuamos con los alumnos de 7mo grado sobre la problemática. El objetivo del encuentro fue informar y concientizar sobre la problemática del consumo de sustancias, haciendo énfasis en abocarse a actividades deportivas como recreativas en pos de reflotar los valores para una vida sana y sin adicciones.',
    img: '/no-drogas.webp'
  },
  {
    id: 10,
    title: 'Producción y Empleo',
    category: 'Obras',
    description: 'Gracias al Ministro Sergio Massa, Zavalla tiene en marcha tres obras que impactan beneficiosamente en la Economía de nuestro pueblo: Obra de Cloacas y Saneamiento Ambiental, Almacén Agroecológico y Molino Agroecológico. Con estos beneficios, se crearon 20 puestos de trabajo de forma directa. Esto nutre el movimiento comercial de empresas locales. Planificamos, Hacemos y Cumplimos.',
    img: '/produccion-empleo.webp'
  },
  {
    id: 9,
    title: 'Zavalla Recicla.',
    category: 'Obras',
    description: 'La Comuna recicla el 100% de los Residuos Urbanos (verdes, derivados de la poda y escamonda). En 1 año de gestión de residuos, ingresaron al Predio 1.124 Camiones. Se reclicaron: Cartón 9.336 Kilos. Plásticos 16.164 Kilos. Chatarra 23.052 Kilos. Cubiertas 160 Unidades. Madera 21.350 Kilos. Beneficiando la Economía Circular.',
    img: '/zavalla-recicla.webp'
  },
  {
    id: 8,
    title: 'Grandes cambios para el SAMCo.',
    category: 'Salud',
    description: 'Prontamente la Comuna con fondos propios estará comenzando la ampliación y modernización del SAMCO Provincial, es por ello que se ha removido el consultorio modular que se encontraba en el frente del edificio. Este importante aporte de la Comuna, se realiza con fondos locales y con la decisión de la Gestión actual, siendo que el SAMCO en su infraestructura y atención primaria es responsabilidad del Gobierno Provincial. Agradecemos a Alejandro Anisetti y su familia profundamente, por la colaboración con el consultorio móvil utilizado por los y las zavallenses durante todo este tiempo.',
    img: '/samco.webp'
  },
  {
    id: 7,
    title: 'Construcción del edificio escolar “E.E.S.O 605°”.',
    category: 'Educación',
    description: 'Con una inversión de más de $500.000.000 la concreción de la escuela secundaria es un hecho histórico para nuestro pueblo. La obra es producto del esfuerzo constante de muchas personas que hicieron a la realización de este sueño: directivos, ex directivos, profesoras y profesores, grupos de padres y vecinos. Planificamos, Hacemos y Cumplimos.',
    img: '/edificio-escolar.webp'
  },
  {
    id: 6,
    title: 'Estamos renovando la Plaza Central, ya falta menos para que podamos disfrutarla.',
    category: 'Obras',
    description: 'Con orgullo y pasión, estamos haciendo una gran transformación. Creando un espacio agradable y seguro donde nuestros hijos y seres queridos puedan compartir momentos inolvidables. Transformando nuestros espacios, también nos transformamos a nosotros mismos, sabiendo que para crecer hay que hacer. Planificamos, Cumplimos y Hacemos.',
    img: '/plaza-renovada.webp'
  },
  {
    id: 2,
    title: 'Secretaria de Salud y Desarrollo Social.',
    category: 'Salud',
    description: 'Luego de la pandemia se inauguró el Centro de Rehabilitación Ramón Carrillo. Se amplió tanto en servicios como ediliciamente. Se incorporaron cuatro nuevos kinesiólogos al servicio de la localidad. El SUM cuenta con más de 80 pacientes que se atienden de mañana y de tarde. Estos servicios son de carácter gratuito, para TODOS.Planificamos, Hacemos y Cumplimos.',
    img: '/sum.webp'
  },
  {
    id: 3,
    title: 'Pavimentación en Boulevard Teruggi.',
    category: 'Obras',
    description: 'Finalizamos la primera parte de la obra de pavimentación del Bv Teruggi de oeste a este. La misma ya se encuentra habilitada para circular. Continuaremos con la segunda parte. Con compromiso y dedicación, continuamos trabajando.',
    img: '/pavimentacion.webp'
  },
  {
    id: 4,
    title: 'Transformación de los ex Silos.',
    category: 'Obras',
    description: 'Hermosa jornada la que vivimos. Jóvenes y adultos estuvieron expresando sus propuestas para el gran proyecto: "Transformación del Nuevo Predio Deportivo - Cultural". Este es un nuevo espacio pensado para TODOS los ciudadanos de Zavalla.',
    img: '/silos.webp'
  },
  {
    id: 5,
    title: 'Loteo público - privado Valentini.',
    category: 'Obras',
    description: 'La Comuna de Zavalla comunica la aprobación definitiva del loteo público - privado Valentini. Con mucho esfuerzo y años de trabajo, vecinos y vecinas de nuestra localidad podrán acceder al sueño del terreno propio. En estos 8 años de gestión seguimos cumpliendo. Sumando este nuevo loteo, llegamos al total de 100 familias beneficiadas.',
    img: '/loteo-valentini.webp'
  },
]

export const SOCIALS_ITEMS = [
  {
    id: 1,
    title: 'Instagram',
    href: 'https://www.instagram.com/comunazavalla/'
  },
  {
    id: 2,
    title: 'Facebook',
    href: 'https://www.facebook.com/ComunaDeZavalla?ref=embed_page'
  }
]

export const LICENCIA_ITEMS = [
  {
    id: 1,
    title: '¿Cuál es el horario de atención?',
    content: 'De lunes a viernes de 7 a 13 h.',
  },
  {
    id: 2,
    title: '¿Hay un número de atención?',
    content: 'Si, podés llamar al 341 651 5933',
  },
  {
    id: 3,
    title: '¿Que documentación necesito?',
    content: 'Necesitas llevar una fotocopia de tu DNI, frente y dorso. En caso de renovación tambien llevá tu carnet de conducir',
  },
  {
    id: 4,
    title: '¿A donde debo ir?',
    content: 'Bv. Teruggi y Moreno, en el Predio del Ferrocarril',
  },
]