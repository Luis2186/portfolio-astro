
const dataUser = {
  // Estado inicial basado en el JSON que proporcionaste
  usuarioId: 1,
  usuarioLog: false,
  firstName: "Luis",
  secondName: "Ignacio",
  firstSurname: "Lopez",
  secondSurname: "Perdomo",
  fullName: "",
  job: "Web Developer",
  dateOfBirth: "14/08/1990",
  location: [
    {
      country: "Uruguay",
      state: "Canelones",
      city: "Lagomar",
      adress: "Becu M42S28",
      zipCode: "15500",
    },
  ],
  cellPhone: "099798465",
  email: "l.lopezperdomo.e@gmail.com",
  presentation: "Soy Analista Programador con más de un año y medio de experiencia en desarrollo de software, especializado en tecnologías como .NET, React, JavaScript y CSS3. Mi enfoque está en el Desarrollo Ágil, siempre buscando soluciones innovadoras y optimizando procesos para garantizar la calidad del código y la satisfacción del cliente.\n A lo largo de mi carrera, he trabajado activamente en el desarrollo y mantenimiento de sistemas, colaborando con equipos multidisciplinarios y aplicando mis conocimientos para mejorar la eficiencia en cada proyecto. Además, me enfoco en el aprendizaje continuo y en aplicar nuevas tecnologías para enfrentar cada desafío con éxito.",
  digitalPlataforms: [
    {
      id: 1,
      nombre:"Instagram",
      url: "https://www.instagram.com/lucho_2186",
      iconClassName: 'bx bxl-instagram',
    },
    {
      id: 2,
      nombre:"Linkedin",
      url: "https://www.linkedin.com/in/luis-lopez-perdomo/",
      iconClassName: 'bx bxl-linkedin',
    },
    {
      id: 3,
      nombre:"GitHub",
      url: "https://github.com/Luis2186",
      iconClassName: 'bx bxl-github',
    },
  ],
  services: [
    {
      id: 1,
      title: "Programación",
      description: "Descripción de programación...",
      iconClassName: "fa-solid fa-code",
    },
    {
      id: 2,
      title: "Formación",
      description: "Descripción de formación...",
      iconClassName: "fa-solid fa-chalkboard-user",
    },
    {
      id: 3,
      title: "Desarrollo Web",
      description: "Descripción de desarrollo web...",
      iconClassName: "fa-solid fa-computer",
    },
  ],
  activeService: {
    id: 0,
    title: "",
    description: "",
    iconClassName: "",
  },
  activeSocialNetwork: {
    id: 0,
    url: "",
    iconClassName: "",
  },
};

export default dataUser;