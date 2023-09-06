import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { PiFireExtinguisherFill, PiPoliceCar } from 'react-icons/pi'

export const INFO_ITEMS = [
  {
    id: 1,
    title: 'Teléfono',
    label: '+54 9 341 3 15 16 17',
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
    label: 'Lunes a Viernes de 9 a 18hs',
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
    href: '/#noticias',
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
    number: '100',
    icon: <PiFireExtinguisherFill color='#C4D42D' size={80} />
  },
  {
    id: 2,
    title: 'Policía',
    number: '100',
    icon: <PiPoliceCar color='#C4D42D' size={80} />
  },
]

export const PLACES_ITEMS = [
  {
    id: 1,
    title: 'Parque villarino',
    ubication: '',
    description: 'Ocupa 100 hectareas. Es un lugar de recreacion, un espacio que se destaca por su biodiversidad. Las arboledas estas conformadas por 160 especies y diversidad de aves. Se puede visitar de lunes a domingos de 6am a 20pm. En el predio del parque se encuentran la Facultad de Ciencias Agrarias y la Escuela Primaria N° 6371',
    image: ''
  }
]

export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Reformas en el SAMCo.',
    category: 'Salud',
    description: 'A partir de incesantes gestiones, la Comuna de Zavalla logró que pasen a planta provincial dos médicos para la atención en el SAMCo local. Siendo así, los $3.000.000 en fondos que hasta este momento se aportaban desde la Comuna colaborando con las guardias médicas, serán reasignados a la ampliación edilicia del SAMCo. Compartimos imágenes de cómo se llevarán a cabo las reformas del SAMCo Provincial con fondos comunales.',
    img: '/samco.jpg'
  },
  {
    id: 2,
    title: 'Secretaria de Salud y Desarrollo Social.',
    category: 'Salud',
    description: 'Luego de la pandemia se inauguró el Centro de Rehabilitación Ramón Carrillo. Se amplió tanto en servicios como ediliciamente. Se incorporaron cuatro nuevos kinesiólogos al servicio de la localidad. El SUM cuenta con más de 80 pacientes que se atienden de mañana y de tarde. Estos servicios son de carácter gratuito, para TODOS.Planificamos, Hacemos y Cumplimos.',
    img: '/sum.png'
  },
  {
    id: 3,
    title: 'Pavimentación en Boulevard Teruggi.',
    category: 'Obras',
    description: 'Finalizamos la primera parte de la obra de pavimentación del Bv Teruggi de oeste a este. La misma ya se encuentra habilitada para circular. Continuaremos con la segunda parte. Con compromiso y dedicación, continuamos trabajando.',
    img: '/pavimentacion.jpg'
  },
  {
    id: 4,
    title: 'Transformación de los ex Silos.',
    category: 'Obras',
    description: 'Hermosa jornada la que vivimos. Jóvenes y adultos estuvieron expresando sus propuestas para el gran proyecto: "Transformación del Nuevo Predio Deportivo - Cultural". Este es un nuevo espacio pensado para TODOS los ciudadanos de Zavalla.',
    img: '/pavimentacion.jpg'
  },
  {
    id: 5,
    title: 'LOTEO PÚBLICO - PRIVADO VALENTINI.',
    category: 'Obras',
    description: 'La Comuna de Zavalla comunica la aprobación definitiva del loteo público - privado Valentini. Con mucho esfuerzo y años de trabajo, vecinos y vecinas de nuestra localidad podrán acceder al sueño del terreno propio. En estos 8 años de gestión seguimos cumpliendo. Sumando este nuevo loteo, llegamos al total de 100 familias beneficiadas.',
    img: '/loteo-valentini.jpg'
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