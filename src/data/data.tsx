import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export const INFO_ITEMS = [
  {
    id: 1,
    title: 'Teléfono',
    label: '+54 9 341 3 15 16 17',
    icon: <BsFillTelephoneFill />,
  },
  {
    id: 2,
    title: 'Email',
    label: 'correo@correo.com',
    icon: <HiMail size={20} />,
  },
  {
    id: 3,
    title: 'Dirección',
    label: 'Calle falsa 123',
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 4,
    title: 'Horario',
    label: 'Lunes a Viernes de 9 a 18hs',
    icon: <BsClockFill />,
  }
]

export const MENU_ITEMS = [
  {
    id: 1,
    label: 'Inicio',
    href: '#inicio',
  },
  {
    id: 2,
    label: 'Lugares',
    href: '#lugares',
  },
  {
    id: 3,
    label: 'Proyectos',
    href: '#proyectos',
  },
  {
    id: 4,
    label: 'Contacto',
    href: '#contacto',
  }
]