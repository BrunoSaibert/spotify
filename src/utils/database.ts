export const DATA_RECENTS = [
  {
    type: "playlist",
    title: "Músicas Curtidas",
    imageUrl: require("../assets/images/LikedSongs.jpg"),
    bgColor: "#644cec",
  },
  {
    type: "playlist",
    title: "This Is Dua Lipa",
    imageUrl: require("../assets/images/DuaLipaPlayListThisIs.jpg"),
    bgColor: "#eae7a5",
  },
  {
    type: "playlist",
    title: "This Is Queens of the Stone Age",
    imageUrl: require("../assets/images/QueensOfTheStoneAgePlayListThisIs.jpg"),
    bgColor: "#A770B1",
  },
  {
    type: "podcast",
    title: "Não Inviabilize",
    imageUrl: require("../assets/images/NaoInviabilizeCover.jpg"),
    bgColor: "#fce44b",
  },
  {
    type: "playlist",
    title: "This Is Portugal. The Man",
    imageUrl: require("../assets/images/PortugalTheManPlayListThisIs.jpg"),
    bgColor: "#8cb494",
  },
  {
    type: "playlist",
    title: "As mais tocadas do seu 2021",
    imageUrl: require("../assets/images/MaisTocadas2021.jpg"),
    bgColor: "#d4f36d",
  },
  {
    type: "playlist",
    title: "This Is Weezer",
    imageUrl: require("../assets/images/WeezerPlayListThisIs.jpg"),
    bgColor: "#a08b87",
  },
  {
    type: "artist",
    title: "Tame Impala",
    imageUrl: require("../assets/images/TameImpalaCover.jpg"),
    bgColor: "#b4b4b4",
  },
  {
    type: "playlist",
    title: "This Is Arcade Fire",
    imageUrl: require("../assets/images/ArcadeFirePlayListThisIs.jpg"),
    bgColor: "#99273c",
  },
  {
    type: "artist",
    title: "Lana Del Rey",
    imageUrl: require("../assets/images/LanaDelReyPlayListThisIs.jpg"),
    bgColor: "#b48abe",
  },
  {
    type: "playlist",
    title: "Best of Rock 2002",
    imageUrl: require("../assets/images/PlayListBestOfRock2002.jpg"),
    bgColor: "#f02044",
  },
];

export const DATA_FOR_ME = [
  {
    type: "playlist",
    description: "Nirvana, Green Day, Radiohead, Red Hot Chili Peppers",
    imageUrl: require("../assets/images/PlayListBestOfRock90.jpg"),
  },
  {
    type: "playlist",
    description: "Foo Fighters, blink-182, Linkin Park, Coldplay",
    imageUrl: require("../assets/images/PlayListBestOfRock2002.jpg"),
  },
  {
    type: "playlist",
    description: "Green Day, Soundgarden, Radiohead, Pear Jam, Alice in Chains",
    imageUrl: require("../assets/images/PlayListBestOfRock1994.jpg"),
  },
  {
    type: "playlist",
    description: "Tame Impala, Portugal. The Man, Arctic Monkeys",
    imageUrl: require("../assets/images/PlayListBestOfRockDecade.jpg"),
  },
  {
    type: "playlist",
    description: "Linkin Park, Green Day, Foo Fighters, Red Hot Chili Peppers",
    imageUrl: require("../assets/images/PlayListOnFire.jpg"),
  },
  {
    type: "playlist",
    description: "Panic! At The Disco, Bring me The Horizon, Green Day",
    imageUrl: require("../assets/images/PlayListSadCovers.jpg"),
  },
];

export const DATA_THE_BEST_ARTIST = [
  {
    type: "playlist",
    title: "This Is Portugal. The Man",
    imageUrl: require("../assets/images/PortugalTheManPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Lana Del Rey",
    imageUrl: require("../assets/images/LanaDelReyPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Weezer",
    imageUrl: require("../assets/images/WeezerPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Machine Gun Kelly",
    imageUrl: require("../assets/images/MachineGunKellyPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Arctic Monkeys",
    imageUrl: require("../assets/images/ArcticMonkeysPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Dua Lipa",
    imageUrl: require("../assets/images/DuaLipaPlayListThisIs.jpg"),
  },
  {
    type: "playlist",
    title: "This Is Cage The Elephant",
    imageUrl: require("../assets/images/CageTheElephantPlayListThisIs.png"),
  },
  {
    type: "playlist",
    title: "This Is Queens of the Stone Age",
    imageUrl: require("../assets/images/QueensOfTheStoneAgePlayListThisIs.jpg"),
  },

  {
    type: "playlist",
    title: "This Is Tame Impala",
    imageUrl: require("../assets/images/TameImpalaPlayListThisIs.jpg"),
  },
];

export const DATA_ARTISTS = [
  {
    type: "artist",
    bgColor: "#99273c",
    title: "Arcade Fire",
    description: `Arcade Fire é uma banda de indie rock da cidade de Montreal, Quebec, no Canadá. Fundada em 2000 pelo casal Win Butler e Régine Chassagne, a banda é conhecida por suas apresentações ao vivo, como também pelo uso de um grande número de instrumentos musicais; principalmente guitarra, bateria e baixo; mas também piano, violino, viola, violoncelo, xilofone, teclado, acordeão e harpa.

    Arcade Fire ganhou numerosos prêmios, incluindo o Grammy 2011 de álbum do ano, o Juno 2011 de álbum do ano e o Brit Award 2011 de melhor álbum internacional, pelo seu terceiro álbum de estúdio, The Suburbs, lançado em 2010, sucesso comercial e de crítica. Os quatro álbuns de estúdio foram indicados ao Grammy de Melhor Álbum de Música Alternativa.`,
    generes: ["indie rock", "rock alternativo", "art rock"],
    imageUrl: require("../assets/images/ArcadeFireCover.jpg"),
    likedSongs: 10,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 2, track: 1, amount: 836857313 },
      { album: 2, track: 3, amount: 473829749 },
      { album: 1, track: 0, amount: 674364284 },
      { album: 3, track: 1, amount: 437628946 },
      { album: 1, track: 10, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/ArcadeFirePlayListThisIs.jpg"),
        title: "This Is Arcade Fire",
      },
      {
        imageUrl: require("../assets/images/ArcadeFirePlayListRadio.jpg"),
        title: "Arcade Fire Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#E996A3",
        title: "Everything Now",
        launch: new Date(2017, 6, 28),
        imageUrl: require("../assets/images/ArcadeFireAlbumEverythingNow.jpg"),
        tracks: [
          {
            title: "Everything_Now (Continued)",
            duration: new Date(1900, 0, 1, 0, 0, 46),
          },
          {
            title: "Everything Now",
            duration: new Date(1900, 0, 1, 0, 5, 3),
          },
          {
            title: "Signs of Life",
            duration: new Date(1900, 0, 1, 0, 4, 36),
          },
          {
            title: "Creature Comfort",
            duration: new Date(1900, 0, 1, 0, 4, 43),
          },
          {
            title: "Peter Pan",
            duration: new Date(1900, 0, 1, 0, 2, 48),
          },
          {
            title: "Chemistry",
            duration: new Date(1900, 0, 1, 0, 3, 37),
          },
          {
            title: "Infinite Content",
            duration: new Date(1900, 0, 1, 0, 1, 37),
          },
          {
            title: "Infinite_Content",
            duration: new Date(1900, 0, 1, 0, 1, 41),
          },
          {
            title: "Electric Blue",
            duration: new Date(1900, 0, 1, 0, 4, 2),
          },
          {
            title: "Good God Damn",
            duration: new Date(1900, 0, 1, 0, 3, 34),
          },
          {
            title: "Put Your Money on Me",
            duration: new Date(1900, 0, 1, 0, 5, 53),
          },
          {
            title: "We Don't Deserve Love",
            duration: new Date(1900, 0, 1, 0, 6, 29),
          },
          {
            title: "Everything Now (Continued)",
            duration: new Date(1900, 0, 1, 0, 2, 22),
          },
        ],
      },
      {
        bgColor: "#4c443c",
        title: "Reflektor",
        launch: new Date(2013, 9, 28),
        imageUrl: require("../assets/images/ArcadeFireAlbumReflektor.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },

          {
            title: "Reflektor",
            duration: new Date(1900, 0, 1, 0, 7, 34),
          },
          {
            title: "We Exist",
            duration: new Date(1900, 0, 1, 0, 5, 44),
          },
          {
            title: "Flashbulb Eyes",
            duration: new Date(1900, 0, 1, 0, 2, 42),
          },
          {
            title: "Here Comes the Night Time",
            duration: new Date(1900, 0, 1, 0, 6, 30),
          },
          {
            title: "Normal Person",
            duration: new Date(1900, 0, 1, 0, 4, 22),
          },
          {
            title: "You Already Know",
            duration: new Date(1900, 0, 1, 0, 3, 59),
          },
          {
            title: "Joan of Arc",
            duration: new Date(1900, 0, 1, 0, 5, 26),
          },
          {
            title: "Here Comes the Night Time II",
            duration: new Date(1900, 0, 1, 0, 2, 52),
          },
          {
            title: "Awful Sound (Oh Eurydice)",
            duration: new Date(1900, 0, 1, 0, 6, 13),
          },
          {
            title: "It's Never Over (Oh Orpheus)",
            duration: new Date(1900, 0, 1, 0, 6, 42),
          },
          {
            title: "Porno",
            duration: new Date(1900, 0, 1, 0, 6, 2),
          },
          {
            title: "Afterlife",
            duration: new Date(1900, 0, 1, 0, 5, 52),
          },
          {
            title: "Supersymmetry",
            duration: new Date(1900, 0, 1, 0, 11, 16),
          },
        ],
      },
      {
        bgColor: "#635946",
        title: "The Suburbs",
        launch: new Date(2010, 7, 2),
        imageUrl: require("../assets/images/ArcadeFireAlbumTheSuburbs.jpg"),
        tracks: [
          {
            title: "The Suburbs",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },
          {
            title: "Ready to Start",
            duration: new Date(1900, 0, 1, 0, 4, 15),
          },
          {
            title: "Modern Man",
            duration: new Date(1900, 0, 1, 0, 4, 39),
          },
          {
            title: "Rococo",
            duration: new Date(1900, 0, 1, 0, 3, 56),
          },
          {
            title: "Empty Room",
            duration: new Date(1900, 0, 1, 0, 2, 51),
          },
          {
            title: "City with No Children",
            duration: new Date(1900, 0, 1, 0, 3, 11),
          },
          {
            title: "Half Light I",
            duration: new Date(1900, 0, 1, 0, 4, 13),
          },
          {
            title: "Half Light II (No Celebration)",
            duration: new Date(1900, 0, 1, 0, 4, 25),
          },
          {
            title: "Suburban War",
            duration: new Date(1900, 0, 1, 0, 4, 45),
          },
          {
            title: "Month of May",
            duration: new Date(1900, 0, 1, 0, 3, 50),
          },
          {
            title: "Wasted Hours",
            duration: new Date(1900, 0, 1, 0, 3, 20),
          },
          {
            title: "Deep Blue",
            duration: new Date(1900, 0, 1, 0, 4, 28),
          },
          {
            title: "We Used to Wait",
            duration: new Date(1900, 0, 1, 0, 5, 1),
          },
          {
            title: "Sprawl I (Flatland)",
            duration: new Date(1900, 0, 1, 0, 2, 54),
          },
          {
            title: "Sprawl II (Mountains Beyond Mountains)",
            duration: new Date(1900, 0, 1, 0, 5, 25),
          },
          {
            title: "The Suburbs (Continued)",
            duration: new Date(1900, 0, 1, 0, 1, 27),
          },
        ],
      },
      {
        bgColor: "#deb790",
        title: "Funeral",
        launch: new Date(2004, 9, 14),
        imageUrl: require("../assets/images/ArcadeFireAlbumFuneral.jpg"),
        tracks: [
          {
            title: "Neighborhood #1 (Tunnels)",
            duration: new Date(1900, 0, 1, 0, 4, 48),
          },
          {
            title: "Neighborhood #2 (Laïka)",
            duration: new Date(1900, 0, 1, 0, 3, 33),
          },
          {
            title: "Une année sans lumière",
            duration: new Date(1900, 0, 1, 0, 3, 40),
          },
          {
            title: "Neighborhood #3 (Power Out)",
            duration: new Date(1900, 0, 1, 0, 5, 12),
          },
          {
            title: "Neighborhood #4 (7 Kettles)",
            duration: new Date(1900, 0, 1, 0, 4, 49),
          },
          {
            title: "Crown of Love",
            duration: new Date(1900, 0, 1, 0, 4, 42),
          },
          {
            title: "Wake Up",
            duration: new Date(1900, 0, 1, 0, 5, 39),
          },
          {
            title: "Haïti",
            duration: new Date(1900, 0, 1, 0, 4, 7),
          },
          {
            title: "Rebellion (Lies)",
            duration: new Date(1900, 0, 1, 0, 5, 10),
          },
          {
            title: "In the Backseat",
            duration: new Date(1900, 0, 1, 0, 6, 21),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#8c8c8c",
    title: "Arctic Monkeys",
    description: `Arctic Monkeys é uma banda britânica de rock formada em 2002 nos subúrbios da cidade de Sheffield, na Inglaterra. O grupo é formado por Alex Turner (vocal, guitarra), Matt Helders (bateria, backing vocal), Jamie Cook (guitarra) e Nick O'Malley (baixo, backing vocal).`,
    generes: [
      "Indie rock",
      "Rock alternativo",
      "Post-punk revival",
      "Rock de garagem",
    ],
    imageUrl: require("../assets/images/ArcticMonkeysCover.jpg"),
    likedSongs: 26,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 1, track: 1, amount: 836857313 },
      { album: 2, track: 3, amount: 473829749 },
      { album: 1, track: 0, amount: 674364284 },
      { album: 3, track: 1, amount: 437628946 },
      { album: 1, track: 10, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/ArcticMonkeysPlayListThisIs.jpg"),
        title: "This Is Arctic Monkeys",
      },
      {
        imageUrl: require("../assets/images/ArcticMonkeysPlayListRadio.jpg"),
        title: "Arctic Monkeys Radio",
      },

      {
        title: "Best of Decade",
        imageUrl: require("../assets/images/PlayListBestOfRockDecade.jpg"),
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#d0b4a6",
        title: "Tranquility Base Hotel & Casino",
        launch: new Date(2018, 4, 11),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumTranquilityBaseHotelCassino.jpg"),
        tracks: [
          {
            title: "Star Treatment",
            duration: new Date(1900, 0, 1, 0, 5, 54),
          },
          {
            title: "One Point Perspective",
            duration: new Date(1900, 0, 1, 0, 3, 28),
          },
          {
            title: "American Sports",
            duration: new Date(1900, 0, 1, 0, 2, 38),
          },
          {
            title: "Tranquility Base Hotel & Casino",
            duration: new Date(1900, 0, 1, 0, 3, 31),
          },
          {
            title: "Golden Trunks",
            duration: new Date(1900, 0, 1, 0, 2, 53),
          },
          {
            title: "Four Out of Five",
            duration: new Date(1900, 0, 1, 0, 5, 12),
          },
          {
            title: "The World's First Ever Monster Truck Front Flip",
            duration: new Date(1900, 0, 1, 0, 3, 0),
          },
          {
            title: "Science Fiction",
            duration: new Date(1900, 0, 1, 0, 3, 5),
          },
          {
            title: "She Looks Like Fun",
            duration: new Date(1900, 0, 1, 0, 3, 2),
          },
          {
            title: "Batphone",
            duration: new Date(1900, 0, 1, 0, 4, 31),
          },
          {
            title: "The Ultracheese",
            duration: new Date(1900, 0, 1, 0, 3, 37),
          },
        ],
      },

      {
        bgColor: "#7e8181",
        title: "AM",
        launch: new Date(2013, 8, 9),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumAM.jpg"),
        tracks: [
          {
            title: "Do I Wanna Know?",
            duration: new Date(1900, 0, 1, 0, 4, 32),
          },
          {
            title: "R U Mine?",
            duration: new Date(1900, 0, 1, 0, 3, 20),
          },
          {
            title: "One for the Road",
            duration: new Date(1900, 0, 1, 0, 3, 26),
          },
          {
            title: "Arabella",
            duration: new Date(1900, 0, 1, 0, 3, 27),
          },
          {
            title: "I Want It All",
            duration: new Date(1900, 0, 1, 0, 3, 4),
          },
          {
            title: "No.1 Party Anthem",
            duration: new Date(1900, 0, 1, 0, 4, 3),
          },
          {
            title: "Mad Sounds",
            duration: new Date(1900, 0, 1, 0, 3, 35),
          },
          {
            title: "Fireside",
            duration: new Date(1900, 0, 1, 0, 3, 1),
          },
          {
            title: "Why'd You Only Call Me When You're High?",
            duration: new Date(1900, 0, 1, 0, 2, 42),
          },
          {
            title: "Snap Out of It",
            duration: new Date(1900, 0, 1, 0, 3, 12),
          },
          {
            title: "Knee Socks",
            duration: new Date(1900, 0, 1, 0, 4, 17),
          },
          {
            title: "I Wanna Be Yours",
            duration: new Date(1900, 0, 1, 0, 3, 4),
          },
        ],
      },

      {
        bgColor: "#f4f2e4",
        title: "Suck It and See",
        launch: new Date(2011, 5, 6),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumSuckItAndSee.jpg"),
        tracks: [
          {
            title: "She's Thunderstorms",
            duration: new Date(1900, 0, 1, 0, 3, 55),
          },
          {
            title: "Black Treacle",
            duration: new Date(1900, 0, 1, 0, 3, 35),
          },
          {
            title: "Brick by Brick",
            duration: new Date(1900, 0, 1, 0, 2, 59),
          },
          {
            title: "The Hellcat Spangled Shalalala",
            duration: new Date(1900, 0, 1, 0, 3, 0),
          },
          {
            title: "Don't Sit Down 'Cause I've Moved Your Chair",
            duration: new Date(1900, 0, 1, 0, 3, 4),
          },
          {
            title: "Library Pictures",
            duration: new Date(1900, 0, 1, 0, 2, 22),
          },
          {
            title: "All My Own Stunts",
            duration: new Date(1900, 0, 1, 0, 3, 52),
          },
          {
            title: "Reckless Serenade",
            duration: new Date(1900, 0, 1, 0, 2, 43),
          },
          {
            title: "Piledriver Waltz",
            duration: new Date(1900, 0, 1, 0, 3, 24),
          },
          {
            title: "Love Is a Laserquest",
            duration: new Date(1900, 0, 1, 0, 3, 12),
          },
          {
            title: "Suck It and See",
            duration: new Date(1900, 0, 1, 0, 3, 46),
          },
          {
            title: "That's Where You're Wrong",
            duration: new Date(1900, 0, 1, 0, 4, 17),
          },
        ],
      },

      {
        bgColor: "#a37a81",
        title: "Humbug",
        launch: new Date(2009, 7, 19),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumHumbug.jpg"),
        tracks: [
          {
            title: "My Propeller",
            duration: new Date(1900, 0, 1, 0, 3, 27),
          },
          {
            title: "Crying Lightning",
            duration: new Date(1900, 0, 1, 0, 3, 43),
          },
          {
            title: "Dangerous Animals",
            duration: new Date(1900, 0, 1, 0, 3, 30),
          },
          {
            title: "Secret Door",
            duration: new Date(1900, 0, 1, 0, 3, 43),
          },
          {
            title: "Potion Approaching",
            duration: new Date(1900, 0, 1, 0, 3, 32),
          },
          {
            title: "Fire and the Thud",
            duration: new Date(1900, 0, 1, 0, 3, 57),
          },
          {
            title: "Cornerstone",
            duration: new Date(1900, 0, 1, 0, 3, 17),
          },
          {
            title: "Dance Little Liar",
            duration: new Date(1900, 0, 1, 0, 4, 43),
          },
          {
            title: "Pretty Visitors",
            duration: new Date(1900, 0, 1, 0, 3, 40),
          },
          {
            title: "The Jeweller's Hands",
            duration: new Date(1900, 0, 1, 0, 5, 42),
          },
        ],
      },

      {
        bgColor: "#8c8494",
        title: "Favourite Worst Nightmare",
        launch: new Date(2007, 3, 23),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumFavouriteWorstNightmare.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },

          {
            title: "Brianstorm",
            duration: new Date(1900, 0, 1, 0, 2, 50),
          },
          {
            title: "Teddy Picker",
            duration: new Date(1900, 0, 1, 0, 2, 43),
          },
          {
            title: "D Is for Dangerous",
            duration: new Date(1900, 0, 1, 0, 2, 16),
          },
          {
            title: "Balaclava",
            duration: new Date(1900, 0, 1, 0, 2, 49),
          },
          {
            title: "Fluorescent Adolescent",
            duration: new Date(1900, 0, 1, 0, 3, 3),
          },
          {
            title: "Only Ones Who Know",
            duration: new Date(1900, 0, 1, 0, 3, 2),
          },
          {
            title: "Do Me a Favour",
            duration: new Date(1900, 0, 1, 0, 3, 27),
          },
          {
            title: "This House Is a Circus",
            duration: new Date(1900, 0, 1, 0, 3, 9),
          },
          {
            title: "If You Were There, Beware",
            duration: new Date(1900, 0, 1, 0, 4, 34),
          },
          {
            title: "The Bad Thing",
            duration: new Date(1900, 0, 1, 0, 2, 23),
          },
          {
            title: "Old Yellow Bricks",
            duration: new Date(1900, 0, 1, 0, 3, 11),
          },
          {
            title: "505",
            duration: new Date(1900, 0, 1, 0, 4, 13),
          },
        ],
      },

      {
        bgColor: "#b0c4bc",
        title: "Whatever People Say I Am, That's What I'm Not",
        launch: new Date(2006, 0, 23),
        imageUrl: require("../assets/images/ArcticMonkeysAlbumWhateverPeopleSayIAmThatsWhatImNot.jpg"),
        tracks: [
          {
            title: "The View from the Afternoon",
            duration: new Date(1900, 0, 1, 0, 3, 38),
          },
          {
            title: "I Bet You Look Good on the Dancefloor",
            duration: new Date(1900, 0, 1, 0, 2, 53),
          },
          {
            title: "Fake Tales of San Francisco",
            duration: new Date(1900, 0, 1, 0, 2, 57),
          },
          {
            title: "Dancing Shoes",
            duration: new Date(1900, 0, 1, 0, 2, 21),
          },
          {
            title:
              "You Probably Couldn't See for the Lights but You Were Staring Straight at Me",
            duration: new Date(1900, 0, 1, 0, 2, 10),
          },
          {
            title: "Still Take You Home",
            duration: new Date(1900, 0, 1, 0, 2, 53),
          },
          {
            title: "Riot Van",
            duration: new Date(1900, 0, 1, 0, 2, 14),
          },
          {
            title: "Red Light Indicates Doors Are Secured",
            duration: new Date(1900, 0, 1, 0, 2, 23),
          },
          {
            title: "Mardy Bum",
            duration: new Date(1900, 0, 1, 0, 2, 55),
          },
          {
            title: "Perhaps Vampires Is a Bit Strong But...",
            duration: new Date(1900, 0, 1, 0, 4, 28),
          },
          {
            title: "When the Sun Goes Down",
            duration: new Date(1900, 0, 1, 0, 3, 20),
          },
          {
            title: "From the Ritz to the Rubble",
            duration: new Date(1900, 0, 1, 0, 3, 13),
          },
          {
            title: "A Certain Romance",
            duration: new Date(1900, 0, 1, 0, 5, 31),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#344c64",
    title: "Cage The Elephant",
    description: `Cage the Elephant é uma banda de rock norte-americana, de Bowling Green, Kentucky, iniciada em 2006. Eles ganharam o Grammy Award para melhor álbum de rock duas vezes: en 2017 por Tell Me I'm Pretty e em 2020 por Social Cues.`,
    generes: ["Rock alternativo", "Punk rock", "Indie rock", "Punk blues"],
    imageUrl: require("../assets/images/CageTheElephantCover.jpg"),
    likedSongs: 13,
    monthlyListeners: 5826647,
    mostListened: [
      { album: 0, track: 1, amount: 836857313 },
      { album: 0, track: 0, amount: 473829749 },
      { album: 0, track: 4, amount: 674364284 },
      { album: 0, track: 6, amount: 437628946 },
      { album: 0, track: 10, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/CageTheElephantPlayListThisIs.png"),
        title: "This Is Cage The Elephant",
      },
      {
        imageUrl: require("../assets/images/CageTheElephantPlayListRadio.jpg"),
        title: "Cage The Elephant Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#056b8c",
        title: "Social Cues",
        launch: new Date(2019, 3, 19),
        imageUrl: require("../assets/images/CageTheElephantAlbumSocialCues.jpg"),
        tracks: [
          {
            title: "Broken Boy",
            duration: new Date(1900, 0, 1, 0, 2, 43),
          },
          {
            title: "Social Cues",
            duration: new Date(1900, 0, 1, 0, 3, 39),
          },
          {
            title: "Black Madona",
            duration: new Date(1900, 0, 1, 0, 3, 47),
          },
          {
            title: "Night Running",
            duration: new Date(1900, 0, 1, 0, 3, 28),
          },
          {
            title: "Skin and Bones",
            duration: new Date(1900, 0, 1, 0, 3, 16),
          },
          {
            title: "Ready to Let Go",
            duration: new Date(1900, 0, 1, 0, 3, 8),
          },
          {
            title: "House of Glass",
            duration: new Date(1900, 0, 1, 0, 2, 35),
          },
          {
            title: "Love's The Only Way",
            duration: new Date(1900, 0, 1, 0, 4, 1),
          },
          {
            title: "The War is Over",
            duration: new Date(1900, 0, 1, 0, 3, 16),
          },
          {
            title: "Dance Dance",
            duration: new Date(1900, 0, 1, 0, 3, 10),
          },
          {
            title: "What I'm Becoming",
            duration: new Date(1900, 0, 1, 0, 3, 50),
          },
          {
            title: "Tokyo Smoke",
            duration: new Date(1900, 0, 1, 0, 3, 26),
          },
          {
            title: "Goodbye",
            duration: new Date(1900, 0, 1, 0, 4, 16),
          },
        ],
      },
      {
        bgColor: "#5e462e",
        title: "Unpeeled",
        launch: new Date(2017, 6, 28),
        imageUrl: require("../assets/images/CageTheElephantAlbumUnpeeled.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },
        ],
      },
      {
        bgColor: "#8d7f8a",
        title: "Tell Me I'm Pretty",
        launch: new Date(2015, 11, 18),
        imageUrl: require("../assets/images/CageTheElephantAlbumTellMeImPretty.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },
        ],
      },
      {
        bgColor: "#e28a29",
        title: "Melophobia",
        launch: new Date(2013, 9, 8),
        imageUrl: require("../assets/images/CageTheElephantAlbumMelophobia.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },
        ],
      },
      {
        bgColor: "#814a77",
        title: "Cage The Elephant",
        launch: new Date(2008, 6, 23),
        imageUrl: require("../assets/images/CageTheElephantAlbumCageTheElephant.jpg"),
        tracks: [
          {
            title: "Title",
            duration: new Date(1900, 0, 1, 0, 5, 14),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#af6f83",
    title: "Dua Lipa",
    description: `Dua Lipa (Londres, 22 de agosto de 1995) é uma cantora, compositora e modelo britânica, de origem albanesa. Nascida e criada em Londres e passando parte de sua adolescência, mais especificamente dos 13 aos 15 anos, em Pristina, Kosovo, Lipa é evidenciada ao mundo em 2017 com o seu sucesso "New Rules". Com inspirações em artistas como Madonna, Outkast, Moloko e seu pai, Dukagjin Lipa, o qual cresceu ouvindo, Dua foi revelada em 2015 com o seu sucesso "Be The One", e consigo trouxe a dance music e o dark pop.`,
    generes: ["Popsynth", "popdance", "popdream pop"],
    imageUrl: require("../assets/images/DuaLipaCover.jpg"),
    likedSongs: 5,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 0, track: 4, amount: 836857313 },
      { album: 0, track: 1, amount: 473829749 },
      { album: 0, track: 6, amount: 674364284 },
      { album: 0, track: 3, amount: 437628946 },
      { album: 1, track: 9, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/DuaLipaPlayListThisIs.jpg"),
        title: "This Is Dua Lipa",
      },
      {
        imageUrl: require("../assets/images/DuaLipaPlayListRadio.jpg"),
        title: "Dua Lipa Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#E996A3",
        title: "Future Nostalgia",
        launch: new Date(2020, 2, 27),
        imageUrl: require("../assets/images/DuaLipaAlbumFutureNostalgia.jpg"),
        tracks: [
          {
            title: "Future Nostalgia",
            duration: new Date(1900, 0, 1, 0, 3, 4),
          },
          {
            title: "Don't Start Now",
            duration: new Date(1900, 0, 1, 0, 3, 3),
          },
          {
            title: "Cool",
            duration: new Date(1900, 0, 1, 0, 3, 29),
          },
          {
            title: "Physical",
            duration: new Date(1900, 0, 1, 0, 3, 13),
          },
          {
            title: "Levitating",
            duration: new Date(1900, 0, 1, 0, 3, 23),
          },
          {
            title: "Pretty Please",
            duration: new Date(1900, 0, 1, 0, 3, 14),
          },
          {
            title: "Hallucinate",
            duration: new Date(1900, 0, 1, 0, 3, 28),
          },
          {
            title: "Love Again",
            duration: new Date(1900, 0, 1, 0, 4, 18),
          },
          {
            title: "Break My Heart",
            duration: new Date(1900, 0, 1, 0, 3, 41),
          },
          {
            title: "Good in Bed",
            duration: new Date(1900, 0, 1, 0, 3, 38),
          },
          {
            title: "Boys Will Be Boys",
            duration: new Date(1900, 0, 1, 0, 2, 46),
          },
        ],
      },
      {
        bgColor: "#548abc",
        title: "Dua Lipa",
        launch: new Date(2017, 5, 2),
        imageUrl: require("../assets/images/DuaLipaAlbumDuaLipa.jpg"),
        tracks: [
          {
            title: "Genesis",
            duration: new Date(1900, 0, 1, 0, 3, 25),
          },
          {
            title: "Lost in Your Light",
            duration: new Date(1900, 0, 1, 0, 3, 23),
          },
          {
            title: "Hotter Than Hell",
            duration: new Date(1900, 0, 1, 0, 3, 7),
          },
          {
            title: "Be the One",
            duration: new Date(1900, 0, 1, 0, 3, 22),
          },
          {
            title: "IDGAF",
            duration: new Date(1900, 0, 1, 0, 3, 38),
          },
          {
            title: "Blow Your Mind (Mwah)",
            duration: new Date(1900, 0, 1, 0, 2, 58),
          },
          {
            title: "Garden",
            duration: new Date(1900, 0, 1, 0, 3, 47),
          },
          {
            title: "No Goodbyes",
            duration: new Date(1900, 0, 1, 0, 3, 36),
          },
          {
            title: "Thinking 'Bout You",
            duration: new Date(1900, 0, 1, 0, 2, 51),
          },
          {
            title: "New Rules",
            duration: new Date(1900, 0, 1, 0, 3, 32),
          },
          {
            title: "Begging",
            duration: new Date(1900, 0, 1, 0, 3, 14),
          },
          {
            title: "Homesick",
            duration: new Date(1900, 0, 1, 0, 3, 50),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#333430",
    title: "Lana Del Rey",
    description: `Elizabeth Woolridge Grant (Nova Iorque, 21 de junho de 1985), mais conhecida como Lana Del Rey, é uma cantora, compositora, produtora e poetisa norte-americana. Sua música tem sido notada pelos críticos por seu aspecto cinematográfico estilizado, suas temáticas de romances trágicos, glamour e melancolia, e suas referências à cultura pop, especialmente a cultura dos Estados Unidos nos anos 1950 e 1960. Indicada a vários prêmios Grammy, Globo de Ouro e outros, em 2021, foi nomeada "Artista da Década" no Variety Hitmakers Awards, sendo apresentada como ″uma das cantoras e compositoras mais influentes do século XXI".`,
    generes: [
      "Pop barroco",
      "trip hop",
      "dream pop",
      "indie pop",
      "rock",
      "folk",
    ],
    imageUrl: require("../assets/images/LanaDelReyCover.jpg"),
    likedSongs: 9,
    monthlyListeners: 44567346,
    mostListened: [
      { album: 2, track: 3, amount: 894502384 },
      { album: 1, track: 1, amount: 473829749 },
      { album: 0, track: 1, amount: 674364284 },
      { album: 2, track: 5, amount: 437628946 },
      { album: 1, track: 4, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/LanaDelReyPlayListThisIs.jpg"),
        title: "This Is Lana Del Rey",
      },
      {
        imageUrl: require("../assets/images/LanaDelReyPlayListRadio.jpg"),
        title: "Lana Del Rey Radio",
      },
      {
        title: "Sad Songs",
        imageUrl: require("../assets/images/PlayListSadCovers.jpg"),
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#345861",
        title: "Lust for Life",
        launch: new Date(2017, 6, 21),
        imageUrl: require("../assets/images/LanaDelReyAlbumLustForLife.jpg"),
        tracks: [
          {
            title: "Love",
            duration: new Date(1900, 0, 1, 0, 4, 32),
          },
          {
            title: "Lust for Life",
            duration: new Date(1900, 0, 1, 0, 4, 24),
          },
          {
            title: "13 Beaches",
            duration: new Date(1900, 0, 1, 0, 4, 56),
          },
          {
            title: "Cherry",
            duration: new Date(1900, 0, 1, 0, 3, 1),
          },
          {
            title: "White Mustang",
            duration: new Date(1900, 0, 1, 0, 2, 45),
          },
          {
            title: "Summer Bummer",
            duration: new Date(1900, 0, 1, 0, 4, 20),
          },
          {
            title: "Groupie Love",
            duration: new Date(1900, 0, 1, 0, 4, 24),
          },
          {
            title: "In My Feelings",
            duration: new Date(1900, 0, 1, 0, 3, 59),
          },
          {
            title: "Coachella – Woodstock in My Mind",
            duration: new Date(1900, 0, 1, 0, 4, 18),
          },
          {
            title: "God Bless America – And All the Beautiful Women in It",
            duration: new Date(1900, 0, 1, 0, 4, 36),
          },
          {
            title: "When the World Was at War We Kept Dancing",
            duration: new Date(1900, 0, 1, 0, 4, 36),
          },
          {
            title: "Beautiful People Beautiful Problems",
            duration: new Date(1900, 0, 1, 0, 4, 14),
          },
          {
            title: "Tomorrow Never Came",
            duration: new Date(1900, 0, 1, 0, 5, 7),
          },
          {
            title: "Heroin",
            duration: new Date(1900, 0, 1, 0, 5, 55),
          },
          {
            title: "Change",
            duration: new Date(1900, 0, 1, 0, 5, 21),
          },
          {
            title: "Get Free",
            duration: new Date(1900, 0, 1, 0, 5, 34),
          },
        ],
      },
      {
        bgColor: "#1c1914",
        title: "Ultraviolence",
        launch: new Date(2014, 5, 13),
        imageUrl: require("../assets/images/LanaDelReyAlbumUltraviolence.jpg"),
        tracks: [
          {
            title: "Cruel World",
            duration: new Date(1900, 0, 1, 0, 6, 38),
          },
          {
            title: "Ultraviolence",
            duration: new Date(1900, 0, 1, 0, 4, 9),
          },
          {
            title: "Shades of Cool",
            duration: new Date(1900, 0, 1, 0, 5, 40),
          },
          {
            title: "Brooklyn Baby",
            duration: new Date(1900, 0, 1, 0, 5, 49),
          },
          {
            title: "West Coast",
            duration: new Date(1900, 0, 1, 0, 4, 15),
          },
          {
            title: "Sad Girl",
            duration: new Date(1900, 0, 1, 0, 5, 17),
          },
          {
            title: "Pretty When You Cry",
            duration: new Date(1900, 0, 1, 0, 3, 52),
          },
          {
            title: "Money Power Glory",
            duration: new Date(1900, 0, 1, 0, 4, 28),
          },
          {
            title: "Fucked My Way Up To the Top",
            duration: new Date(1900, 0, 1, 0, 3, 30),
          },
          {
            title: "Old Money",
            duration: new Date(1900, 0, 1, 0, 4, 29),
          },
          {
            title: "The Other Woman",
            duration: new Date(1900, 0, 1, 0, 2, 58),
          },
        ],
      },
      {
        bgColor: "#6a84ac",
        title: "Born to Die",
        launch: new Date(2012, 0, 27),
        imageUrl: require("../assets/images/LanaDelReyAlbumBornToDie.jpg"),
        tracks: [
          {
            title: "Born to Die",
            duration: new Date(1900, 0, 1, 0, 4, 45),
          },
          {
            title: "Off to the Races",
            duration: new Date(1900, 0, 1, 0, 5, 4),
          },
          {
            title: "Blue Jeans",
            duration: new Date(1900, 0, 1, 0, 3, 30),
          },
          {
            title: "Video Games",
            duration: new Date(1900, 0, 1, 0, 4, 42),
          },
          {
            title: "Diet Mountain Dew",
            duration: new Date(1900, 0, 1, 0, 3, 43),
          },
          {
            title: "National Anthem",
            duration: new Date(1900, 0, 1, 0, 3, 51),
          },
          {
            title: "Dark Paradise",
            duration: new Date(1900, 0, 1, 0, 4, 3),
          },
          {
            title: "Radio",
            duration: new Date(1900, 0, 1, 0, 3, 35),
          },
          {
            title: "Carmen",
            duration: new Date(1900, 0, 1, 0, 4, 9),
          },
          {
            title: "Million Dollar Man",
            duration: new Date(1900, 0, 1, 0, 3, 50),
          },
          {
            title: "Summertime Sadness",
            duration: new Date(1900, 0, 1, 0, 4, 25),
          },
          {
            title: "This Is What Makes Us Girls",
            duration: new Date(1900, 0, 1, 0, 3, 58),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#543d2a",
    title: "Machine Gun Kelly",
    description: `Colson Baker (nascido 22 de Abril de 1990), mais conhecido por seu nome artístico Machine Gun Kelly ou MGK é um músico americano que atua em sua carreira como rapper, seguindo ao pop punk onde se encontra atualmente como cantor, compositor e ator. O álbum de estreia de Baker, Lace Up, foi lançado em 2012 e foi seguido por quatro subsequentes lançamentos de estúdio. Como ator, Baker fez sua estreia no cinema no drama romântico de 2014 Beyond the Lights. Ele também apareceu em vários outros filmes e teve um papel recorrente na série Roadies, do canal Showtime em 2016.`,
    generes: ["indie rock"],
    imageUrl: require("../assets/images/MachineGunKellyCover.jpg"),
    likedSongs: 5,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 1, track: 10, amount: 836857313 },
      { album: 0, track: 6, amount: 473829749 },
      { album: 0, track: 7, amount: 674364284 },
      { album: 1, track: 4, amount: 437628946 },
      { album: 1, track: 3, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/MachineGunKellyPlayListThisIs.jpg"),
        title: "This Is Machine Gun Kelly",
      },
      {
        imageUrl: require("../assets/images/MachineGunKellyPlayListRadio.jpg"),
        title: "Machine Gun Kelly Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#c067a1",
        title: "Mainstream Sellout",
        launch: new Date(2022, 2, 25),
        imageUrl: require("../assets/images/MachineGunKellyAlbumMainstreamSellout.jpg"),
        tracks: [
          {
            title: "Born with Horns",
            duration: new Date(1900, 0, 1, 0, 2, 27),
          },
          {
            title: "God Save Me",
            duration: new Date(1900, 0, 1, 0, 3, 0),
          },
          {
            title: "Maybe",
            duration: new Date(1900, 0, 1, 0, 2, 50),
          },
          {
            title: "Drug Dealer",
            duration: new Date(1900, 0, 1, 0, 2, 52),
          },
          {
            title: "Wall of Fame (Interlude)",
            duration: new Date(1900, 0, 1, 0, 0, 32),
          },
          {
            title: "Mainstream Sellout",
            duration: new Date(1900, 0, 1, 0, 1, 47),
          },
          {
            title: "Make Up Sex",
            duration: new Date(1900, 0, 1, 0, 2, 2),
          },
          {
            title: "Emo Girl",
            duration: new Date(1900, 0, 1, 0, 2, 39),
          },
          {
            title: "5150",
            duration: new Date(1900, 0, 1, 0, 2, 54),
          },
          {
            title: "Papercuts",
            duration: new Date(1900, 0, 1, 0, 3, 1),
          },
          {
            title: "WW4",
            duration: new Date(1900, 0, 1, 0, 1, 12),
          },
          {
            title: "Ay!",
            duration: new Date(1900, 0, 1, 0, 2, 4),
          },
          {
            title: "Fake Love Don't Last",
            duration: new Date(1900, 0, 1, 0, 2, 23),
          },
          {
            title: "Die in California",
            duration: new Date(1900, 0, 1, 0, 3, 27),
          },
          {
            title: "Sid & Nancy",
            duration: new Date(1900, 0, 1, 0, 3, 9),
          },
          {
            title: "Twin Flame",
            duration: new Date(1900, 0, 1, 0, 3, 59),
          },
        ],
      },
      {
        bgColor: "#a67452",
        title: "Tickets to My Downfall",
        launch: new Date(2020, 8, 25),
        imageUrl: require("../assets/images/MachineGunKellyAlbumTicketsToMyDownfall.jpg"),
        tracks: [
          {
            title: "Title Track",
            duration: new Date(1900, 0, 1, 0, 2, 45),
          },
          {
            title: "Kiss Kiss",
            duration: new Date(1900, 0, 1, 0, 2, 18),
          },
          {
            title: "Drunk Face",
            duration: new Date(1900, 0, 1, 0, 2, 23),
          },
          {
            title: "Bloody Valentine",
            duration: new Date(1900, 0, 1, 0, 3, 25),
          },
          {
            title: "Forget Me Too",
            duration: new Date(1900, 0, 1, 0, 2, 51),
          },
          {
            title: "All I Know",
            duration: new Date(1900, 0, 1, 0, 2, 9),
          },
          {
            title: "Lonely",
            duration: new Date(1900, 0, 1, 0, 3, 10),
          },
          {
            title: "WWIII",
            duration: new Date(1900, 0, 1, 0, 0, 59),
          },
          {
            title: "Kevin and Barracuda",
            duration: new Date(1900, 0, 1, 0, 1, 23),
          },
          {
            title: "Concert for Aliens",
            duration: new Date(1900, 0, 1, 0, 2, 40),
          },
          {
            title: "My Ex's Best Friend",
            duration: new Date(1900, 0, 1, 0, 2, 18),
          },
          {
            title: "Jawbreaker",
            duration: new Date(1900, 0, 1, 0, 1, 57),
          },
          {
            title: "Nothing Inside",
            duration: new Date(1900, 0, 1, 0, 2, 52),
          },
          {
            title: "Banyan Tree",
            duration: new Date(1900, 0, 1, 0, 1, 31),
          },
          {
            title: "Play This When I'm Gone",
            duration: new Date(1900, 0, 1, 0, 3, 22),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#545454",
    title: "Portugal The Man",
    description: `Portugal. The Man é uma banda de música de rock psicodélico, com influências indie, baseada na cidade de Portland, no estado norte-americano de Oregon, mas originária de Wasilla, Alasca. O grupo editou os seus dois primeiros álbuns com a Fearless Records. Assinaram contrato com a Atlantic Records em 2 de abril de 2010.`,
    generes: [
      "Rock psicodélico",
      "Pop psicodélico",
      "Rock progressivo",
      "Indie rock",
      "Rock alternativo",
    ],
    imageUrl: require("../assets/images/PortugalTheManCover.jpg"),
    likedSongs: 10,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 1, track: 10, amount: 836857313 },
      { album: 0, track: 3, amount: 473829749 },
      { album: 0, track: 6, amount: 674364284 },
      { album: 1, track: 4, amount: 437628946 },
      { album: 1, track: 3, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/PortugalTheManPlayListThisIs.jpg"),
        title: "This Is Portugal The Man",
      },
      {
        imageUrl: require("../assets/images/PortugalTheManPlayListRadio.jpg"),
        title: "Portugal The Man Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#541d0a",
        title: "Woodstock",
        launch: new Date(2017, 5, 16),
        imageUrl: require("../assets/images/PortugalTheManAlbumWoodstock.jpg"),
        tracks: [
          {
            title: "Number One",
            duration: new Date(1900, 0, 1, 0, 5, 21),
          },
          {
            title: "Easy Tiger",
            duration: new Date(1900, 0, 1, 0, 3, 37),
          },
          {
            title: "Live in the Moment",
            duration: new Date(1900, 0, 1, 0, 4, 6),
          },
          {
            title: "Feel It Still",
            duration: new Date(1900, 0, 1, 0, 2, 42),
          },
          {
            title: "Rich Friends",
            duration: new Date(1900, 0, 1, 0, 3, 41),
          },
          {
            title: "Keep On",
            duration: new Date(1900, 0, 1, 0, 3, 23),
          },
          {
            title: "So Young",
            duration: new Date(1900, 0, 1, 0, 4, 6),
          },
          {
            title: "Mr. Lonely",
            duration: new Date(1900, 0, 1, 0, 4, 22),
          },
          {
            title: "Tidal Wave",
            duration: new Date(1900, 0, 1, 0, 3, 31),
          },
          {
            title: "Noise Pollution",
            duration: new Date(1900, 0, 1, 0, 3, 45),
          },
        ],
      },
      {
        bgColor: "#C7A849",
        title: "Evil Friends",
        launch: new Date(2013, 5, 4),
        imageUrl: require("../assets/images/PortugalTheManAlbumEvilFriends.jpg"),
        tracks: [
          {
            title: "Plastic Soldiers",
            duration: new Date(1900, 0, 1, 0, 5, 4),
          },
          {
            title: "Creep in a T-Shirt",
            duration: new Date(1900, 0, 1, 0, 3, 54),
          },
          {
            title: "Evil Friends",
            duration: new Date(1900, 0, 1, 0, 3, 36),
          },
          {
            title: "Modern Jesus",
            duration: new Date(1900, 0, 1, 0, 3, 14),
          },
          {
            title: "Hip Hop Kids",
            duration: new Date(1900, 0, 1, 0, 3, 28),
          },
          {
            title: "Atomic Man",
            duration: new Date(1900, 0, 1, 0, 3, 48),
          },
          {
            title: "Sea of Air",
            duration: new Date(1900, 0, 1, 0, 4, 22),
          },
          {
            title: "Waves",
            duration: new Date(1900, 0, 1, 0, 4, 52),
          },
          {
            title: "Holy Roller (Hallelujah)",
            duration: new Date(1900, 0, 1, 0, 3, 21),
          },
          {
            title: "Someday Believers",
            duration: new Date(1900, 0, 1, 0, 3, 54),
          },
          {
            title: "Purple Yellow Red and Blue",
            duration: new Date(1900, 0, 1, 0, 4, 11),
          },
          {
            title: "Smile",
            duration: new Date(1900, 0, 1, 0, 4, 51),
          },
        ],
      },
      {
        bgColor: "#823d87",
        title: "In the Mountain in the Cloud",
        launch: new Date(2011, 6, 19),
        imageUrl: require("../assets/images/PortugalTheManAlbumInTheMountainInTheCloud.jpg"),
        tracks: [
          {
            title: "So American",
            duration: new Date(1900, 0, 1, 0, 3, 36),
          },
          {
            title: "Floating (Time Isn't Working My Side)",
            duration: new Date(1900, 0, 1, 0, 3, 36),
          },
          {
            title: "Got It All (This Can't Be Living Now)",
            duration: new Date(1900, 0, 1, 0, 3, 46),
          },
          {
            title: "Senseless",
            duration: new Date(1900, 0, 1, 0, 3, 26),
          },
          {
            title: "Head Is a Flame (Cool with It)",
            duration: new Date(1900, 0, 1, 0, 3, 33),
          },
          {
            title: "You Carried Us (Share with Me the Sun)",
            duration: new Date(1900, 0, 1, 0, 4, 7),
          },
          {
            title: "Everything You See (Kids Count Hallelujahs)",
            duration: new Date(1900, 0, 1, 0, 4, 15),
          },
          {
            title: "All Your Light (Times Like These)",
            duration: new Date(1900, 0, 1, 0, 4, 26),
          },
          {
            title: "Once Was One",
            duration: new Date(1900, 0, 1, 0, 4, 22),
          },
          {
            title: "Share with Me the Sun",
            duration: new Date(1900, 0, 1, 0, 2, 44),
          },
          {
            title: "Sleep Forever",
            duration: new Date(1900, 0, 1, 0, 6, 19),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#1c1c1c",
    title: "Queens of the Stone Age",
    description: `Queens of the Stone Age é uma banda norte-americana de rock formada em Palm Desert, Califórnia em 1996.

    É muito conhecida por popularizar o gênero stoner rock que até os anos 2000 não era muito conhecido. Sempre em constante mudança de integrantes a banda possui apenas o vocalista, guitarrista e compositor, Josh Homme, como integrante original.`,
    generes: ["indie rock"],
    imageUrl: require("../assets/images/QueensOfTheStoneAgeCover.jpg"),
    likedSongs: 10,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 0, track: 1, amount: 836857313 },
      { album: 1, track: 1, amount: 473829749 },
      { album: 0, track: 5, amount: 674364284 },
      { album: 2, track: 6, amount: 437628946 },
      { album: 1, track: 4, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/QueensOfTheStoneAgePlayListThisIs.jpg"),
        title: "This Is Queens of the Stone Age",
      },
      {
        imageUrl: require("../assets/images/QueensOfTheStoneAgePlayListRadio.jpg"),
        title: "Queens of the Stone Age Radio",
      },
      {
        title: "Pure Rock",
        imageUrl: require("../assets/images/PlayListPureRock.jpg"),
      },
      {
        title: "Rock Mix",
        imageUrl: require("../assets/images/PlayListRockMix.jpg"),
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#b9454c",
        title: "Villains",
        launch: new Date(2017, 7, 25),
        imageUrl: require("../assets/images/QueensOfTheStoneAgeAlbumVillains.jpg"),
        tracks: [
          {
            title: "Feet Don't Fail Me",
            duration: new Date(1900, 0, 1, 0, 5, 41),
          },
          {
            title: "The Way You Used to Do",
            duration: new Date(1900, 0, 1, 0, 4, 34),
          },
          {
            title: "Domesticated Animals",
            duration: new Date(1900, 0, 1, 0, 5, 20),
          },
          {
            title: "Fortress",
            duration: new Date(1900, 0, 1, 0, 5, 27),
          },
          {
            title: "Head Like a Haunted House",
            duration: new Date(1900, 0, 1, 0, 3, 21),
          },
          {
            title: "Un-Reborn Again",
            duration: new Date(1900, 0, 1, 0, 6, 40),
          },
          {
            title: "Hideaway",
            duration: new Date(1900, 0, 1, 0, 4, 18),
          },
          {
            title: "The Evil Has Landed",
            duration: new Date(1900, 0, 1, 0, 6, 30),
          },
          {
            title: "Villains of Circumstance",
            duration: new Date(1900, 0, 1, 0, 6, 9),
          },
        ],
      },
      {
        bgColor: "#f40444",
        title: "...Like Clockwork",
        launch: new Date(2013, 5, 3),
        imageUrl: require("../assets/images/QueensOfTheStoneAgeAlbumLikeClockwork.jpg"),
        tracks: [
          {
            title: "Keep Your Eyes Peeled",
            duration: new Date(1900, 0, 1, 0, 5, 4),
          },
          {
            title: "I Sat by the Ocean",
            duration: new Date(1900, 0, 1, 0, 3, 55),
          },
          {
            title: "The Vampyre of Time and Memory",
            duration: new Date(1900, 0, 1, 0, 3, 34),
          },
          {
            title: "If I Had A Tail",
            duration: new Date(1900, 0, 1, 0, 4, 55),
          },
          {
            title: "My God Is The Sun",
            duration: new Date(1900, 0, 1, 0, 3, 39),
          },
          {
            title: "Kalopsia",
            duration: new Date(1900, 0, 1, 0, 4, 38),
          },
          {
            title: "Fairweather Friends",
            duration: new Date(1900, 0, 1, 0, 3, 43),
          },
          {
            title: "Smooth Sailing",
            duration: new Date(1900, 0, 1, 0, 4, 51),
          },
          {
            title: "I Appear Missing",
            duration: new Date(1900, 0, 1, 0, 6, 0),
          },
          {
            title: "…Like Clockwork",
            duration: new Date(1900, 0, 1, 0, 5, 24),
          },
        ],
      },
      {
        bgColor: "#b72c6a",
        title: "Era Vulgaris",
        launch: new Date(2007, 5, 12),
        imageUrl: require("../assets/images/QueensOfTheStoneAgeAlbumEraVulgaris.jpg"),
        tracks: [
          {
            title: "Turning On The Screw",
            duration: new Date(1900, 0, 1, 0, 5, 20),
          },
          {
            title: "Sick, Sick, Sick",
            duration: new Date(1900, 0, 1, 0, 3, 34),
          },
          {
            title: "I'm Designer",
            duration: new Date(1900, 0, 1, 0, 4, 4),
          },
          {
            title: "Into The Hollow",
            duration: new Date(1900, 0, 1, 0, 3, 32),
          },
          {
            title: "Misfit Love",
            duration: new Date(1900, 0, 1, 0, 5, 39),
          },
          {
            title: "Battery Acid",
            duration: new Date(1900, 0, 1, 0, 4, 36),
          },
          {
            title: "Make It Wit Chu",
            duration: new Date(1900, 0, 1, 0, 4, 50),
          },
          {
            title: "3's & 7's",
            duration: new Date(1900, 0, 1, 0, 3, 34),
          },
          {
            title: "Suture Up Your Future",
            duration: new Date(1900, 0, 1, 0, 4, 37),
          },
          {
            title: "River In The Road",
            duration: new Date(1900, 0, 1, 0, 3, 19),
          },
          {
            title: "Run Pig Run",
            duration: new Date(1900, 0, 1, 0, 4, 48),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#72938b",
    title: "Tame Impala",
    description: `Tame Impala é um projeto de música psicodélica australiano fundado pelo multi-instrumentista Kevin Parker em 2007. Em estúdio, Parker compõe, grava, executa e produz sozinho as músicas. Em turnês, o projeto tem a formação de banda consistindo em Kevin Parker (guitarra principal e vocais), Jay Watson (sintetizador, vocais de apoio e guitarra), Dominic Simper (guitarra e sintetizador), Cam Avery (baixo e vocais de apoio) e Julien Barbagallo (bateria e vocais de apoio). Anteriormente assinada com a Modular Recordings, o Tame Impala é assinado atualmente pela Interscope Records nos Estados Unidos e pela Fiction Records na Inglaterra.`,
    generes: ["	Rock psicodélico", "Pop psicodélico", "Neo-psicodelia"],
    imageUrl: require("../assets/images/TameImpalaCover.jpg"),
    likedSongs: 10,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 0, track: 6, amount: 483904092 },
      { album: 0, track: 0, amount: 836857313 },
      { album: 1, track: 5, amount: 543545355 },
      { album: 2, track: 0, amount: 473829749 },
      { album: 1, track: 4, amount: 674364284 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/TameImpalaPlayListThisIs.jpg"),
        title: "This Is Tame Impala",
      },
      {
        imageUrl: require("../assets/images/TameImpalaPlayListRadio.jpg"),
        title: "Tame Impala Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#5c445e",
        title: "Currents",
        launch: new Date(2015, 6, 17),
        imageUrl: require("../assets/images/TameImpalaAlbumCurrents.jpg"),
        tracks: [
          {
            title: "Let it Happen",
            duration: new Date(1900, 0, 1, 0, 7, 46),
          },
          {
            title: "Nangs",
            duration: new Date(1900, 0, 1, 0, 1, 47),
          },
          {
            title: "The Moment",
            duration: new Date(1900, 0, 1, 0, 4, 15),
          },
          {
            title: "Yes I'm Changing",
            duration: new Date(1900, 0, 1, 0, 4, 30),
          },
          {
            title: "Eventually",
            duration: new Date(1900, 0, 1, 0, 5, 19),
          },
          {
            title: "Gossip",
            duration: new Date(1900, 0, 1, 0, 0, 55),
          },
          {
            title: "The Less I Know the Better",
            duration: new Date(1900, 0, 1, 0, 3, 38),
          },
          {
            title: "Past Life",
            duration: new Date(1900, 0, 1, 0, 3, 47),
          },
          {
            title: "Disciples",
            duration: new Date(1900, 0, 1, 0, 1, 48),
          },
          {
            title: "'Cause I'm A Man",
            duration: new Date(1900, 0, 1, 0, 4, 1),
          },
          {
            title: "Reality In Motion",
            duration: new Date(1900, 0, 1, 0, 4, 12),
          },
          {
            title: "Love/Paranoia",
            duration: new Date(1900, 0, 1, 0, 3, 6),
          },
          {
            title: "New Person, Same Old Mistakes",
            duration: new Date(1900, 0, 1, 0, 6, 2),
          },
        ],
      },
      {
        bgColor: "#3F98BA",
        title: "Lonerism",
        launch: new Date(2012, 9, 5),
        imageUrl: require("../assets/images/TameImpalaAlbumLonerism.jpg"),
        tracks: [
          {
            title: "Be Above It",
            duration: new Date(1900, 0, 1, 0, 3, 21),
          },
          {
            title: "Endors Toi",
            duration: new Date(1900, 0, 1, 0, 3, 6),
          },
          {
            title: "Apocalypse Dreams",
            duration: new Date(1900, 0, 1, 0, 5, 56),
          },
          {
            title: "Mind Mischief",
            duration: new Date(1900, 0, 1, 0, 4, 31),
          },
          {
            title: "Music to Walk Home By",
            duration: new Date(1900, 0, 1, 0, 5, 12),
          },
          {
            title: "Why Won't They Talk to Me?",
            duration: new Date(1900, 0, 1, 0, 4, 46),
          },
          {
            title: "Feels Like We Only Go Backwards",
            duration: new Date(1900, 0, 1, 0, 3, 12),
          },
          {
            title: "Keep on Lying",
            duration: new Date(1900, 0, 1, 0, 5, 54),
          },
          {
            title: "Elephant",
            duration: new Date(1900, 0, 1, 0, 3, 31),
          },
          {
            title: "She Just Won't Believe Me",
            duration: new Date(1900, 0, 1, 0, 0, 57),
          },
          {
            title:
              "Nothing That Has Happened So Far Has Been Anything We Could Control",
            duration: new Date(1900, 0, 1, 0, 6, 1),
          },
          {
            title: "Sun's Coming Up",
            duration: new Date(1900, 0, 1, 0, 5, 20),
          },
        ],
      },
      {
        bgColor: "#538d7d",
        title: "InnerSpeaker",
        launch: new Date(2010, 2, 21),
        imageUrl: require("../assets/images/TameImpalaAlbumInnerspeaker.jpg"),
        tracks: [
          {
            title: "It Is Not Meant to Be",
            duration: new Date(1900, 0, 1, 0, 5, 22),
          },
          {
            title: "Desire Be Desire Go",
            duration: new Date(1900, 0, 1, 0, 4, 26),
          },
          {
            title: "Alter Ego",
            duration: new Date(1900, 0, 1, 0, 4, 47),
          },
          {
            title: "Lucidity",
            duration: new Date(1900, 0, 1, 0, 4, 31),
          },
          {
            title: "Why Won't You Make Up Your Mind?",
            duration: new Date(1900, 0, 1, 0, 3, 19),
          },
          {
            title: "Solitude Is Bliss",
            duration: new Date(1900, 0, 1, 0, 3, 55),
          },
          {
            title: "Jeremy's Storm",
            duration: new Date(1900, 0, 1, 0, 5, 28),
          },
          {
            title: "Expectation",
            duration: new Date(1900, 0, 1, 0, 6, 2),
          },
          {
            title: "The Bold Arrow of Time",
            duration: new Date(1900, 0, 1, 0, 4, 24),
          },
          {
            title: "Runway, Houses, City, Clouds",
            duration: new Date(1900, 0, 1, 0, 7, 15),
          },
          {
            title: "I Don't Really Mind",
            duration: new Date(1900, 0, 1, 0, 3, 46),
          },
        ],
      },
    ],
  },

  {
    type: "artist",
    bgColor: "#4d4843",
    title: "Weezer",
    description: `Weezer é uma banda americana de rock de Los Angeles, Califórnia, formada em 1992. A banda é constituída por Rivers Cuomo (vocalista e guitarra), Patrick Wilson (bateria, guitarra e voz de apoio), Brian Bell (guitarra, voz de apoio e teclado) e Scott Shriner (baixo, voz de apoio e teclado). A formação da banda alterou quatro vezes desde a sua criação em 1992. Eles lançaram doze álbuns de longa duração, seis EPs e um DVD.`,
    generes: ["indie rock"],
    imageUrl: require("../assets/images/WeezerCover.jpg"),
    likedSongs: 10,
    monthlyListeners: 25826647,
    mostListened: [
      { album: 0, track: 0, amount: 836857313 },
      { album: 1, track: 3, amount: 473829749 },
      { album: 0, track: 3, amount: 674364284 },
      { album: 0, track: 6, amount: 437628946 },
      { album: 1, track: 0, amount: 543545355 },
    ],
    appearsIn: [
      {
        imageUrl: require("../assets/images/WeezerPlayListThisIs.jpg"),
        title: "This Is Weezer",
      },
      {
        imageUrl: require("../assets/images/WeezerPlayListRadio.jpg"),
        title: "Weezer Radio",
      },
      {
        title: "On fire",
        imageUrl: require("../assets/images/PlayListOnFire.jpg"),
      },
    ],
    albuns: [
      {
        bgColor: "#178db8",
        title: "Weezer (Blue Album)",
        launch: new Date(2017, 6, 28),
        imageUrl: require("../assets/images/WeezerAlbumBlue.jpg"),
        tracks: [
          {
            title: "My Name Is Jonas",
            duration: new Date(1900, 0, 1, 0, 3, 24),
          },
          {
            title: "No One Else",
            duration: new Date(1900, 0, 1, 0, 3, 4),
          },
          {
            title: "The World Has Turned and Left Me Here",
            duration: new Date(1900, 0, 1, 0, 4, 19),
          },
          {
            title: "Buddy Holly",
            duration: new Date(1900, 0, 1, 0, 2, 39),
          },
          {
            title: "Undone – The Sweater Song",
            duration: new Date(1900, 0, 1, 0, 5, 5),
          },
          {
            title: "Surf Wax America",
            duration: new Date(1900, 0, 1, 0, 3, 6),
          },
          {
            title: "Say It Ain't So",
            duration: new Date(1900, 0, 1, 0, 4, 18),
          },
          {
            title: "In the Garage",
            duration: new Date(1900, 0, 1, 0, 3, 55),
          },
          {
            title: "Holiday",
            duration: new Date(1900, 0, 1, 0, 3, 24),
          },
          {
            title: "Only in Dreams",
            duration: new Date(1900, 0, 1, 0, 7, 59),
          },
        ],
      },
      {
        bgColor: "#b1be56",
        title: "Weezer (Green Album)",
        launch: new Date(2017, 6, 28),
        imageUrl: require("../assets/images/WeezerAlbumGreen.jpg"),
        tracks: [
          {
            title: "Don't Let Go",
            duration: new Date(1900, 0, 1, 0, 2, 59),
          },
          {
            title: "Photograph",
            duration: new Date(1900, 0, 1, 0, 2, 19),
          },
          {
            title: "Hash Pipe",
            duration: new Date(1900, 0, 1, 0, 3, 6),
          },
          {
            title: "Island in the Sun",
            duration: new Date(1900, 0, 1, 0, 3, 20),
          },
          {
            title: "Crab",
            duration: new Date(1900, 0, 1, 0, 2, 34),
          },
          {
            title: "Knock-down Drag-out",
            duration: new Date(1900, 0, 1, 0, 2, 8),
          },
          {
            title: "Smile",
            duration: new Date(1900, 0, 1, 0, 2, 38),
          },
          {
            title: "Simple Pages",
            duration: new Date(1900, 0, 1, 0, 2, 56),
          },
          {
            title: "Glorious Day",
            duration: new Date(1900, 0, 1, 0, 2, 40),
          },
          {
            title: "O Girlfriend",
            duration: new Date(1900, 0, 1, 0, 3, 50),
          },
        ],
      },
    ],
  },
];

export const DATA_PODCAST = [
  {
    type: "podcast",
    title: "Não Inviabilize",
    author: "Déia Freitas",
    imageUrl: require("../assets/images/NaoInviabilizeCover.jpg"),
    bgColor: "#fba315",
  },
  {
    type: "podcast",
    title: "Hodor Cavalo",
    author: "Hodor Cavalo",
    imageUrl: require("../assets/images/HodorCavaloCover.jpg"),
    bgColor: "#1C7C54",
  },
  {
    type: "podcast",
    title: "Popload: Podcast",
    author: "Popload",
    imageUrl: require("../assets/images/PoploadPopcastCover.jpg"),
    bgColor: "#cec98f",
  },
  {
    type: "podcast",
    title: "Café da manhã",
    author: "Spotify Studios",
    imageUrl: require("../assets/images/CafeDaManhaCover.jpg"),
    bgColor: "#c6af3c",
  },
  {
    type: "podcast",
    title: "His Dark Materials (Fronteidas do Universo)",
    author: "HBO Brasil",
    imageUrl: require("../assets/images/HisDarkMaterialsCover.jpg"),
    bgColor: "#4c615e",
  },
  {
    type: "podcast",
    title: "Podcast FalaDev",
    author: "Rocketseat",
    imageUrl: require("../assets/images/FalaDevCover.jpg"),
    bgColor: "#7160ae",
  },
  {
    type: "podcast",
    title: "Hipsters Ponto Tech",
    author: "Alura",
    imageUrl: require("../assets/images/HipstersPontoTechCover.jpg"),
    bgColor: "#fac264",
  },
  {
    type: "podcast",
    title: "Devs Cansados",
    author: "Devs Cansados",
    imageUrl: require("../assets/images/DevsCansadosCover.jpg"),
    bgColor: "#b3b3b3",
  },
];

export const DATA_PLAYLISTS = [
  {
    type: "playlist",
    title: "On Fire",
    description: "Big rock tracks from 2000. Cover: Linkin Park.",
    likes: 48392849,
    imageUrl: require("../assets/images/PlayListOnFire.jpg"),
    author: {
      name: "Bruno Saibert",
      imageUrl: require("../assets/images/Profile.jpg"),
    },
    bgColor: "#fc946c",
    setlist: [
      { artist: 0, album: 0, track: 0 },
      { artist: 1, album: 0, track: 0 },
      { artist: 2, album: 0, track: 0 },
      { artist: 3, album: 0, track: 0 },
      { artist: 5, album: 0, track: 0 },
      { artist: 6, album: 0, track: 0 },
      { artist: 7, album: 0, track: 0 },
      { artist: 8, album: 0, track: 0 },
      { artist: 9, album: 0, track: 0 },
      { artist: 0, album: 0, track: 0 },
      { artist: 1, album: 0, track: 0 },
      { artist: 2, album: 0, track: 0 },
      { artist: 3, album: 0, track: 0 },
      { artist: 5, album: 0, track: 0 },
      { artist: 6, album: 0, track: 0 },
      { artist: 7, album: 0, track: 0 },
      { artist: 8, album: 0, track: 0 },
      { artist: 9, album: 0, track: 0 },
    ],
  },
];
