import Technologies from "../pages/Technologies.astro";

const dataCurriculum ={
    technologies: [
        {
            id:1,
            name:"C#",
            urlImg:"/public/img/cSharp.png"
        },
        {
            id:2,
            name:"JavaScript",
            urlImg:"/public/img/javascript.jpg"
        },        {
            id:3,
            name:"React",
            urlImg:"/public/img/react.png"
        },        {
            id:4,
            name:"css",
            urlImg:"/public/img/css.png"
        }
    ],
    certificates: [
      {
        id: "25522",
        institution: "",
        date: "2023-06-10",
        title:
          "Master en PHP, SQL, POO MVC, Laravel, Symfony, Wordpress y mas.",
        description: "",
      },
      {
        id: "12234",
        institution: "",
        date: "2024-05-10",
        title: "Master en Pruebas Tecnicas: +70 nuevos ejercicios de codigo.",
        description: "",
      },
    ],
    knowledges: [
      {
        id: 1,
        name: "Programacion",
      },
      {
        id: 2,
        name: "Desarrollo web",
      },
      {
        id: 3,
        name: "Diseño Web",
      },
      {
        id: 4,
        name: "Redes Sociales",
      },
      {
        id: 5,
        name: "Comunicación",
      },
      {
        id: 6,
        name: "Edición de videos",
      },
      {
        id: 7,
        name: "Formación",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Diseño Web",
        percentage: 90,
        category: "Diseño",
      },
      {
        id: 2,
        name: "Diseño Mockups",
        percentage: 70,
        category: "Diseño",
      },
      {
        id: 3,
        name: "Diseño Logos",
        percentage: 60,
        category: "Diseño",
      },
      {
        id: 4,
        name: "Diseño Banners",
        percentage: 80,
        category: "Diseño",
      },
      {
        id: 5,
        name: "Javascript",
        percentage: 85,
        category: "Codigo",
      },
      {
        id: 6,
        name: "HTML/CSS",
        percentage: 85,
        category: "Codigo",
      },
      {
        id: 7,
        name: "React",
        percentage: 75,
        category: "Codigo",
      },
      {
        id: 8,
        name: ".NET",
        percentage: 85,
        category: "Codigo",
      },
    ],
    experiences: [
      {
        id: 1,
        period: "Abril-2023 - Actual",
        company: "UTE-TIC",
        title: "Tecnico",
        description:
          "- Realice la actualización de la interfaz de usuario de la aplicación del cuadro de mando de la empresa,utilizando .NET Core con MVC y JavaScript, mejorando la usabilidad y la eficiencia del sistema. - Diseñé e implementé un script con Python para la extracción automatizada de información de recibos, planillas de BPS, planillas de MTSS y certificados, mediante expresiones regulares, optimizando el control del personal tercerizado. Esta solución permitió a la empresa no renovar la licencia del software previamente utilizado y ahorrar 30,000 dólares en costos.",
      },
      {
        id: 2,
        period: "Diciembre 2021 - Enero 2023",
        company: "Resonance",
        title: "Operario de Producción de terminales POS",
        description:
          "- Ejecución de pruebas y configuración de terminales POS, garantizando su óptimo desempeño y fiabilidad.",
      },
      {
        id: 3,
        period: "Noviembre 2013 - Diciembre 2021",
        company: "Ancap Arocena",
        title: "Cajero Administrativo",
        description:
          "- Cobro en la caja, con tarjeta de crédito y en efectivo. - Atención y asesoramiento al cliente. - Proactividad y atención cuidada al cliente para la consecución de los objetivos marcados.",
      },
      {
        id: 4,
        period: "Octubre 2012 - Julio 2013",
        company: "Farmashop",
        title: "Auxiliar de Deposito",
        description:
          "- Registro y envío de pedidos. - Control y seguimiento de pedidos. - Elaboración de inventarios y control de stocks.",
      },
    ],
    formations: [
      {
        id: 1,
        period: "Marzo 2021 - Abril 2024",
        company: "Universidad ORT",
        title: "Analista Programador",
        description: "Finalice correctamente la carrera",
      },
    ],
  }

  export default dataCurriculum;

