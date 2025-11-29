// ToonLove dataset and recommendation logic

// Cartoon dataset with moods, genres, and style markers
const cartoons = [
  { id: 1, title: "Scooby-Doo, Where Are You!", type: "TV Series", year: 1969, studio: "Hanna-Barbera", isDisney: false, isScooby: true, moods: ["Cozy", "Nostalgic", "Chill"], genres: ["Mystery", "Comedy", "Adventure"], style: ["Classic", "Nostalgic"], summary: "Scooby and the gang solve spooky mysteries with plenty of laughs." },
  { id: 2, title: "What's New, Scooby-Doo?", type: "TV Series", year: 2002, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Happy", "Cozy", "Energetic"], genres: ["Mystery", "Comedy", "Adventure"], style: ["Modern"], summary: "Fresh mysteries with pop-punk flair and the classic gang dynamic." },
  { id: 3, title: "Scooby-Doo! Mystery Incorporated", type: "TV Series", year: 2010, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Cozy", "Chill", "Nostalgic"], genres: ["Mystery", "Comedy", "Adventure"], style: ["Modern"], summary: "An overarching mystery and character arcs make this Scooby era extra gripping." },
  { id: 4, title: "Scooby-Doo on Zombie Island", type: "Movie", year: 1998, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Chill", "Cozy", "Nostalgic"], genres: ["Mystery", "Adventure"], style: ["Classic", "Nostalgic"], summary: "The gang faces real monsters in a moody bayou adventure." },
  { id: 5, title: "Scooby-Doo! and the Witch's Ghost", type: "Movie", year: 1999, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Nostalgic", "Chill"], genres: ["Mystery", "Adventure"], style: ["Classic"], summary: "A gothic New England town, eco-goth rock, and an eerie mystery." },
  { id: 6, title: "Scooby-Doo and the Cyber Chase", type: "Movie", year: 2001, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Classic", "Nostalgic"], summary: "The gang is pulled into a video game full of throwback monsters." },
  { id: 7, title: "Scooby-Doo! Legend of the Phantosaur", type: "Movie", year: 2011, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "Scooby faces a dinosaur spirit and Shaggy discovers his brave side." },
  { id: 8, title: "Scooby-Doo! Camp Scare", type: "Movie", year: 2010, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Cozy", "Nostalgic"], genres: ["Mystery", "Adventure"], style: ["Modern"], summary: "Classic camp legends come alive on a summer getaway." },
  { id: 9, title: "Scooby-Doo and the Alien Invaders", type: "Movie", year: 2000, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Chill", "Happy"], genres: ["Mystery", "Adventure", "Romance"], style: ["Classic"], summary: "Desert towns, UFOs, and a groovy love interest for Shaggy." },
  { id: 10, title: "Scooby-Doo! and the Loch Ness Monster", type: "Movie", year: 2004, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Cozy", "Happy"], genres: ["Mystery", "Adventure"], style: ["Modern"], summary: "A family castle in Scotland hides a legendary sea creature mystery." },
  { id: 11, title: "Scooby-Doo! and Kiss: Rock and Roll Mystery", type: "Movie", year: 2015, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "Cosmic rock vibes and Scooby-style sci-fi antics." },
  { id: 12, title: "Be Cool, Scooby-Doo!", type: "TV Series", year: 2015, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Energetic", "Happy"], genres: ["Mystery", "Comedy"], style: ["Modern"], summary: "A comedic, meta spin on the classic formula with simplified designs." },
  { id: 13, title: "A Pup Named Scooby-Doo", type: "TV Series", year: 1988, studio: "Hanna-Barbera", isDisney: false, isScooby: true, moods: ["Cozy", "Happy", "Nostalgic"], genres: ["Mystery", "Comedy"], style: ["Classic", "Nostalgic"], summary: "Junior detectives solve pint-sized mysteries with bright 80s flair." },
  { id: 14, title: "Scooby-Doo! Pirates Ahoy!", type: "Movie", year: 2006, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Energetic", "Happy"], genres: ["Adventure", "Mystery"], style: ["Modern"], summary: "A spooky cruise meets ghostly pirates on the Bermuda Triangle." },
  { id: 15, title: "Scooby-Doo! and the Goblin King", type: "Movie", year: 2008, studio: "Warner Bros.", isDisney: false, isScooby: true, moods: ["Cozy", "Happy"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Scooby and Shaggy journey into a magical realm on Halloween night." },
  { id: 16, title: "Kim Possible", type: "TV Series", year: 2002, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy", "Superhero"], style: ["Modern"], summary: "Teen hero Kim juggles high school life with globe-trotting missions." },
  { id: 17, title: "Phineas and Ferb", type: "TV Series", year: 2007, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Energetic", "Cozy"], genres: ["Comedy", "Adventure"], style: ["Modern"], summary: "Inventive brothers turn every day of summer into a wild project." },
  { id: 18, title: "Gravity Falls", type: "TV Series", year: 2012, studio: "Disney", isDisney: true, isScooby: false, moods: ["Chill", "Cozy", "Nostalgic"], genres: ["Mystery", "Adventure", "Comedy"], style: ["Modern"], summary: "Twins uncover the supernatural secrets of a quirky Oregon town." },
  { id: 19, title: "The Owl House", type: "TV Series", year: 2020, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Energetic"], genres: ["Fantasy", "Adventure", "Comedy"], style: ["Modern"], summary: "A human teen finds family and magic in the Boiling Isles." },
  { id: 20, title: "DuckTales (1987)", type: "TV Series", year: 1987, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Nostalgic"], genres: ["Adventure", "Comedy"], style: ["Classic", "Nostalgic"], summary: "Scrooge McDuck and the nephews chase treasure across the globe." },
  { id: 21, title: "DuckTales (2017)", type: "TV Series", year: 2017, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "A stylish reboot with sharper jokes and deeper family lore." },
  { id: 22, title: "Tangled: The Series", type: "TV Series", year: 2017, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Romance", "Adventure", "Fantasy"], style: ["Modern"], summary: "Rapunzel explores the kingdom with magic rocks and friends." },
  { id: 23, title: "Big City Greens", type: "TV Series", year: 2018, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Comedy", "Slice of Life"], style: ["Modern"], summary: "Country kids cause cheerful chaos in the big city." },
  { id: 24, title: "Amphibia", type: "TV Series", year: 2019, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Energetic"], genres: ["Fantasy", "Adventure", "Comedy"], style: ["Modern"], summary: "Anne lands in a frog world and finds found-family warmth." },
  { id: 25, title: "Star vs. the Forces of Evil", type: "TV Series", year: 2015, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Fantasy", "Comedy", "Romance"], style: ["Modern"], summary: "Princess Star brings magical chaos and heart to Earth adventures." },
  { id: 26, title: "Recess", type: "TV Series", year: 1997, studio: "Disney", isDisney: true, isScooby: false, moods: ["Nostalgic", "Happy"], genres: ["Slice of Life", "Comedy"], style: ["Classic", "Nostalgic"], summary: "Playground politics and kid imagination during recess hour." },
  { id: 27, title: "Lilo & Stitch: The Series", type: "TV Series", year: 2003, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Comedy", "Adventure"], style: ["Modern"], summary: "Lilo and Stitch track down cousin experiments across Hawaii." },
  { id: 28, title: "Hercules: The Animated Series", type: "TV Series", year: 1998, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Classic"], summary: "Teen Hercules trains at Prometheus Academy with mythic misadventures." },
  { id: 29, title: "Moana", type: "Movie", year: 2016, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Fantasy"], style: ["Modern"], summary: "A voyager sails to restore a goddess's heart with the demigod Maui." },
  { id: 30, title: "Frozen", type: "Movie", year: 2013, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy", "Sleepy"], genres: ["Fantasy", "Adventure", "Romance"], style: ["Modern"], summary: "Sisters Elsa and Anna thaw a kingdom with love and a catchy anthem." },
  { id: 31, title: "Frozen II", type: "Movie", year: 2019, studio: "Disney", isDisney: true, isScooby: false, moods: ["Chill", "Cozy"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "A journey into an enchanted forest reveals Arendelle's past." },
  { id: 32, title: "The Lion King", type: "Movie", year: 1994, studio: "Disney", isDisney: true, isScooby: false, moods: ["Nostalgic", "Energetic"], genres: ["Adventure", "Romance"], style: ["Classic"], summary: "Simba learns bravery and love in the Pride Lands." },
  { id: 33, title: "Beauty and the Beast", type: "Movie", year: 1991, studio: "Disney", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Romance", "Fantasy"], style: ["Classic"], summary: "A bookish heroine discovers kindness beneath a curse." },
  { id: 34, title: "Aladdin", type: "Movie", year: 1992, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Romance", "Comedy"], style: ["Classic"], summary: "A street-smart hero and a genie explore Agrabah's magic." },
  { id: 35, title: "The Little Mermaid", type: "Movie", year: 1989, studio: "Disney", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Fantasy", "Romance", "Adventure"], style: ["Classic"], summary: "Ariel follows her voice to the human world and true love." },
  { id: 36, title: "Mulan", type: "Movie", year: 1998, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Nostalgic"], genres: ["Adventure", "Superhero"], style: ["Classic"], summary: "A brave warrior saves China while honoring her family." },
  { id: 37, title: "Encanto", type: "Movie", year: 2021, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Fantasy", "Slice of Life"], style: ["Modern"], summary: "Mirabel embraces family magic and heals generational wounds." },
  { id: 38, title: "The Princess and the Frog", type: "Movie", year: 2009, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Fantasy", "Romance", "Comedy"], style: ["Modern"], summary: "Tiana's New Orleans dreams meet bayou magic and jazz." },
  { id: 39, title: "Raya and the Last Dragon", type: "Movie", year: 2021, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Fantasy"], style: ["Modern"], summary: "A lone warrior unites tribes with the help of a quirky dragon." },
  { id: 40, title: "Zootopia+", type: "TV Series", year: 2022, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Comedy", "Slice of Life"], style: ["Modern"], summary: "Shorts expand the bustling animal metropolis with heart and humor." },
  { id: 41, title: "Winnie the Pooh", type: "TV Series", year: 1988, studio: "Disney", isDisney: true, isScooby: false, moods: ["Cozy", "Sleepy", "Nostalgic"], genres: ["Slice of Life", "Comedy"], style: ["Classic"], summary: "Gentle adventures in the Hundred Acre Wood with honey and hugs." },
  { id: 42, title: "Cinderella", type: "Movie", year: 1950, studio: "Disney", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Romance", "Fantasy"], style: ["Classic"], summary: "A timeless fairy tale of kindness and a glass slipper." },
  { id: 43, title: "Sleeping Beauty", type: "Movie", year: 1959, studio: "Disney", isDisney: true, isScooby: false, moods: ["Sleepy", "Nostalgic"], genres: ["Fantasy", "Romance"], style: ["Classic"], summary: "Aurora's dreamy kingdom awakens with true love's kiss." },
  { id: 44, title: "Pocahontas", type: "Movie", year: 1995, studio: "Disney", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Romance", "Adventure"], style: ["Classic"], summary: "A spirited explorer follows the colors of the wind." },
  { id: 45, title: "Atlantis: The Lost Empire", type: "Movie", year: 2001, studio: "Disney", isDisney: true, isScooby: false, moods: ["Chill", "Energetic"], genres: ["Adventure", "Fantasy"], style: ["Modern"], summary: "A crew dives deep to uncover a glowing underwater city." },
  { id: 46, title: "Treasure Planet", type: "Movie", year: 2002, studio: "Disney", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Fantasy"], style: ["Modern"], summary: "Space pirates, solar-surfing, and a steampunk treasure hunt." },
  { id: 47, title: "Wreck-It Ralph", type: "Movie", year: 2012, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "An arcade villain searches for heroism across game worlds." },
  { id: 48, title: "Ralph Breaks the Internet", type: "Movie", year: 2018, studio: "Disney", isDisney: true, isScooby: false, moods: ["Happy", "Energetic"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "Ralph and Vanellope explore the wild, meme-filled internet." },
  { id: 49, title: "Finding Nemo", type: "Movie", year: 2003, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Adventure", "Slice of Life"], style: ["Modern"], summary: "A father crosses the ocean to reunite with his son." },
  { id: 50, title: "Finding Dory", type: "Movie", year: 2016, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "Dory searches for family with optimism and whale friends." },
  { id: 51, title: "Inside Out", type: "Movie", year: 2015, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Fantasy", "Slice of Life"], style: ["Modern"], summary: "Emotions navigate growing up with color and heart." },
  { id: 52, title: "Luca", type: "Movie", year: 2021, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Slice of Life", "Adventure"], style: ["Modern"], summary: "Sea monster kids discover friendship on the Italian Riviera." },
  { id: 53, title: "Turning Red", type: "Movie", year: 2022, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Slice of Life", "Comedy"], style: ["Modern"], summary: "A teen's giant red panda form captures coming-of-age jitters." },
  { id: 54, title: "Coco", type: "Movie", year: 2017, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Nostalgic", "Happy"], genres: ["Fantasy", "Slice of Life"], style: ["Modern"], summary: "Music-loving Miguel journeys through the Land of the Dead." },
  { id: 55, title: "Up", type: "Movie", year: 2009, studio: "Disney-Pixar", isDisney: true, isScooby: false, moods: ["Cozy", "Nostalgic"], genres: ["Adventure", "Slice of Life"], style: ["Modern"], summary: "A flying house, loyal dog, and wilderness explorer bond in the sky." },
  { id: 56, title: "Adventure Time", type: "TV Series", year: 2010, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Happy", "Chill"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Finn and Jake explore the surreal Land of Ooo with heart." },
  { id: 57, title: "Steven Universe", type: "TV Series", year: 2013, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Cozy", "Happy"], genres: ["Fantasy", "Slice of Life"], style: ["Modern"], summary: "A kind-hearted boy learns about family, gems, and empathy." },
  { id: 58, title: "Hilda", type: "TV Series", year: 2018, studio: "Netflix", isDisney: false, isScooby: false, moods: ["Cozy", "Chill"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Hilda befriends trolls and spirits in a Scandinavian-inspired world." },
  { id: 59, title: "Miraculous Ladybug", type: "TV Series", year: 2015, studio: "Zagtoon", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Romance", "Adventure"], style: ["Modern"], summary: "Parisian teens juggle secret superhero lives and crushes." },
  { id: 60, title: "The Amazing World of Gumball", type: "TV Series", year: 2011, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Comedy", "Slice of Life"], style: ["Modern"], summary: "A mixed-media comedy about family antics in Elmore." },
  { id: 61, title: "The Powerpuff Girls", type: "TV Series", year: 1998, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Comedy"], style: ["Classic", "Nostalgic"], summary: "Sugar, spice, and chemical X power three tiny heroes." },
  { id: 62, title: "Ben 10", type: "TV Series", year: 2005, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Adventure"], style: ["Modern"], summary: "Ben uses the Omnitrix to transform into alien heroes." },
  { id: 63, title: "Winx Club", type: "TV Series", year: 2004, studio: "Rainbow", isDisney: false, isScooby: false, moods: ["Chill", "Nostalgic"], genres: ["Fantasy", "Romance", "Adventure"], style: ["Modern"], summary: "Fairy friends train at Alfea and save the Magic Dimension." },
  { id: 64, title: "Tom and Jerry", type: "TV Series", year: 1940, studio: "MGM", isDisney: false, isScooby: false, moods: ["Happy", "Nostalgic"], genres: ["Comedy", "Slice of Life"], style: ["Classic", "Nostalgic"], summary: "Cat-and-mouse slapstick hijinks with timeless charm." },
  { id: 65, title: "SpongeBob SquarePants", type: "TV Series", year: 1999, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Comedy", "Slice of Life"], style: ["Modern"], summary: "Optimistic SpongeBob lives in a pineapple under the sea." },
  { id: 66, title: "Avatar: The Last Airbender", type: "TV Series", year: 2005, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Happy", "Energetic"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Aang masters elements to bring balance with friends." },
  { id: 67, title: "The Legend of Korra", type: "TV Series", year: 2012, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Avatar Korra faces political intrigue and spirits in a steampunk world." },
  { id: 68, title: "My Little Pony: Friendship Is Magic", type: "TV Series", year: 2010, studio: "Hasbro", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Fantasy", "Slice of Life"], style: ["Modern"], summary: "Ponies learn friendship lessons in pastel Equestria." },
  { id: 69, title: "The Fairly OddParents", type: "TV Series", year: 2001, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Happy", "Energetic"], genres: ["Comedy", "Fantasy"], style: ["Modern"], summary: "Timmy's fairy godparents grant wishes that spiral into chaos." },
  { id: 70, title: "The Adventures of Jimmy Neutron", type: "TV Series", year: 2002, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Comedy"], style: ["Modern"], summary: "A boy genius invents gadgets that spark big adventures." },
  { id: 71, title: "Foster's Home for Imaginary Friends", type: "TV Series", year: 2004, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Cozy", "Happy"], genres: ["Comedy", "Slice of Life"], style: ["Modern"], summary: "Imaginary friends find community in a big quirky mansion." },
  { id: 72, title: "Craig of the Creek", type: "TV Series", year: 2018, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Cozy", "Happy"], genres: ["Slice of Life", "Adventure"], style: ["Modern"], summary: "Kids transform a suburban creek into their own fantasy kingdom." },
  { id: 73, title: "The Loud House", type: "TV Series", year: 2016, studio: "Nickelodeon", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Slice of Life", "Comedy"], style: ["Modern"], summary: "Lincoln navigates life with ten sisters and lots of heart." },
  { id: 74, title: "Kipo and the Age of Wonderbeasts", type: "TV Series", year: 2020, studio: "DreamWorks", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Music-loving Kipo explores a colorful post-apocalyptic world." },
  { id: 75, title: "She-Ra and the Princesses of Power", type: "TV Series", year: 2018, studio: "DreamWorks", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Fantasy", "Adventure", "Romance"], style: ["Modern"], summary: "Adora transforms to unite rebel princesses against Horde rule." },
  { id: 76, title: "Young Justice", type: "TV Series", year: 2010, studio: "DC", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Adventure"], style: ["Modern"], summary: "Sidekicks form a covert team to take on big threats." },
  { id: 77, title: "Batman: The Animated Series", type: "TV Series", year: 1992, studio: "DC", isDisney: false, isScooby: false, moods: ["Chill", "Nostalgic"], genres: ["Superhero", "Mystery"], style: ["Classic", "Nostalgic"], summary: "Stylish noir adventures with a thoughtful Dark Knight." },
  { id: 78, title: "Teen Titans", type: "TV Series", year: 2003, studio: "DC", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Adventure"], style: ["Modern"], summary: "Young heroes balance battles with friendship and feelings." },
  { id: 79, title: "Teen Titans Go!", type: "TV Series", year: 2013, studio: "DC", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Comedy", "Superhero"], style: ["Modern"], summary: "A wacky comedy take on the Titans with meta humor." },
  { id: 80, title: "Voltron: Legendary Defender", type: "TV Series", year: 2016, studio: "DreamWorks", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Fantasy", "Adventure"], style: ["Modern"], summary: "Five pilots unite lion mechs into Voltron to save the universe." },
  { id: 81, title: "Over the Garden Wall", type: "TV Series", year: 2014, studio: "Cartoon Network", isDisney: false, isScooby: false, moods: ["Cozy", "Chill", "Nostalgic"], genres: ["Fantasy", "Mystery"], style: ["Modern", "Nostalgic"], summary: "Brothers wander a strange autumnal wood full of folk tales." },
  { id: 82, title: "My Neighbor Totoro", type: "Movie", year: 1988, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Cozy", "Sleepy"], genres: ["Slice of Life", "Fantasy"], style: ["Classic", "Anime / Anime-style"], summary: "Forest spirits comfort sisters in rural Japan." },
  { id: 83, title: "Spirited Away", type: "Movie", year: 2001, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Chill", "Nostalgic"], genres: ["Fantasy", "Adventure"], style: ["Classic", "Anime / Anime-style"], summary: "Chihiro braves a spirit bathhouse to save her parents." },
  { id: 84, title: "Ponyo", type: "Movie", year: 2008, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Fantasy", "Slice of Life"], style: ["Modern", "Anime / Anime-style"], summary: "A fish girl befriends a boy, bringing waves of magic." },
  { id: 85, title: "Sailor Moon", type: "TV Series", year: 1992, studio: "Toei Animation", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Fantasy", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "Magical guardians fight evil with friendship and moonlight." },
  { id: 86, title: "Pokémon", type: "TV Series", year: 1997, studio: "OLM", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Anime / Anime-style"], style: ["Classic", "Modern", "Anime / Anime-style"], summary: "Ash travels the world to catch 'em all with Pikachu." },
  { id: 87, title: "Cardcaptor Sakura", type: "TV Series", year: 1998, studio: "Madhouse", isDisney: false, isScooby: false, moods: ["Happy", "Cozy"], genres: ["Fantasy", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "Sakura captures magical cards with kindness and courage." },
  { id: 88, title: "Howl's Moving Castle", type: "Movie", year: 2004, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Chill", "Nostalgic"], genres: ["Fantasy", "Romance"], style: ["Modern", "Anime / Anime-style"], summary: "Sophie finds love and freedom aboard a wizard's walking home." },
  { id: 89, title: "Naruto", type: "TV Series", year: 2002, studio: "Pierrot", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Anime / Anime-style"], style: ["Modern", "Anime / Anime-style"], summary: "A determined ninja seeks recognition and bonds." },
  { id: 90, title: "One Piece", type: "TV Series", year: 1999, studio: "Toei Animation", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Anime / Anime-style"], style: ["Modern", "Anime / Anime-style"], summary: "Pirates chase the ultimate treasure with endless heart." },
  { id: 91, title: "Sailor Moon Crystal", type: "TV Series", year: 2014, studio: "Toei Animation", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Fantasy", "Anime / Anime-style"], style: ["Modern", "Anime / Anime-style"], summary: "A faithful, modern retelling of the Sailor Guardians' saga." },
  { id: 92, title: "Princess Mononoke", type: "Movie", year: 1997, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Chill", "Energetic"], genres: ["Fantasy", "Adventure", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "A prince mediates between forest spirits and industry." },
  { id: 93, title: "Kiki's Delivery Service", type: "Movie", year: 1989, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Cozy", "Happy"], genres: ["Slice of Life", "Fantasy", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "A young witch builds confidence while running a delivery shop." },
  { id: 94, title: "The Tale of the Princess Kaguya", type: "Movie", year: 2013, studio: "Studio Ghibli", isDisney: false, isScooby: false, moods: ["Chill", "Nostalgic"], genres: ["Fantasy", "Anime / Anime-style"], style: ["Modern", "Anime / Anime-style"], summary: "A moon princess experiences earthly joys and sorrows." },
  { id: 95, title: "Bluey", type: "TV Series", year: 2018, studio: "ABC", isDisney: false, isScooby: false, moods: ["Cozy", "Happy"], genres: ["Slice of Life", "Comedy"], style: ["Modern"], summary: "Imaginative puppy playtimes that celebrate family." },
  { id: 96, title: "Peppa Pig", type: "TV Series", year: 2004, studio: "Entertainment One", isDisney: false, isScooby: false, moods: ["Cozy", "Sleepy"], genres: ["Slice of Life", "Comedy"], style: ["Modern"], summary: "Gentle preschool adventures with Peppa and friends." },
  { id: 97, title: "Totally Spies!", type: "TV Series", year: 2001, studio: "Marathon", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Superhero"], style: ["Modern"], summary: "Teen spies save the world with gadgets and style." },
  { id: 98, title: "Sailor Moon R: The Movie", type: "Movie", year: 1993, studio: "Toei Animation", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Superhero", "Fantasy", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "Sailor Guardians battle a cosmic flower villain for love." },
  { id: 99, title: "Naruto: Shippuden", type: "TV Series", year: 2007, studio: "Pierrot", isDisney: false, isScooby: false, moods: ["Energetic", "Happy"], genres: ["Adventure", "Anime / Anime-style"], style: ["Modern", "Anime / Anime-style"], summary: "Naruto returns older and stronger to save his friend." },
  { id: 100, title: "Digimon Adventure", type: "TV Series", year: 1999, studio: "Toei Animation", isDisney: false, isScooby: false, moods: ["Energetic", "Nostalgic"], genres: ["Adventure", "Anime / Anime-style"], style: ["Classic", "Anime / Anime-style"], summary: "Kids and partner Digimon protect both digital and real worlds." }
];

// Helper to read selected checkbox values
function getSelectedValues(containerId) {
  const container = document.getElementById(containerId);
  return Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
}

// Compute score based on selected filters
function scoreCartoon(cartoon, filters) {
  let score = 0;
  const reasons = [];

  // Mood match: +3 per matching mood
  filters.moods.forEach((mood) => {
    if (cartoon.moods.includes(mood)) {
      score += 3;
      reasons.push(`Matches ${mood} mood`);
    }
  });

  // Genre matches: +2 per matching genre
  filters.genres.forEach((genre) => {
    if (cartoon.genres.includes(genre)) {
      score += 2;
      reasons.push(`Has ${genre}`);
    }
  });

  // Style bonuses
  if (filters.styles.includes('Disney') && cartoon.isDisney) {
    score += 4;
    reasons.push('Disney pick');
  }

  if (filters.styles.includes('Scooby') && cartoon.isScooby) {
    score += 5;
    reasons.push('Scooby-Doo favorite');
  }

  if (filters.styles.includes('Classic') && (cartoon.style.includes('Classic') || cartoon.style.includes('Nostalgic'))) {
    score += 2;
    reasons.push('Classic nostalgia vibe');
  }

  if (filters.styles.includes('Modern') && cartoon.year >= 2010) {
    score += 2;
    reasons.push('Modern era energy');
  }

  return { score, reasons };
}

// Create badge elements
function createBadge(text, className = '') {
  const span = document.createElement('span');
  span.className = `badge ${className}`.trim();
  span.textContent = text;
  return span;
}

// Render recommendation cards
function renderResults(list, filters) {
  const grid = document.getElementById('resultsGrid');
  const empty = document.getElementById('emptyState');
  const featuredArea = document.getElementById('featuredArea');

  grid.innerHTML = '';
  featuredArea.innerHTML = '';

  // Featured Scooby touch
  const wantsFeatured = (filters.moods.includes('Cozy') || filters.moods.includes('Nostalgic')) && filters.styles.includes('Scooby');
  if (wantsFeatured) {
    const scoobyPick = cartoons.find((c) => c.isScooby);
    if (scoobyPick) {
      const wrap = document.createElement('div');
      wrap.className = 'featured-card card';
      wrap.innerHTML = `
        <h4 class="featured-title">💖 Featured for you</h4>
        <p class="title">${scoobyPick.title}</p>
        <p class="subtitle">${scoobyPick.type}, ${scoobyPick.year}</p>
        <div class="studio">${scoobyPick.studio}</div>
        <p class="summary-text">${scoobyPick.summary}</p>
      `;
      const badgeWrap = document.createElement('div');
      badgeWrap.className = 'badges';
      scoobyPick.moods.forEach((m) => badgeWrap.appendChild(createBadge(m, 'mood')));
      scoobyPick.genres.forEach((g) => badgeWrap.appendChild(createBadge(g, 'genre')));
      wrap.appendChild(badgeWrap);
      featuredArea.appendChild(wrap);
      featuredArea.classList.remove('hidden');
    }
  } else {
    featuredArea.classList.add('hidden');
  }

  if (!list.length) {
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');

  list.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('p');
    title.className = 'title';
    title.textContent = item.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = `${item.type}, ${item.year}`;

    const studio = document.createElement('div');
    studio.className = 'studio';
    studio.textContent = item.studio;

    const summary = document.createElement('p');
    summary.className = 'summary-text';
    summary.textContent = item.summary;

    const badges = document.createElement('div');
    badges.className = 'badges';
    item.moods.forEach((mood) => badges.appendChild(createBadge(mood, 'mood')));
    item.genres.forEach((genre) => badges.appendChild(createBadge(genre, 'genre')));

    const why = document.createElement('div');
    why.className = 'why';
    why.textContent = item.reasons.length ? `Why this? ${item.reasons.join(', ')}` : '';

    card.append(title, subtitle, studio, summary, badges);
    if (item.reasons.length) card.appendChild(why);

    grid.appendChild(card);
  });
}

// Update summary text
function updateSummary(filters) {
  const summary = document.getElementById('summaryText');
  const parts = [];
  if (filters.moods.length) parts.push(`Mood: ${filters.moods.join(', ')}`);
  if (filters.genres.length) parts.push(`Genres: ${filters.genres.join(', ')}`);
  if (filters.styles.length) parts.push(`Style: ${filters.styles.join(', ')}`);
  summary.textContent = parts.length ? parts.join(' • ') : 'Pick a mood and genres to begin.';
}

// Main recommendation handler
function recommend() {
  const filters = {
    moods: getSelectedValues('moodOptions'),
    genres: getSelectedValues('genreOptions'),
    styles: getSelectedValues('styleOptions'),
  };

  updateSummary(filters);

  // Score all cartoons
  const scored = cartoons.map((cartoon) => {
    const { score, reasons } = scoreCartoon(cartoon, filters);
    return { ...cartoon, score, reasons };
  });

  // Filter zero-score entries
  const filtered = scored.filter((item) => item.score > 0);

  // Sort by score then year as tiebreaker
  filtered.sort((a, b) => b.score - a.score || b.year - a.year);

  // Take top 10
  const topTen = filtered.slice(0, 10);

  renderResults(topTen, filters);
}

// Setup event listeners
function init() {
  document.getElementById('recommendButton').addEventListener('click', recommend);
}

document.addEventListener('DOMContentLoaded', init);
