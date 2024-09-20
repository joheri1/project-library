// Toggle Filter Button
const filterButton = document.getElementById('filterButton')
const filterPanel = document.getElementById('filterPanel')
const sortButton = document.getElementById('sortButton')
const sortPanel = document.getElementById('sortPanel')


const genreSelect = document.getElementById('genreSelect')

//Function to show filter panel
const showFilterPanel = () => {
  if (filterPanel.style.display === 'none' || filterPanel.style.display === '') {
    filterPanel.style.display = 'block'
  } else {
    filterPanel.style.display = 'none'
  }
}

filterButton.addEventListener('click', showFilterPanel)

// show sort panel
const showSortPanel = () => {
  if (sortPanel.style.display === 'none' || sortPanel.style.display === '') {
    sortPanel.style.display = 'block'
  } else {
    sortPanel.style.display = 'none'
  }
}

sortButton.addEventListener('click', showSortPanel)

/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const albums = [
  {
    title: 'A Night at the Opera',
    artist: 'Queen',
    year: 1975,
    genre: 'Rock',
    length: 43,
    description:
      `Queen's fourth studio album, known for its eclectic mix of musical styles, including the iconic "Bohemian Rhapsody," and is often hailed as one of the greatest albums of all time.`,
    image: './album-images/queen-opera.jpg'
  },
  {
    title: 'Hybrid theory',
    artist: 'Linkin Park',
    year: 2000,
    genre: 'Rock',
    length: 38,
    description:
      `Linkin Park's debut album, blending nu-metal and rap-rock elements, and featuring hits like "In the End" and "Crawling," which propelled the band to international fame.`,
    image: './album-images/Linkin_Park_Hybrid_Theory_Album_Cover.jpg'
  },
  {
    title: 'Minutes to Midnight',
    artist: 'Linkin Park',
    year: 2007,
    genre: 'Rock',
    length: 43,
    description:
      `Minutes to Midnight, released in 2007, marks a shift in Linkin Park's sound from nu-metal to alternative rock. Featuring hits like "What I've Done," the album explores themes of personal and political turmoil.`,
    image: './album-images/Minutes_to_Midnight_cover.jpg'
  },
  {
    title: 'Queen II',
    artist: 'Queen',
    year: 1974,
    genre: 'Pop',///How do we add multiple genres? 
    length: 41,
    description: `Queen II, released in 1974, showcases Queen's early blend of hard rock and progressive elements. With its fantasy themes and complex arrangements, the album features standout tracks like "Seven Seas of Rhye" and "The March of the Black Queen."`,
    image: './album-images/queen-queenII.jpg'
  },
  {
    title: 'Songs in the Key of Life ',
    artist: 'Stevie Wonder',
    year: 1976,
    genre: 'Soul',
    length: 105,
    description: `Songs in the Key of Life, released in 1976, is one of Stevie Wonder's most celebrated albums. Blending soul, jazz, and funk, it features timeless tracks like "Isn't She Lovely" and "Sir Duke," showcasing Wonder's musical genius and social commentary.`,
    image: './album-images/stevie-wonder-sitkol.jpg'
  },
  {
    title: 'Innuendo',
    artist: 'Queen',
    year: 1991,
    genre: 'Pop',//How do we add multiple genres? 
    length: 54,
    description: `Innuendo, released in 1991, is Queen's final album with Freddie Mercury. Known for its eclectic sound and emotional depth, it features powerful tracks like the title song "Innuendo" and the poignant "The Show Must Go On."`,
    image: './album-images/queen-innuendo.jpg'
  },
  {
    title: 'Ten',
    artist: 'Pearl Jam',
    year: 1991,
    genre: 'Rock',
    length: 53,
    description: `Ten, released in 1991, is Pearl Jam's debut album and a cornerstone of the grunge movement. Featuring iconic tracks like "Alive" and "Jeremy," the album explores themes of personal struggle and resilience with raw intensity.`,
    image: './album-images/PearlJam-Ten2.jpg'
  },
  {
    title: 'Vitalogy',
    artist: 'Pearl Jam',
    year: 1994,
    genre: 'Rock',
    length: 55,
    description: `Vitalogy, released in 1994, is Pearl Jam's third studio album, blending punk, rock, and experimental sounds. Known for its raw energy and introspective lyrics, the album features standout tracks like "Spin the Black Circle" and "Better Man."`,
    image: './album-images/PearlJamVitalogy.jpg'
  },
  {
    title: 'Jurassic Park: Original Motion Picture Soundtrack',
    artist: 'John Williams',
    year: 1993,
    genre: 'Film score',
    length: 73,
    description: `Jurassic Park: Original Motion Picture Soundtrack, composed by John Williams and released in 1993, is a sweeping orchestral score that captures the awe and tension of the film. Iconic themes like the majestic "Theme from Jurassic Park" perfectly embody the sense of wonder and danger in the prehistoric adventure.`,
    image: './album-images/Jurassicpark-1-.jpg'
  },
  {
    title: 'Home Alone: Original Motion Picture Soundtrack',
    artist: 'John Williams',
    year: 1990,
    genre: 'Film score',
    length: 57,
    description: `Home Alone: Original Motion Picture Soundtrack, composed by John Williams and released in 1990, combines playful and heartwarming themes with a sense of holiday magic. The iconic "Somewhere in My Memory" beautifully captures the spirit of the film's blend of comedy and Christmas charm.`,
    image: './album-images/Home_Alone_(Original_Motion_Picture_Soundtrack).jpg'
  },
  {
    title: `Harry Potter and the Philosopher's Stone (Original Motion Picture Soundtrack)`,
    artist: 'John Williams',
    year: 2001,
    genre: 'Film score',
    length: 74,
    description: `Harry Potter and the Philosopher's Stone: Original Motion Picture Soundtrack, composed by John Williams and released in 2001, introduces the magical world of Harry Potter with unforgettable themes. The iconic "Hedwig's Theme" perfectly captures the wonder and enchantment that defines the series.`,
    image: './album-images/HarrypotterPSsoundtrack.jpg'
  },
  {
    title: 'E.T. the Extra-Terrestrial: Music from the Original Soundtrack',
    artist: 'John Williams',
    year: 1982,
    genre: 'Film score',
    length: 40,
    description: `E.T. the Extra-Terrestrial: Music from the Original Soundtrack, composed by John Williams and released in 1982, is a heartwarming and emotional score that perfectly complements the film's themes of friendship and adventure. The iconic "Flying Theme" evokes the magic and wonder of E.T.'s journey.`,
    image: './album-images/E.T._the_Extra-Terrestrial_(soundtrack).jpg'
  },
  {
    title: 'Dangerously In Love',
    artist: 'Beyoncé',
    year: 2003,
    genre: 'Pop',
    length: 78,
    description: `Beyoncé's debut solo album features a mix of R&B, soul, and hip hop, and includes hits like "Crazy in Love" and "Baby Boy."`,
    image: './album-images/Dangerously_In_Love_Album(2003).png'
  },
  {
    title: 'Cowboy Carter',
    artist: 'Beyoncé',
    year: 2024,
    genre: 'Country',
    length: 78,
    description: `Beyoncé's eighth studio album blends country, R&B, blues, and more, reimagining Americana through the lens of Black pioneers.`,
    image: './album-images/Beyoncé_-_Cowboy_Carter.png'
  },
  {
    title: 'Lemonade',
    artist: 'Beyoncé',
    year: 2016,
    genre: 'Soul',
    length: 46,
    description: `Beyoncé's sixth studio album is a conceptual project exploring themes of infidelity, empowerment, and healing, featuring a diverse mix of genres.`,
    image: './album-images/Beyonce_-_Lemonade_(Official_Album_Cover).png'
  },
  {
    title: 'Taylor Swift',
    artist: 'Taylor Swift',
    year: 2005,
    genre: 'Country',
    length: 40,
    description: 'Taylor Swift is the debut studio album by the American singer-songwriter Taylor Swift',
    image: 'album-images/Taylor_Swift_-_Taylor_Swift.png'
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    year: 2019,
    genre: 'Country',
    length: 62,
    description: 'Lover is the seventh studio album by the American singer-songwriter Taylor Swift.',
    image: 'album-images/Taylor_Swift_-_Lover.png'
  },
  {
    title: 'Encore',
    artist: 'Eminem',
    year: 2004,
    genre: 'Hip hop',
    length: 77,
    description: 'Encore is the fifth studio album by American rapper Eminem.',
    image: 'album-images/Encore_(Eminem_album)_coverart.jpg'
  },
  {
    title: 'Corpse Bride',
    artist: 'Danny Elfman',
    year: 2005,
    genre: 'Film score',
    length: 60,
    description: 'Music from the film Corps Bride composed by Danny Elfman',
    image: 'album-images/CorpseBride.jpg'
  },
  {
    title: 'Led Zepplin IV',
    artist: 'Led Zepplin',
    year: 1971,
    genre: 'Rock',
    length: 43,
    description: 'Untitled fourth studio album by the English rock band Led Zeppelin, commonly known as Led Zeppelin IV',
    image: 'album-images/Led_Zeppelin_-_Led_Zeppelin_IV.jpg'
  },
  //album entry template
  // {
  //   title: '',
  //   artist: '',
  //   year: ,
  //   genre: '',
  //   length: ,
  //   description:
  //     ``,
  //   image: ''
  // },
]
const albumContainer = document.getElementById('album-container')

const getAlbums = (albumArray) => {
  albumContainer.innerHTML = ''
  albumArray.forEach(album => {
    albumContainer.innerHTML += `
    <div class="album-card">
    <div class="album-art">
        <img src="${album.image}" alt="${album.title} album art"/>
        </div>
        <h2>${album.title}</h2>
        <p>Artist: ${album.artist}</p>
        <p>Release Date: ${album.year}</p>
        <p>Genre: ${album.genre}</p>
        <p>Length: ${album.length} minutes</p> 
        <p>${album.description}</p>
    </div>`
  })
}

//Filter Genre 

const filterGenreDropdown = document.getElementById('genreSelect')

const filterGenre = () => {
  //get value from select
  const genre = filterGenreDropdown.value
  console.log('the user selects :', genre)
  // if the value is gona be all show all the albums
  if (genre === 'all') {
    getAlbums(albums)
    //else filter the albums by genre
  } else {
    const filteredGenreList = albums.filter(album => album.genre === genre)
    getAlbums(filteredGenreList)
    console.log('Filterlist', filteredGenreList)
  }
}

filterGenreDropdown.addEventListener('change', filterGenre)

//Filter Artist

const filterArtistDropdown = document.getElementById('artistSelect')

const filterArtist = () => {
  //get value from select
  const artist = filterArtistDropdown.value
  console.log('the user selects :', artist)
  // if the value is gona be all show all the albums
  if (artist === 'all') {
    getAlbums(albums)
    //else filter the albums by artist
  } else {
    const filteredArtistList = albums.filter(album => album.artist === artist)
    getAlbums(filteredArtistList)
    console.log('Filterlist', filteredArtistList)
  }
}

filterArtistDropdown.addEventListener('change', filterArtist)

// Random button

const randomButton = document.getElementById('randomButton')

const getRandomAlbum = () => {
  const randomIndex = Math.floor(Math.random() * albums.length)

  const randomAlbum = albums[randomIndex]
  albumContainer.innerHTML = ''
    albumContainer.innerHTML = `
    <div class="album-card">
    <div class="album-art">
        <img src="${randomAlbum.image}" alt="${randomAlbum.title} album art"/>
        </div>
        <h2>${randomAlbum.title}</h2>
        <p>Artist: ${randomAlbum.artist}</p>
        <p>Release Date: ${randomAlbum.year}</p>
        <p>Genre: ${randomAlbum.genre}</p>
        <p>Length: ${randomAlbum.length} minutes</p> 
        <p>${randomAlbum.description}</p>
    </div>`
}

randomButton.addEventListener("click", getRandomAlbum)

// Sort and display albums

const sortAlbumDropdown = document.getElementById('sortSelect')

// <option value="alpha-title">Alphabetically by Title A-Z</option>
// <option value="reverse-title">Alphabetically by Title Z-A</option>
// <option value="alpha-artist">Alphabetically by Artist A-Z</option>
// <option value="reverse-artist">Alphabetically by Artist Z-A</option>
// <option value="newest-year">By Release year Newest to Oldest</option>
// <option value="oldest-year">By Release year Oldest to Newest</option>
// <option value="shortest-length">By Length</option>
// <option value="longest-length">By Length</option>

const sortAlbums = () => {
  const sortOption = sortAlbumDropdown.value
  let sortedAlbums

  if (sortOption === 'alpha-title') {
    sortedAlbums =  albums.sort((a, b) => a.title.localeCompare(b.title))
  }
  else if (sortOption === 'reverse-title') {
    sortedAlbums = albums.sort((a, b) => b.title.localeCompare(a.title))
  } 
  else if (sortOption === 'alpha-artist') {
    sortedAlbums = albums.sort((a, b) => a.artist.localeCompare(b.artist))
  } 
  else if (sortOption === 'reverse-artist') {
    sortedAlbums = albums.sort((a, b) => b.artist.localeCompare(a.artist))
  } 
  else if (sortOption === 'newest-year') {
    sortedAlbums = albums.sort((a, b) => b.year - a.year)
  } 
  else if (sortOption === 'oldest-year') {
    sortedAlbums = albums.sort((a, b) => a.year - b.year)
  } 
  else if (sortOption === 'shortest-length') {
    sortedAlbums = albums.sort((a, b) => a.length - b.length)
  }
  else if (sortOption === 'longest-length') {
    sortedAlbums = albums.sort((a, b) => b.length - a.length)
  }
  else {
     sortedAlbums =  albums.sort((a, b) => a.title.localeCompare(b.title))
  }
  getAlbums(sortedAlbums)
} 


sortAlbumDropdown.addEventListener('change', sortAlbums)

sortAlbums()

// getAlbums(albums)


// const books = [
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     genre: 'Fiction',
//     rating: 4.2,
//     description:
//       'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
//     image: './books-images/the-great-gatsby.jpg'
//   },
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     genre: 'Fiction',
//     rating: 4.5,
//     description:
//       'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
//     image: './books-images/to-kill-a-mockingbird.jpg'
//   },
//   {
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949,
//     genre: 'Science Fiction',
//     rating: 4.4,
//     description:
//       'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
//     image: './books-images/1984.jpg'
//   },
//   {
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     year: 1813,
//     genre: 'Fiction',
//     rating: 4.25,
//     description:
//       'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
//     image: './books-images/pride-and-prejudice.jpg'
//   },
//   {
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     year: 1951,
//     genre: 'Fiction',
//     rating: 4,
//     description:
//       'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     year: 1937,
//     genre: 'Fantasy',
//     rating: 4.6,
//     description:
//       'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
//     image: './books-images/the-hobbit.jpg'
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: 'J.K. Rowling',
//     year: 1997,
//     genre: 'Fantasy',
//     rating: 4.7,
//     description:
//       'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
//     image: "./books-images/harry-potter-and-the-sorcerer'.jpg"
//   },
//   {
//     title: 'Moby-Dick',
//     author: 'Herman Melville',
//     year: 1851,
//     genre: 'Adventure',
//     rating: 4.1,
//     description:
//       'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
//     image: './books-images/moby-dick.jpg'
//   },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     author: 'J.R.R. Tolkien',
//     year: 1954,
//     genre: 'Fantasy',
//     rating: 4.55,
//     description:
//       'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
//     image: './books-images/the-lord-of-the-rings.jpg'
//   },
//   {
//     title: 'The Shining',
//     author: 'Stephen King',
//     year: 1977,
//     genre: 'Horror',
//     rating: 4.3,
//     description:
//       "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
//     author: 'C.S. Lewis',
//     year: 1950,
//     genre: 'Fantasy',
//     rating: 4.15,
//     description:
//       'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
//     image: './books-images/the-chronicles-of-narnia.jpg'
//   },
//   {
//     title: 'The Da Vinci Code',
//     author: 'Dan Brown',
//     year: 2003,
//     genre: 'Mystery',
//     rating: 3.8,
//     description:
//       'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Alchemist',
//     author: 'Paulo Coelho',
//     year: 1988,
//     genre: 'Fiction',
//     rating: 4.25,
//     description:
//       'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Hunger Games',
//     author: 'Suzanne Collins',
//     year: 2008,
//     genre: 'Science Fiction',
//     rating: 4.3,
//     description:
//       "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Girl with the Dragon Tattoo',
//     author: 'Stieg Larsson',
//     year: 2005,
//     genre: 'Mystery',
//     rating: 4.1,
//     description:
//       'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Road',
//     author: 'Cormac McCarthy',
//     year: 2006,
//     genre: 'Dystopian',
//     rating: 4,
//     description:
//       "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: 'Douglas Adams',
//     year: 1979,
//     genre: 'Science Fiction',
//     rating: 4.35,
//     description:
//       "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
//     image: './books-images/unknown.jpg'
//   },
//   {
//     title: 'The Giver',
//     author: 'Lois Lowry',
//     year: 1993,
//     genre: 'Dystopian',
//     rating: 4.12,
//     description:
//       'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
//     image: './books-images/unknown.jpg'
//   }
// ]

// const recipes = [
//   {
//     name: 'Individual vegetarian lasagnes',
//     cuisineType: ['italian'],
//     ingredients: [
//       '1.2 kg cherry tomatoes',
//       '5 sprigs of fresh thyme',
//       'extra virgin olive oil',
//       '2 shallots',
//       '2 cloves of garlic',
//       '500 g baby spinach',
//       '8-12 fresh or dried lasagne sheets',
//       '350 g ricotta cheese',
//       'WHITE SAUCE',
//       '600 ml milk',
//       '25 g unsalted butter',
//       '2 heaped tablespoons flour',
//       '150 g vegetarian sharp, mature cheese',
//       '100 g mozzarella'
//     ],
//     source: 'Jamie Oliver',
//     totalTime: 130,
//     url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
//     image: './recipe-images/individual-vegetarian-lasagnes.jpg'
//   },
//   {
//     name: 'Vegetarian Stir-Fried Garlic Scape',
//     cuisineType: ['Balanced'],
//     ingredients: [
//       '8 oz. garlic scapes',
//       '3 oz. baby corn',
//       '3 oz. carrots',
//       '1 oz. dried shiitake mushrooms',
//       '1 clove of garlic sliced thinly',
//       '3 slices of fresh ginger root',
//       '2 tablespoons vegetable oil',
//       '1/4 cup shaoxing cooking wine',
//       '1/4 vegetarian stock or water',
//       '1 tablespoon light soy sauce',
//       '1 teaspoon sugar',
//       '1 teaspoon cornstarch',
//       '1/4 teaspoon ground white pepper'
//     ],
//     source: 'Red Cook',
//     totalTime: null,
//     url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
//     image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
//   },
//   {
//     name: 'Cheat’s cheesy focaccia',
//     cuisineType: ['Italian'],
//     ingredients: [
//       '500g pack bread mix',
//       '2 tbsp olive oil , plus a little extra for drizzling',
//       '25g parmesan (or vegetarian alternative), grated',
//       '75g dolcelatte cheese (or vegetarian alternative)'
//     ],
//     source: 'BBC Good Food',
//     totalTime: 40,
//     url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
//     image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
//   },
//   {
//     name: "Vegetarian Shepherd's Pie",
//     cuisineType: ['Balanced', 'High-Fiber'],
//     ingredients: [
//       '2 tablespoons extra-virgin olive oil',
//       '1 large onion, finely diced',
//       '2 carrots, peeled and thinly sliced',
//       '2 celery stalks, thinly sliced',
//       '10 ounces cremini mushrooms, trimmed and sliced',
//       '1 tablespoon tomato paste',
//       "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
//       '1 dried bay leaf',
//       '1 cup French green lentils, picked over',
//       'Kosher salt and freshly ground pepper',
//       '1 cup frozen peas',
//       '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
//       '4 cloves garlic',
//       '4 tablespoons unsalted butter',
//       '1/2 cup whole milk, warmed'
//     ],
//     source: 'Martha Stewart',
//     totalTime: 120,
//     url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
//     image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
//   },
//   {
//     name: 'Chicken Paprikash',
//     cuisineType: ['Low-Carb'],
//     ingredients: [
//       '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
//       '1/2 teaspoon salt',
//       '1/4 teaspoon black pepper',
//       '1 tablespoon butter – cultured unsalted (or olive oil)',
//       '240 grams onion sliced thin (1 large onion)',
//       '70 grams Anaheim pepper chopped (1 large pepper)',
//       '25 grams paprika (about 1/4 cup)',
//       '1 cup chicken stock',
//       '1/2 teaspoon salt',
//       '1/2 cup sour cream',
//       '1 tablespoon flour – all-purpose'
//     ],
//     source: 'No Recipes',
//     totalTime: 80,
//     url: 'http://norecipes.com/recipe/chicken-paprikash/',
//     image: './recipe-images/chicken-paprikash.jpg'
//   },
//   {
//     name: 'Baked Chicken',
//     cuisineType: ['american'],
//     ingredients: [
//       '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
//       '1/2 teaspoon coarse salt',
//       '1/2 teaspoon Mrs. Dash seasoning',
//       '1/4 teaspoon freshly ground black pepper'
//     ],
//     source: 'Martha Stewart',
//     totalTime: 90,
//     url: 'http://www.marthastewart.com/318981/baked-chicken',
//     image: './recipe-images/baked-chicken.jpg'
//   },
//   {
//     name: 'Deep Fried Fish Bones',
//     cuisineType: ['south east asian'],
//     ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
//     source: 'Serious Eats',
//     totalTime: 31,
//     url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
//     image: './recipe-images/deep-fried-fish-bones.jpg'
//   },
//   {
//     name: 'Burnt-Scallion Fish',
//     cuisineType: ['chinese'],
//     ingredients: [
//       '2 bunches scallions',
//       '8 tbsp. butter',
//       '2 8-oz. fish filets'
//     ],
//     source: 'Saveur',
//     totalTime: 70,
//     url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
//     image: './recipe-images/fish-dish.jpg'
//   },
//   {
//     name: 'Curry-Crusted Fish',
//     cuisineType: ['south east asian'],
//     ingredients: [
//       '3 slices bread , about 85g/3oz in total',
//       '1 lime',
//       '1.0 tbsp Korma curry paste',
//       '4 thick white fish fillets'
//     ],
//     source: 'BBC Good Food',
//     totalTime: 80,
//     url: 'http://www.bbcgoodfood.com/recipes/4717/',
//     image: './recipe-images/fish-dish.jpg'
//   },
//   {
//     name: 'Meat Stock',
//     cuisineType: 'american',
//     ingredients: [
//       '2.5 pounds beef marrow bones',
//       '1 large onion, quartered',
//       '2 carrots, sliced',
//       '1 leek, cleaned and sliced',
//       '2 celery stalks, sliced',
//       '2.5 pounds organic beef stew meat, cubed',
//       '2 tablespoons tomato paste',
//       '5 cloves garlic',
//       '2 bay leaves',
//       '3 sprigs thyme',
//       '3 sprigs Italian parsley',
//       '1/2 teaspoon black peppercorns'
//     ],
//     source: 'Food52',
//     totalTime: 60,
//     url: 'https://food52.com/recipes/3712-meat-stock',
//     image: './recipe-images/meat.jpg'
//   },
//   {
//     name: 'Homemade Meat Broth',
//     cuisineType: 'american',
//     ingredients: [
//       '1 teaspoon salt',
//       '1 carrot, peeled',
//       '1 medium onion, peeled',
//       '2 or 3 celery stalks',
//       '¼ red or yellow bell pepper, stripped of all its seeds',
//       '1 small boiling potato, peeled',
//       '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
//       '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
//     ],
//     source: 'Cookstr',
//     totalTime: 60,
//     url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
//     image: './recipe-images/meat.jpg'
//   },
//   {
//     name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
//     cuisineType: 'south-american',
//     ingredients: [
//       '1 tablespoon whole black peppercorns, toasted',
//       '1 teaspoon coriander seed, toasted',
//       '1 teaspoon fennel seed, toasted',
//       '1 teaspoon cumin pods, toasted',
//       '1 teaspoon red pepper flakes',
//       '1/2 teaspoon dried oregano',
//       '2 medium cloves garlic, minced (about 2 teaspoons)',
//       '2 tablespoons vegetable or canola oil',
//       '1 whole flap meat steak, 2 to 2 1/2 pounds',
//       'Kosher salt'
//     ],
//     source: 'Serious Eats',
//     totalTime: 240,
//     url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
//     image: './recipe-images/grilled.jpg'
//   }
// ]
