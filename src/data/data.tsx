import { News } from "@/types/types";
import { BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiFireExtinguisherFill, PiPoliceCar } from "react-icons/pi";

export const INFO_ITEMS = [
  {
    id: 1,
    title: "Teléfono",
    label: "0341 497-0038",
    icon: <BsFillTelephoneFill size={40} color="#FEDB27" />,
    href: "callto:+5493413151617",
  },
  {
    id: 3,
    title: "Dirección",
    label: "Calle Sarmiento 3385",
    icon: <FaMapMarkerAlt size={40} color="#D570B2" />,
    href: "googlemaps.com",
  },
  {
    id: 4,
    title: "Horario",
    label: "Lunes a Viernes de 7 a 13hs",
    icon: <BsClockFill size={40} color="#EA3D3F" />,
    href: "#contacto",
  },
];

export const MENU_ITEMS = [
  {
    id: 1,
    label: "Inicio",
    href: "/#inicio",
  },
  {
    id: 2,
    label: "Noticias",
    href: "/noticias",
  },
  {
    id: 3,
    label: "Licencia",
    href: "/licencia-de-conducir",
  },
  {
    id: 4,
    label: "Contacto",
    href: "/#contacto",
  },
];

export const PHONES_ITEMS = [
  {
    id: 1,
    title: "Bomberos",
    number: "4970851 o 4970026",
    icon: <PiFireExtinguisherFill color="#C4D42D" size={80} />,
  },
  {
    id: 2,
    title: "Policía",
    number: "4970037",
    icon: <PiPoliceCar color="#C4D42D" size={80} />,
  },
];

export const NEWS_ITEMS: News[] = [
  {
    id: 40,
    title: "Capacitación de RCP y Primeros Auxilios",
    category: "Salud",
    description:
      "El SAMCo local brinda capacitaciones en los colegios secundarios. El objetivo es enseñar a los estudiantes los conceptos básicos sobre la maniobra para aplicar una reanimación cardiovascular eficaz. Agradecemos al personal del SAMCo y al Ministerio de Salud por su colaboración.",
    img: "/noticias/rcp_primeros_auxilios.webp",
  },
  {
    id: 41,
    title: "Campaña de prevención contra el Cáncer de Colon",
    category: "Salud",
    description:
      "El Lalcec Zavalla en conjunto con el Samco Zavalla, invitaron a participar de un recorrido único dentro de un colon inflable. El motivo era concientizar a la comunidad sobre esta enfermedad y promover hábitos de vida saludable. Felicitamos y agradecemos el gran trabajo que hacen por nuestra localidad.",
    img: "/noticias/prevencion_cancer_colon.webp",
  },
  {
    id: 42,
    title: "Campaña de Vacunación",
    category: "Salud",
    description:
      "La Comuna continua vacunando contra la gripe, la fiebre hemorrágica y el COVID-19. Si estás interesado comunícate con el SAMCo Local, 4970 326.",
    img: "/noticias/campana_vacunacion.webp",
  },
  {
    id: 43,
    title: "Servicio de Helicóptero UTV",
    category: "Salud",
    description:
      "La Comuna contrató el servicio de helicóptero UTV. Durante meses, la empresa capacitó al personal de bomberos voluntarios y de salud de nuestra comunidad. Comunicamos así la valiosa labor que gestionó la Comuna, fortaleciendo la salud del pueblo. Este servicio actúa en emergencias para toda la comunidad de Zavalla.",
    img: "/noticias/servicio_helicoptero_utv.webp",
  },
  {
    id: 36,
    title: "¡Fumigación de mosquitos!",
    category: "Servicios",
    description:
      "Continuamos con el cronograma de tratamiento de mosquitos y vectores. Seguimos trabajando para evitar la transmisión de enfermedades. Colaborá cortando tu césped, limpiando utensilios donde se pueda acumular agua.",
    img: "/noticias/fumigacion_mosquitos.webp",
  },
  {
    id: 37,
    title: "Asesoramiento Jurídico Gratuito",
    category: "Servicios",
    description:
      "Los esperamos todos los viernes, en calle Sarmiento 3385 de 9:30 a 10:30h. Consultas: Regularización de inmuebles. - Derechos Laborales / Derechos de la Familia. - Prestaciones Anses: Jubilaciones, Pensiones, AUH. - Pedido de partidas de nacimiento, matrimonio y defunción. - Regulación Dominial. - Boleto Educativo Gratuito. - Violencia de Género.",
    img: "/noticias/asesoramiento_juridico.webp",
  },
  {
    id: 39,
    title: "Fortalecimiento a Nuestras Instituciones. ",
    description:
      "La  Comuna de Zavalla, viene trabajando de manera conjunta con las instituciones de Zavalla. Durante este último tiempo se le fue otorgando asistencias económicas y sociales. Bomberos Voluntarios, AIAM, Infantiles Zavallanses, Unidos Atlético Club y  CAZ, recibieron estos aportes que fueron fundamentales para afrontar el trabajo de las instituciones locales.",
    category: "Deportes",
    img: "/noticias/fortalecimiento_instituciones.webp",
  },
  {
    id: 35,
    title: "Talleres en el Predio del Ferrocarril",
    category: "Cultura",
    description:
      "En el Predio del Ferrocarril, venimos trabajando en cultura. Realizamos talleres para todas las edades, niños, jóvenes y adultos de nuestro pueblo. Día a día, el galpón del Ferrocarril está abierto, para que cada ciudadano de Zavalla disfrute de talleres de orquesta, folclore, tango, diseño, canto, crochet, mosaiquismo, pintura y reciclado, arte y memoria. Estos cursos son de carácter gratuito permitiendo que todos los interesados puedan participar.",
    img: "/noticias/ferrocarril.webp",
  },
  {
    id: 33,
    title: "¡Colonia de Verano!",
    category: "Cultura",
    description:
      "Todas los años, realizamos la Colonia de Vacaciones en el Centro de Empleados de Comercio. Cada niña y niño, puede disfrutar del verano. Hubieron juegos, risas y mucha diversión. Agradecemos a Empleados de Comercio por brindarnos las comodidades de sus instalaciones.",
    img: "/noticias/colonia_verano.webp",
  },
  {
    id: 34,
    title: "¡Taller de Mecánica!",
    category: "Cultura",
    description:
      "Destinado a todas aquellas personas que deseen realizar trabajos de mecánica, posean o no conocimientos previos, como así también para aquellas que quieran profundizar saberes.",
    img: "/noticias/taller_mecanica.webp",
  },
  {
    id: 18,
    title: "Recambio de Bomba de Agua en Punta Chacra",
    category: "Obras",
    description:
      "Se cambió una bomba de agua en Punta Chacra debido a la rotura de la misma. Esta inversión beneficiará a todos los vecinos del barrio y tendrá un costo de $2.500.000.",
    img: "/noticias/recambio_bomba_agua.webp",
  },
  {
    id: 19,
    title: "Pavimentación en Barrio Punta Chacra",
    category: "Obras",
    description:
      "Continuamos realizando refacciones que consisten en la colocación de hormigón en calle Teruggi desde Laprida hasta Los Lapachos. En este momento de crisis, con parálisis a nivel nacional de las obras públicas, la Comuna continúa transformando los barrios.",
    img: "/noticias/pavimentacion_barrio.webp",
  },
  {
    id: 20,
    title: "Transformación de los Silos",
    category: "Obras",
    description:
      "Nos encontramos en la etapa de desmantelamiento. Seguimos trabajando y avanzando en la obra.",
    img: "/noticias/transformacion_silos.webp",
  },
  {
    id: 21,
    title: "Obras en Barrio Primavera",
    category: "Obras",
    description:
      "Estamos trabajando en la colocación de hormigón sobre la ochava de la Escuela E.E.S.O Nº 605. Con compromiso y dedicación, seguimos trabajando.",
    img: "/noticias/obras_barrio_primavera.webp",
  },
  {
    id: 22,
    title: "Continuamos Pavimentando",
    category: "Obras",
    description:
      "Continuamos realizando refacciones que consisten en la colocación de hormigón. Estamos trabajando en calle Teruggi y Laprida.",
    img: "/noticias/continuamos_pavimentando.webp",
  },
  {
    id: 23,
    title: "Renovamos la Plaza Central",
    category: "Obras",
    description:
      "Con orgullo y pasión, hicimos una gran transformación. Creando un espacio agradable y seguro donde nuestros hijos y seres queridos puedan compartir momentos inolvidables. Transformando nuestros espacios, también nos transformamos a nosotros mismos, sabiendo que para crecer hay que hacer.",
    img: "/noticias/renovamos_plaza_central.webp",
  },
  {
    id: 24,
    title: "Trabajos en la Garita Central",
    category: "Obras",
    description:
      "Se desarrollaron tareas de mejoramiento y pintura en la parada de colectivos de calle RN 33 y Bv Villarino. Con compromiso y dedicación, seguimos creciendo.",
    img: "/noticias/trabajos_garita_central.webp",
  },
  {
    id: 25,
    title: "Construcción en el Edificio Escolar 'E.E.S.O Nº 605'",
    category: "Obras",
    description:
      "La obra que gestionó la actual Comuna, y que gracias a padres, directivos y ex directivos se hizo realidad después de 16 años, sigue avanzando. Además, la Gestión de Guillermo Rajmil, con recursos propios, estuvo trabajando en la pavimentación de las arterias que unen la manzana del edificio con la RN33. Agradecemos al Gobierno Provincial por dar continuidad a la obra que demanda una inversión mayor a los 4.174.000.000 millones de pesos.",
    img: "/noticias/construccion_edificio_escolar.webp",
  },
  {
    id: 26,
    title: "Ingreso al Parque Villarino",
    category: "Obras",
    description:
      "La Comuna con Vialidad Provincial, llevaron adelante el proyecto de infraestructura para el ingreso de RN 33 a la facultad de Ciencias Agrarias. Esta obra que costó $15.000.000 tendrá un impacto enorme en nuestro pueblo, ya que permitirá una mejor movilización para estudiantes y vecinos de la zona.",
    img: "/noticias/ingreso_parque_villarino.webp",
  },
  {
    id: 27,
    title: "Producción Agroecológica, Valor Agregado y Perspectiva de Género",
    category: "Obras",
    description:
      "La Comuna, en conjunto con propietarios de un molino, crearon una cooperativa para su funcionamiento. En la misma se producirá harina integral de trigo y el objetivo es que el producto llegue a todas las familias de Zavalla, como así también de las localidades aledañas. Cabe destacar también, su fuerte impacto social ya que tendrá una perspectiva de género, realizando las actividades solo mujeres. Con la concreación de este proyecto podemos decir que los productos realizados serán agroecológicos, es decir, no se utilizarán fitosanitarios. Seguimos avanzando generando valor agregado local, creando puestos de trabajo en nuestro pueblo.",
    img: "/noticias/produccion_agroecologica.webp",
  },
  {
    id: 28,
    title: "Fábrica de Bioinsumos",
    category: "Obras",
    description:
      "Estamos orgullosos del trabajo que se viene realizando en la bio fábrica. La producción es constante, actualmente se está produciendo Super Magro, biopreparado que se va a aplicar durante la siembra de trigo junto con el Purin de Ortiga y Cola de Caballo. Las mujeres que allí trabajan también brindan capacitaciones a personas y/o agrupaciones que se quieren interiorizar en la producción o utilización de biopreparados. Por otro lado, se está trabajando de forma articulada con la Facultad de Ciencias Agrarias.",
    img: "/noticias/fabrica_bioinsumos.webp",
  },
  {
    id: 29,
    title: "Nuevas Luces LED",
    category: "Obras",
    description:
      "Se colocaron más de 1100 luminarias LED en toda la localidad. Hoy nuestro pueblo se ve renovado con este tipo de iluminación, esto no sólo embellece a Zavalla, sino que también nos permite ahorrar la mitad de la energía ya que tienen menor costo de mantenimiento y proporcionan una mejor visibilidad.",
    img: "/noticias/nuevas_luces_led.webp",
  },
  {
    id: 30,
    title: "Parque del Encuentro",
    category: "Obras",
    description:
      "Las niñas y los niños de Zavalla ya pueden disfrutar del nuevo parque. El mismo cuenta con juegos recreativos, bebederos, bancos y luminarias para este importante proyecto.",
    img: "/noticias/parque_del_encuentro.webp",
  },
  {
    id: 31,
    title: "Máquinas y Herramientas",
    category: "Obras",
    description:
      "La Comuna de Zavalla adquirió una nueva flota de equipos para prestar una mejor calidad de servicio. A través del plan 'Equipar Santa Fe' la Comuna incorporó un tractor y una pala con retroexcavadora New Holland 0km. Con recursos propios, una pala frontal 0 km, una pick up S 10, un camión Fiat Iveco con caja compactadora para mejorar el servicio de recolección domiciliaria, un Renault Scénic y un utilitario Renault 0 km para traslado de personas. Se gestionó a través del Gobierno Provincial un camión Mercedes Benz para implementar el sistema de volquetes y se incorporó una trafic Renault donada por la EPE. La ampliación y renovación de maquinarias es un gran beneficio para el pueblo e incentiva a continuar con más obras.",
    img: "/noticias/maquinas_herramientas.webp",
  },
  {
    id: 32,
    title: "Centro de Otorgamiento de Licencias de Conducir",
    category: "Obras",
    description:
      "El Dr Guillermo Rajmil, inauguró las obras en el Galpón del Ferrocarril. Con una inversión importante, se llevó a cabo la construcción del Centro de Otorgamiento de Licencias de Conducir y el nuevo Espacio Cultural Predio del Ferrocarril. Este último, será destinado a actividades educativas y culturales. Ambos cuentan con todas las comodidades y servicios para uso y atención al público.",
    img: "/noticias/centro_otorgamiento_licencias.webp",
  },
  {
    id: 17,
    title: "¡SANEAMIENTO AMBIENTAL CLOACAS!",
    category: "Obras",
    description:
      "La Comuna de Zavalla comunica una obra histórica para la vida del pueblo.Nos encontramos ante un hecho que mejora nuestra vida y la de las próximas generaciones.La obra de cloaca, con una inversión de $1.100.000.000 es una realidad.Presentamos al pueblo los piletones de saneamiento ambiental cuyo movimiento de suelo se encuentra terminado.Planificamos, Hacemos, Cumplimos.",
    img: "/noticias/cloacas.webp",
  },
  {
    id: 16,
    title: "Helicóptero UTV",
    description:
      "La Comuna de Zavalla tiene contratado el servicio de helicóptero UTV desde el mes de Julio a esta parte, capacitando a la empresa contratada a personal de bomberos y de salud de nuestra comunidad.Comunicamos así la valiosa labor que gestionó la Comuna, fortaleciendo la salud del pueblo. Este servicio actúa en emergencias para toda la comunidad de Zavalla.",
    category: "Salud",
    img: "/noticias/helicoptero.webp",
  },
  {
    id: 14,
    title: 'Continuamos trabajando en lo que será el "Almacén Agroecológico"',
    category: "Obras",
    description:
      "En esta primera etapa se trabajó en la colocación de los cimientos del ALMACÉN AGROECOLÓGICO Y LA FÁBRICA DE FIDEOS.El origen del proyecto es potenciar la producción y la posibilidad de nuevos PUESTOS DE TRABAJO PARA LOS ZAVALLENSES.El futuro Almacén, articulado entre la Comuna, la Cooperativa de trabajo de Zavalla y la Cooperativa de trabajo agroecológica por mujeres de Zavalla limitada, generará valor agregado a la producción primaria del periurbano, tanto local como de zonas aledañas. A través de la elaboración y fraccionado de harinas, sémolas y legumbres se genera empleo local, especialmente centrado en la perspectiva de género.• Promovemos la producción de productos agroecológicos de calidad y a un precio accesible para el consumidor.• Fomentamos la producción agroecológica local y de zonas aledañas.",
    img: "/noticias/almacen-agroecologico.webp",
  },
  {
    id: 13,
    title: "¡Continuamos con más calles de hormigón!",
    category: "Obras",
    description:
      "Estuvimos trabajando en la ochava de calle Illia y San Martín. Seguimos avanzando y transformando nuestro pueblo.Zavalla crece.",
    img: "/noticias/obras-pavimentacion.webp",
  },
  {
    id: 12,
    title: "Se instaló 4 puntos verdes en los distintos barrios de Zavalla.",
    category: "Obras",
    description:
      "El objetivo es implementar acciones que disminuyan el impacto ambiental y social producido por los residuos.Desde la Comuna se invita a los vecinos a sumarse al reciclado y ser actor del cuidado del medio ambiente. Los Puntos Verdes se encuentran en: San Martin y Villarino (Plaza Central), Teruggi y Villarino, French y Villarino, Teruggi y Las Palmeras (Barrio Punta Chacra). Identificación: Verde: Plásticos (Botellas y Bidones), Amarillo: Vidrios y Aluminios (Botellas, Frascos, Aerosoles y Latas de Bebidas), Azul: Cartón (Papel).Planificamos, Hacemos y Cumplimos.",
    img: "/noticias/reciclaje.webp",
  },
  {
    id: 11,
    title:
      'Continuamos con las Charlas de Prevención: "Digamos NO a las drogas"',
    category: "Educación",
    description:
      "Estuvimos en la escuela Joaquina Villarino de Soage N 6371, donde interactuamos con los alumnos de 7mo grado sobre la problemática. El objetivo del encuentro fue informar y concientizar sobre la problemática del consumo de sustancias, haciendo énfasis en abocarse a actividades deportivas como recreativas en pos de reflotar los valores para una vida sana y sin adicciones.",
    img: "/noticias/no-drogas.webp",
  },
  {
    id: 10,
    title: "Producción y Empleo",
    category: "Obras",
    description:
      "Gracias al Ministro Sergio Massa, Zavalla tiene en marcha tres obras que impactan beneficiosamente en la Economía de nuestro pueblo: Obra de Cloacas y Saneamiento Ambiental, Almacén Agroecológico y Molino Agroecológico. Con estos beneficios, se crearon 20 puestos de trabajo de forma directa. Esto nutre el movimiento comercial de empresas locales. Planificamos, Hacemos y Cumplimos.",
    img: "/noticias/produccion-empleo.webp",
  },
  {
    id: 8,
    title: "Grandes cambios para el SAMCo.",
    category: "Salud",
    description:
      "Prontamente la Comuna con fondos propios estará comenzando la ampliación y modernización del SAMCO Provincial, es por ello que se ha removido el consultorio modular que se encontraba en el frente del edificio. Este importante aporte de la Comuna, se realiza con fondos locales y con la decisión de la Gestión actual, siendo que el SAMCO en su infraestructura y atención primaria es responsabilidad del Gobierno Provincial. Agradecemos a Alejandro Anisetti y su familia profundamente, por la colaboración con el consultorio móvil utilizado por los y las zavallenses durante todo este tiempo.",
    img: "/noticias/samco.webp",
  },
  {
    id: 7,
    title: "Construcción del edificio escolar “E.E.S.O 605°”.",
    category: "Educación",
    description:
      "Con una inversión de más de $500.000.000 la concreción de la escuela secundaria es un hecho histórico para nuestro pueblo. La obra es producto del esfuerzo constante de muchas personas que hicieron a la realización de este sueño: directivos, ex directivos, profesoras y profesores, grupos de padres y vecinos. Planificamos, Hacemos y Cumplimos.",
    img: "/noticias/edificio-escolar.webp",
  },
  {
    id: 6,
    title:
      "Estamos renovando la Plaza Central, ya falta menos para que podamos disfrutarla.",
    category: "Obras",
    description:
      "Con orgullo y pasión, estamos haciendo una gran transformación. Creando un espacio agradable y seguro donde nuestros hijos y seres queridos puedan compartir momentos inolvidables. Transformando nuestros espacios, también nos transformamos a nosotros mismos, sabiendo que para crecer hay que hacer. Planificamos, Cumplimos y Hacemos.",
    img: "/noticias/plaza-renovada.webp",
  },
  {
    id: 2,
    title: "Secretaria de Salud y Desarrollo Social.",
    category: "Salud",
    description:
      "Luego de la pandemia se inauguró el Centro de Rehabilitación Ramón Carrillo. Se amplió tanto en servicios como ediliciamente. Se incorporaron cuatro nuevos kinesiólogos al servicio de la localidad. El SUM cuenta con más de 80 pacientes que se atienden de mañana y de tarde. Estos servicios son de carácter gratuito, para TODOS.Planificamos, Hacemos y Cumplimos.",
    img: "/noticias/sum.webp",
  },
  {
    id: 3,
    title: "Pavimentación en Boulevard Teruggi.",
    category: "Obras",
    description:
      "Finalizamos la primera parte de la obra de pavimentación del Bv Teruggi de oeste a este. La misma ya se encuentra habilitada para circular. Continuaremos con la segunda parte. Con compromiso y dedicación, continuamos trabajando.",
    img: "/noticias/pavimentacion.webp",
  },
  {
    id: 4,
    title: "Transformación de los ex Silos.",
    category: "Obras",
    description:
      'Hermosa jornada la que vivimos. Jóvenes y adultos estuvieron expresando sus propuestas para el gran proyecto: "Transformación del Nuevo Predio Deportivo - Cultural". Este es un nuevo espacio pensado para TODOS los ciudadanos de Zavalla.',
    img: "/noticias/silos.webp",
  },
  {
    id: 5,
    title: "Loteo público - privado Valentini.",
    category: "Obras",
    description:
      "La Comuna de Zavalla comunica la aprobación definitiva del loteo público - privado Valentini. Con mucho esfuerzo y años de trabajo, vecinos y vecinas de nuestra localidad podrán acceder al sueño del terreno propio. En estos 8 años de gestión seguimos cumpliendo. Sumando este nuevo loteo, llegamos al total de 100 familias beneficiadas.",
    img: "/noticias/loteo-valentini.webp",
  },
];

export const SOCIALS_ITEMS = [
  {
    id: 1,
    title: "Instagram",
    href: "https://www.instagram.com/comunazavalla/",
  },
  {
    id: 2,
    title: "Facebook",
    href: "https://www.facebook.com/ComunaDeZavalla?ref=embed_page",
  },
];

export const LICENCIA_ITEMS = [
  {
    id: 1,
    title: "¿Cuál es el horario de atención?",
    content: "De lunes a viernes de 7 a 13 h.",
  },
  {
    id: 2,
    title: "¿Hay un número de atención?",
    content: "Si, podés llamar al 341 651 5933",
  },
  {
    id: 3,
    title: "¿Que documentación necesito?",
    content:
      "Necesitas llevar una fotocopia de tu DNI, frente y dorso. En caso de renovación tambien llevá tu carnet de conducir",
  },
  {
    id: 4,
    title: "¿A donde debo ir?",
    content: "Bv. Teruggi y Moreno, en el Predio del Ferrocarril",
  },
];
