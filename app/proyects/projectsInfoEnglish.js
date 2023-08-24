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
    description: 'E-commerce platform for video games with third-party authorization (Gmail), a payment gateway (Stripe), and sending emails (Nodemailer). It features filters for products based on their category and platform, along with a search option by product name. The system also manages product availability based on stock levels. An administrator role is present, allowing actions such as banning and disabling products.',
    img: pixelPort,
    repoURL: 'https://github.com/SMiguelA/PF-ECOMMERCE-FRONT'
  },
  {
    name: "EVA's Restaurant",
    techStack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'ASP.NET', 'PostgreSQL'],
    description: "The core objective of this project is to enhance the restaurant's operations through the implementation of an information system. The aim is to streamline the payment registration process, maintain accurate control over supply inventory, and improve the management of customer orders. Additionally, ensuring data security and simplifying access to relevant information are key goals. The resulting system will enable more efficient and organized operations, benefiting both the internal team and enhancing the customer experience.",
    img: EVA,
    repoURL: 'https://github.com/SMiguelA/EVA'
  },
  {
    name: 'Dogs App',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'I had to work on this individual project for a maximum of three weeks. We started with a Kick-Off in the first week, and a personalized review was scheduled for the last week. My project involved developing a dog application. To accomplish this, I needed to query an external API and store the information on my own server built with Express. An important part was rendering the different available dog breeds and applying various filters, such as the breed filter, alphabetical, sorting by weight, and name filtering.',
    img: dogsApp,
    repoURL: 'https://github.com/SMiguelA/PI_DOGS'
  },
  {
    name: 'Rick and Morty App',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
    description: "I created this project in collaboration with the Rick and Morty API. It's an application where you can add random character cards from the series and also add specific characters using their ID in the search bar. In this app, you can explore into the details of each character by accessing their profile and you also have the option to add multiple characters to a section named 'favorites'.",
    img: rickAndMortyApp,
    repoURL: 'https://github.com/SMiguelA/Ryck-and-Morty-APP'
  },
  {
    name: 'Sign up form',
    techStack: ['HTML', 'CSS', 'React', 'JavaScript'],
    description: 'I took on a challenge to create an email submission form, which required incorporating email validation. The main focus of the challenge was on form design and displaying a confirmation message after submission. I completed this challenge myself, but the idea for the challenge originated from Frontend Mentor.',
    img: signUpForm,
    repoURL: 'https://github.com/SMiguelA/Sign_Up_Form/tree/main'
  },
  {
    name: 'Search App',
    techStack: ['HTML', 'CSS', 'React', 'TypeScript'],
    description: 'The purpose of this challenge was to create an application that would enable me to search for specific products, in this instance, electronic devices and mobile phones. The application was pre-loaded with data and its main focus was to display the details of each product, along with the ability to search and filter by name on the homepage in order to find the desired product.',
    img: searchApp,
    repoURL: 'https://github.com/SMiguelA/Search_App'
  },
]

export default proyectsInfo