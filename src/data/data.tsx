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
    title: 'Cuál es el horario de atención?',
    content: 'De lunes a viernes de 7 a 13hs',
    color: 'primary.100'
  },
  {
    id: 2,
    title: 'Hay un número de atención?',
    content: 'Si, podés llamar al 3416515933',
    color: 'primary.100'
  },
  {
    id: 3,
    title: 'Que documentación necesito?',
    content: 'Necesitas llevar una fotocopia de tu DNI, frente y dorso, y tu carnet de conducir',
    color: 'primary.100'
  },
  {
    id: 4,
    title: 'A donde debo ir?',
    content: 'Bv. Terugi y Moreno, en el galpón',
    color: 'primary.100'
  },
]