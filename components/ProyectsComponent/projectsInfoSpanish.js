import EVA from '../../imgs/EVA.png'
import dogsApp from '../../imgs/dogsApp.png'
import pixelPort from '../../imgs/pixelPort.png'
import rickAndMortyApp from '../../imgs/rickMortyApp.png'
import searchApp from '../../imgs/searchApp.png'
import signUpForm from '../../imgs/signupForm.png'

const proyectsInfo = [
  {
    name: 'Pixel Port',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'El proyecto consiste en un e-commerce de videojuegos que cuenta con la autorización de terceros (Gmail), una pasarela de pagos (Stripe) y la capacidad de enviar correos electrónicos (Nodemailer). Además, se pueden aplicar filtros a los productos según su categoría y plataforma, y también es posible buscar productos por su nombre. El sistema controla la disponibilidad de productos en función de su stock. Existe un rol de usuario administrador con la posibilidad de banear y deshabilitar productos. En mi papel dentro del proyecto, me encargué del desarrollo visual de diversas secciones y de implementar funcionalidades en el backend, como el renderizado de tarjetas, filtros, búsqueda general de productos, entre otras.',
    img: pixelPort,
    repoURL: 'https://github.com/SMiguelA/PF-ECOMMERCE-FRONT'
  },
  {
    name: "EVA's Restaurant",
    techStack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'ASP.NET', 'PostgreSQL'],
    description: "El objetivo central de este proyecto es optimizar la operación del restaurante mediante la implementación de un sistema de información. Se busca agilizar el proceso de registro de pagos, llevar un control preciso del inventario de suministros y mejorar la gestión de los pedidos de los clientes. Además, se pretende garantizar la seguridad de los datos y simplificar el acceso a la información relevante. El sistema resultante permite una operación más eficiente y organizada, beneficiando tanto al equipo interno del restaurante como a la experiencia de los clientes.",
    img: EVA,
    repoURL: 'https://github.com/SMiguelA/EVA'
  },
  {
    name: 'Dogs App',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'Proyecto individual propuesto por el bootcamp HENRY,  consistió en desarrollar una aplicación sobre perros. Para lograrlo, necesité consultar una API externa y almacenar la información en mi propio servidor construido con Express. Una parte importante fue renderizar las distintas razas de perros disponibles y aplicar varios filtros, como el filtro por raza, la ordenación alfabética por peso y el filtro por nombre. Además, tenía la opción de crear nuevas razas de perros y guardar esos datos en una base de datos. Fue un reto emocionante y una oportunidad para aplicar mis habilidades en un proyecto completo.',
    img: dogsApp,
    repoURL: 'https://github.com/SMiguelA/PI_DOGS'
  },
  {
    name: 'Rick and Morty App',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
    description: "Desarrollé este proyecto en colaboración con la API de Rick y Morty. Se trata de una aplicación en la que puedes agregar cartas de personajes al azar de la serie y también añadir personajes específicos utilizando su ID en la barra de búsqueda. En esta aplicación, puedes explorar las características de cada personaje al acceder a su perfil y también tienes la opción de agregar varios personajes a una sección denominada 'favoritos'.",
    img: rickAndMortyApp,
    repoURL: 'https://github.com/SMiguelA/Ryck-and-Morty-APP'
  },
  {
    name: 'Sign up form',
    techStack: ['HTML', 'CSS', 'React', 'JavaScript'],
    description: 'Este proyecto consistió en un reto para crear un formulario de envío de correos electrónicos, el cual incluía validación de direcciones de email. El enfoque principal del reto estuvo en el diseño del formulario que fuera responsivo y en mostrar un mensaje de confirmación después del envío. Aclaro que yo cumplí con este reto, pero la iniciativa del desafío provino de Frontend Mentor.',
    img: signUpForm,
    repoURL: 'https://github.com/SMiguelA/Sign_Up_Form/tree/main'
  },
  {
    name: 'Search App',
    techStack: ['HTML', 'CSS', 'React', 'TypeScript'],
    description: 'El propósito de este desafío era desarrollar una aplicación que me permitiera buscar productos específicos, en este caso, dispositivos electrónicos y móviles. La aplicación contenía datos pre-cargados y su enfoque principal era mostrar los detalles de cada producto, así como permitir la búsqueda y el filtrado por nombre en la página de inicio para encontrar el producto deseado.',
    img: searchApp,
    repoURL: 'https://github.com/SMiguelA/Search_App'
  },
]

export default proyectsInfo