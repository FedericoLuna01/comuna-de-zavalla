import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export const INFO_ITEMS = [
  {
    id: 1,
    title: 'Teléfono',
    label: '+54 9 341 3 15 16 17',
    icon: <BsFillTelephoneFill size={40} color='#FEDB27' />,
    href: 'callto:+5493413151617',
  },
  {
    id: 2,
    title: 'Email',
    label: 'correo@correo.com',
    icon: <HiMail size={40} color='#38CDED' />,
    href: 'mailto:correo',
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
    label: 'Lugares',
    href: '/#lugares',
  },
  {
    id: 3,
    label: 'Proyectos',
    href: '/#proyectos',
  },
  {
    id: 4,
    label: 'Contacto',
    href: '/#contacto',
  }
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
    title: 'Nueva pagina web',
  }
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