import type { Area, Trip } from '@/types/trip';

export const tripAreas: (Area | 'All')[] = [
  'All',
  'Asia',
  'Europe',
  'America',
  'Oceania',
];
export const tripYears: number[] = [1000, 1300, 1700, 2000];

export const trips: Trip[] = [
  {
    area: 'Europe',
    title: 'Italy, Pica',
    url: '/src/assets/images/pica.jpg',
    description: `The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.`,
    year: 1173,
  },
  {
    area: 'Europe',
    title: 'Spain, Sagrada Família',
    url: '/src/assets/images/sagrada.jpg',
    description: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
    year: 1882,
  },
  {
    area: 'America',
    title: 'US, Fallingwater',
    url: '/src/assets/images/fallingwater.jpg',
    description: `Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.`,
    year: 1935,
  },
  {
    area: 'Europe',
    title: `Russia, Saint Basil's Cathedral`,
    url: '/src/assets/images/saint.jpg',
    description: `The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.`,
    year: 1555,
  },
  {
    area: 'Asia',
    title: 'Korea, Haeinsa Temple',
    url: 'https://i.namu.wiki/i/8ksajvWA2_D1u2CiVjienlO6fOdWehidEDd0PsbBl3DdmBYq0x1j4-Uw5c9uOTvYjOLNaDK_ggnsd8gugW9ijA.webp',
    description: `Haeinsa is a head temple of the Jogye Order of Korean Buddhism, located in Gayasan National Park, South Gyeongsang Province, South Korea. It is home to the Tripitaka Koreana, a complete set of Buddhist scriptures carved onto over 81,000 wooden printing blocks in the 13th century. The temple, originally built in 802, is considered one of the Three Jewel Temples of Korea and a UNESCO World Heritage Site.`,
    year: 802,
  },
];
