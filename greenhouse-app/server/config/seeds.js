const db = require('./connection');
const { User, Product, Category, Post } = require('../models');
const { fetchPlantsList } = require("../utils/fetchPlants.js");


db.once('open', async () => {
  //TODO: Create Categories that seed to Categories Schema (will come from fetchPlantsList)

  await Category.deleteMany();

  const categories = await Category.insertMany([
  { name: 'Tree' },
    { name: 'Shrub' },
  //   { name: 'Electronics' },
  //   { name: 'Books' },
  //   { name: 'Toys' }
  ]);

  console.log("Categories seeded");

  // Seeding for Product Model
  await Product.deleteMany();

  // TODO: Create Products (Plants) that seed to Products Model
  const products = await Product.insertMany([
    {
      name: 'Ambrosia Apple',
      description: "The Ambrosia Apple (Malus 'Ambrosia') is truly a remarkable species. Not only is it an excellent source of vitamins and minerals, but it's also one of the sweetest, juiciest apples you'll ever taste. Its crisp, rich flavor is quite unforgettable. And if you're into organic gardening, you'll find that this apple is easy to cultivate. Its golden-yellow skin is not only decorative but also disease-resistant and very hardy. The Ambrosia Apple is a great addition to any home garden; its beauty, flavor, and hardiness make it an excellent choice for any backyard orchard.",
      image: "https://perenual.com/storage/species_image/352_malus_ambrosia/regular/30356393327_b96daa22cb_b.jpg",
      category: categories[0]._id,
      price: 149.99,
      quantity: 100
    },
    {
      name: 'Honeycrisp Apple',
      description: 'Honeycrisp apples (Malus Honeycrisp) are an amazing fruit for many reasons. Their red and yellow skin is speckled with hues of green and the flesh is sweet, crispy, and juicy. It is said to have one of the best flavor combinations of tartness and sweetness, making it a favorite among apple fans. Its rounded shape and mildly yellow flesh holds more juice than many other apples. Due to its high sugar content and low acidity, Honeycrisp apples are perfect for baking and eating raw. Plus, it also has a longer shelf life, allowing you to enjoy this fruit all season long. Honeycrisp apples truly are amazing.',
      image: 'https://perenual.com/storage/species_image/367_malus_honeycrisp/regular/SweeTango_apple_harvest_2010.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 100
    },
    {
      name: 'mandarin orange',
      description: 'The mandarin orange (Citrus reticulata Clementine) is an amazing species of fruit-bearing tree that is prized for its sweet and juicy citrus fruits. Its vibrant, orange-colored skin has a lightly pebbled texture, and the juicy inside is separated into easy-to-peel segments. Clemenvines, a popular variety of mandarin orange, are the perfect snack due to their sweet flavor and compact size. This citrus fruit is known to help build strong bones and aid digestion due to its high vitamin C, calcium, and fiber content. Additionally, the vibrant color of Clementines and their sweet aroma make them a lovely addition to salads, desserts, and holiday decor. All in all, mandarin oranges are a perfect snack for any time of the year.',
      image: 'https://perenual.com/storage/species_image/1893_citrus_reticulata_clementine/og/6789126861_2658722019_b.jpg',
      category: categories[0]._id,
      price: 199.99,
      quantity: 100
    },
    {
      name: 'navel orange',
      description: 'Navel oranges are an amazing species of citrus fruit that are bursting with flavor! Its scientific name is Citrus sinensis Trovita and it is one of the most popular and common oranges in the world. It features a unique navel shape at the blossom end, and its pebbled skin makes it easy to peel and enjoy its juicy, sweet-tangy pulp. Navel oranges also contain an abundance of Vitamins C and A, as well as dietary fiber, making them an excellent choice for hearty nutrition. Moreover, it is a low-maintenance tree variety that requires minimal inputs and makes a great addition to any home orchard!',
      image: 'https://perenual.com/storage/species_image/1895_citrus_sinensis_trovita/og/39799977543_e077b95205_b.jpg',
      category: categories[0]._id,
      price: 249.99,
      quantity: 100
    },
    {
      name: 'white baneberry',
      description: 'White Baneberry is an amazing plant species for many reasons. It\'s a perennial herbaceous flowering plant found in dense woods in North America, making it a beautiful part of any woodland garden. Its foliage is composed of divided leaflets under bright green star-shaped flowers, and its white fruits, which hang like miniature Chinese lanterns, are one of nature\'s most striking displays. The sight of pollinators gathered around the white fruits is a scene of beauty. White Baneberry\'s white compound clusters of flowers in summer, feathery foliage in shades of green, and unique bunches of creamy-white fruits make it a showstopper and integral part of any garden.',
      image: 'https://perenual.com/storage/species_image/524_actaea_pachypoda/og/25484939465_d30c5fac03_b.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 50
    },
    {
      name: 'sweet pepper',
      description: 'Sweet pepper (Capsicum annuum \'Bananarama\') is an amazing plant species! It\'s colorful, unique shape and sweet taste make it a delightful addition to any garden. This plant loves full sun and will produce beautiful, bright yellow-orange peppers with mild heat. The thin-walled sweet peppers have a surprisingly long shelf life and can be used raw or cooked. It\'s low maintenance and can be easily grown from seed. Its fun, distinctive shape adds a touch of color and life to any garden while its sweet, unique flavor makes it a great addition to salads and salsas. If you\'re looking for a fun, easy to grow, and flavorful plant, look no further than sweet pepper (Capsicum annuum \'Bananarama\').',
      image: 'https://perenual.com/storage/species_image/1596_capsicum_annuum_bananarama/og/52253428433_0748cd6ff6_b.jpg',
      category: categories[0]._id,
      price: 14.99,
      quantity: 25
    },
    {
      name: 'kiwifruit',
      description: 'Kiwifruit (Actinidia deliciosa) is an amazing fruit packed with nutrients. It contains an impressive amount of vitamin C, more than an equal amount of oranges. Kiwifruit is also loaded with fiber and micronutrients, like vitamin E, magnesium, and potassium. Its unique flavor is sweet and tangy, making it an ideal addition to many dishes. The fuzzy green skin can be eaten and provides added fiber, vitamins and minerals. Enjoy kiwifruit as part of a healthy and diverse diet for an extra boosted of nutrition and flavor.',
      image: 'https://perenual.com/storage/species_image/536_actinidia_deliciosa/og/25119432356_f10218d971_b.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 50
    },
    {
      name: 'jackfruit',
      description: 'The amazing jackfruit, (Artocarpus heterophyllus) is a unique species known for its large size and sweet, yellow fruit. It can reach up to 100 pounds in weight! Plus, due to its distinctive taste, wide range of nutrients, and health benefits, jackfruit is becoming increasingly popular. The jackfruit tree can be a great source of food for both humans and animals in areas of food insecurity. The unripe fruit, leaves, and latex are all edible and rich in vitamin A and C. Its bark and heartwood have medicinal uses due to their anti-inflammatory and antifungal properties. Jackfruit is truly a remarkable species and a fantastic discovery to food security everywhere!',
      image: 'https://perenual.com/storage/species_image/989_artocarpus_heterophyllus/og/52334746009_86cd4b3f95_b.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 30
    },
    {
      name: 'star fruit',
      description: 'Star fruit (Averrhoa carambola) is a unique and visually appealing addition to any garden. Its elegant five pointed star shape sets it apart from other fruits. Its sweet, slightly sour taste adds a delicious, tropical flavor to salads and fruit bowls. The yellow to orange-colored flesh can also be cooked or juiced. Its crunchy texture and low calorie content make it an excellent choice for healthy snacks. An added bonus of star fruit is its high fiber content, which has been known to help reduce cholesterol levels. With its unusual shape, delicious flavor, and health benefits, star fruit is definitely a winning addition to any garden.',
      image: 'https://perenual.com/storage/species_image/1154_averrhoa_carambola/og/52334449226_20bfe2f29d_b.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 20
    },
    {
      name: 'beautyberry',
      description: 'Beautyberry (Callicarpa bodinieri) is an amazing plant species because of its impressive, vibrant beauty. Its shrubs are known to be adaptable to a range of soil types, and it produces clusters of bright, petite flashing lavender colored berries that arise from fine, mid-green foliage. Its leaves and stems have a unique texture with tiny hairs that cover the entire plant, adding a soft feel. Its blossoms and foliage attract many different species of birds, other birds, and insects, making it an excellent habitat for wildlife. Beautyberry is the perfect addition to any garden, as its beauty and addicting aroma give it a special place amongst all plant species.',
      image: 'https://perenual.com/storage/species_image/1479_callicarpa_bodinieri/og/8083128825_496da137e8_b.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 15
    },
    {
      name: 'tree heath',
      description: 'Tree heath (Erica arborea) is amazing for its variety of spectacularly coloured flowers, which are borne in abundance in early summer. Rich deep greens of the foliage provide an excellent backdrop for the tassel blooms, ranging from bright pink to deep purple. Tree heath is almost impossible to miss, with its gnarled branches reaching up to 8 metres and wide umbrella shape. This evergreen species is unique for its endurance, easily adapting to harsh conditions while maintaining its beauty and vibrancy. It is also very low maintenance, making it a great choice for a garden addition. With its stunning stature and plentiful flowers, Tree heath is an eye-catching landscape statement.',
      image: 'https://perenual.com/storage/species_image/2787_erica_arborea/og/8303666485_1c90e319fd_b.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 10
    },
    {
      name: 'European Silver Fir',
      description: 'European Silver Fir (Abies alba) is an amazing coniferous species native to mountainous regions of central Europe and the Balkans. It is an evergreen tree with a narrow, pyramidal shape and long, soft needles. Its bark is scaly grey-brown and its branches are highly ornamental due to its conical-shaped silver-tinged needles. It is pruned for use as an ornamental evergreen hedging and screening plant, and is also popular for use as a Christmas tree. Young trees grow quickly and have strong, flexible branches which makes them perfect for use as windbreaks. The European Silver Fir is an impressive species, making it ideal for gardens and public spaces.',
      image: 'https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 5
    },
    {
      name: 'Spider Plant',
      description: "Spider Plant (Chlorophytum 'Bonnie') is an amazingly versatile and low-maintenance houseplant. It tolerate low to bright indirect light and almost any type of soil. Its unusual growth pattern resembles a spider or a rosette of strap-like foliage that fans out from a central stem. Its white, red-tipped flowers will appear in time. It is a perfect beginner's houseplant as its easy to grow and propagate, requires minimal care, and can survive in many different environments. It can even be grown outdoors in zones 11 and 12! All in all, Spider Plant is a delightful and long-lasting addition to any home garden.",
      image: 'https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/og/Chlorophytum_comosum_Variegatum_1zz.jpg',
      category: categories[1]._id,
      price: 12.99,
      quantity: 5
    },
    {
      name: 'Golden Pothos',
      description: 'Golden Pothos, also known as Epipremnum aureum, is an amazing, easy-care houseplant that is both aesthetically pleasing and resilient. The attractive variegated leaves of the plant grow rapidly and are easy to care for, making it a popular choice for beginners. Its glossy leaves drape gracefully in looping trails making it perfect for hanging baskets, wall mount containers, and table displays. The plant is also known to reduce various volatile organic compounds (VOCs) in the air that can be toxic, and can also help reduce snoring in bedrooms. Its natural resilience and ease of care makes the Golden Pothos a great choice for any plant lover, from beginner to advanced!',
      image: 'https://perenual.com/storage/species_image/2773_epipremnum_aureum/og/2560px-Epipremnum_aureum_31082012.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 10
    },
    {
      name: 'Common Fig',
      description: 'The Common Fig (Ficus carica) is a delightful addition to any home or garden. A hardy species, it will thrive in most climates and offers a continuous supply of delicious fruits throughout the year. The deep green foliage provides a beautiful backdrop for the glossy fruits, which can be picked from the tree when ripe and eaten either raw or cooked. Not only does the Common Fig produce a delicious fruit, but its hardy nature and ability to adapt to different climates makes it an amazing choice for many different growing environments.',
      image: 'https://perenual.com/storage/species_image/288_ficus_carica/og/52377169610_b7a247a378_b.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 10
    },
    {
      name: 'Fiddle-leaf Fig',
      description: 'The Fiddle-leaf Fig is a unique and stunning species of indoor plant. Its broad, glossy leaves have an attractive violin-like shape, and its thick trunk has an interesting look, making it a great choice for any home or office. Not only is it easy to care for with a bit of direct sunlight once a week, it’s also known to be air-purifying, filtering toxins and pollutants from the air. Due to its ability to thrive indoors with minimal fuss, this impressive plant is also known to be a great stress reliever, which makes it perfect for any environment.',
      image: 'https://perenual.com/storage/species_image/2963_ficus_lyrata/og/48139747872_36fa010c48_b.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 5
    },
    {
      name: 'Dracaena',
      description: 'The Dracaena sanderiana, also known as the Lucky Bamboo, is a beautiful and amazing plant. It is durable and incredibly low-maintenance, requiring only occasional watering and infrequent fertilizing. It can survive in a wide range of light conditions and is quite tolerant of low light conditions. What makes this plant even more amazing is its ability to purify indoor air, while removing toxins like formaldehyde, benzene, and chloroform from the environment. In addition, this species is believed to bring good luck in feng shui and it also attracts positive energy. Since it is very easy to care for and doesn’t require a lot of maintenance, the Lucky Bamboo is the perfect plant for any home.',
      image: 'https://perenual.com/storage/species_image/2533_dracaena_sanderiana/og/25080496475_3313fe4406_b.jpg',
      category: categories[0]._id,
      price: 19.99,
      quantity: 10
    },
    {
      name: 'Clematis',
      description: 'Clematis \'Silver Moon\' is a stunning plant species for enhancing any garden or outdoor space. It is a versatile climber that produces large white flowers with yellow stamens and a sweet aroma. The foliage is a silvery-gray color and provides a beautiful contrast to the white blooms. This clematis is vigorous and hardy, and it blooms from mid to late summer. The flowers will attract many pollinators, such as butterflies and bees, to your garden, as well as make it look and smell more beautiful. \'Silver Moon\' can be grown in either full or partially shade and is sure to make a great addition to any landscape or garden.',
      image: 'https://perenual.com/storage/species_image/1953_clematis_silver_moon/og/52609575523_98fc523349_b.jpg',
      category: categories[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      name: 'Pyramidalis Silver Fir',
      description: 'Pyramidalis Silver Fir (Abies alba \'Pyramidalis\') is an amazing coniferous tree species. Its narrow, elegant pyramidal shape makes it ideal for landscapes with limited space. This species features bright silver-green foliage year-round and distinctive yellowish brown cones that hold its unique shape for years. It also displays purple-tinged shoots in the spring and a showy red bark in the winter. Its slow growth and hardiness make it an ideal addition to any landscape. The Pyramidalis Silver Fir also requires minimal maintenance and can be an excellent companion for many other plants in the garden. From small yards to large gardens, this species will create a majestic and interesting landscape.',
      image: 'https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg',
      category: categories[0]._id,
      price: 49.99,
      quantity: 5
    },
    {
      name: 'White Fir',
      description: 'White Fir (Abies concolor) is an amazing evergreen tree species found in the western United States. It has a distinct white bark that fades to a yellowish hue on the lower branches and a graceful, conical shape. The beautiful Blue-green needles of White Fir are soft and tufted at the end and release a pleasant Christmas-like aroma when crushed. This sturdy species can grow up to 300 feet tall and over 140 years old, making it one of the longest living species in the world. It is highly adaptable, drought-tolerant, and very low maintenance with minimal pruning requirements. White Fir is an excellent choice for privacy screens, windbreaks, and living Christmas trees.',
      image: 'https://perenual.com/storage/species_image/3_abies_concolor/og/52292935430_f4f3b22614_b.jpg',
      category: categories[0]._id,
      price: 59.99,
      quantity: 3
    },
    {
      name: 'Fraser Fir',
      description: 'The Fraser Fir (Abies fraseri) is an amazing tree species with many great qualities. It is a dense evergreen conifer native to the Appalachian mountains. Its pyramidal shape and glossy dark green needles, that curve upward, make it a beautiful and popular Christmas tree. Its needles are short, soft, flat and pleasant to the touch. It has been found to be highly resistant to pests, diseases, and environmental stress. Additionally, it has superior winter hardiness and a strong wood that produces very little sap. This incredible species is perfect for a variety of evergreen applications and is guaranteed to bring a unique and beautiful look to any landscape.',
      image: 'https://perenual.com/storage/species_image/5_abies_fraseri/og/36843539702_e80fc436e0_b.jpg',
      category: categories[0]._id,
      price: 89.99,
      quantity: 3
    },
    {
      name: 'Golden Korean Fir',
      description: 'The Golden Korean Fir is truly awe-inspiring. Its stunning golden-green foliage and soft pink cones make it a majestic wonder to behold. This evergreen tree grows quickly and is remarkably tough and resistant to brittleness. Its branches form a distinctive cone shape that gives it a modern, contemporary look. Its needles are soft and full of pleasant aroma. This amazing specimen requires minimal maintenance and is an ideal focal point for landscaping and garden design. Its unique foliage, easy upkeep, and attitude of durability make it a stunning and reliable addition to any garden.',
      image: 'https://perenual.com/storage/species_image/6_abies_koreana_aurea/og/49235570926_99ec10781d_b.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 5
    },
    {
      name: 'Alpine Fir',
      description: 'The Alpine Fir, scientifically known as Abies lasiocarpa, is an amazing conifer native to western North America. Its stiff, dense needles bring vivid color year-round and its pyramidal growth habit adds texture and interest to any landscape. With its tolerance to a variety of soils and conditions, this evergreen is both versatile and visually striking. Its branches reach out and cast a unique evergreen form of showy clouds. Through years of growth, it develops a sturdy trunk and crooked branches that are quite striking. Alpine Fir also provides winter cover and shelter for wildlife. Its dense needles are an ideal refuge from cold and precipitation. Its strong branches and trunk also provide perching points for nesting birds. Alpine Fir is truly one of nature’s most diverse and visually stunning plants.',
      image: 'https://perenual.com/storage/species_image/7_abies_lasiocarpa/og/51002756843_74fae3c2fa_b.jpg',
      category: categories[0]._id,
      price: 89.99,
      quantity: 3
    },
    {
      name: 'Blue Spanish Fir',
      description: 'The Blue Spanish Fir (Abies pinsapo \'Glauca\') is an amazing plant that is native to the mountains of southern Spain. Its beautiful blue needle-like foliage and pyramidal shape set it apart from other coniferous trees. This tree is an extremely hardy species, and can survive temperatures as low as -20 Fahrenheit. It is also incredibly drought tolerant, but will thrive with regular watering in the summer. Its striking blue color makes it the perfect accent to any landscaping design, adding a pop of color to your garden. It is also surprisingly fast-growing, making it ideal for creating a privacy screen quickly. All in all, the Blue Spanish Fir is an amazing plant that can bring year-round beauty to any garden!',
      image: 'https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/og/21657514018_c0d9fed9f4_b.jpg',
      category: categories[0]._id,
      price: 109.99,
      quantity: 5
    },
    {
      name: 'Noble Fir',
      description: 'The Noble Fir (Abies procera) is an amazing species in many ways. It is a tall and stately tree with a beautiful, conical shape; its symmetrical branches are heavily laden with needles that range from a deep, glossy green to a deep blue-green. It has a thick, scaly bark and splendid foliage that make it an ideal choice for any garden. Its wide, dense growth provides shelter to wildlife, while its strong branches provide it with excellent resistance to windstorms. The Noble Fir is a long-lasting species with impressive longevity, making it a great addition to any landscape. With its majestic form, lush color, and great strength, the Noble Fir is a remarkable species that will enhance any outdoor space!',
      image: 'https://perenual.com/storage/species_image/9_abies_procera/og/49107504112_6bd7effb8b_b.jpg',
      category: categories[0]._id,
      price: 129.99,
      quantity: 10
    },
    {
      name: 'Johin Japanese Maple',
      description: 'The Johin Japanese Maple (Acer \'Johin\') is a one-of-a-kind variety with incredible foliage that\'s sure to turn heads. It stands out from the crowd with its bright yellow-green colored leaves, framed by a deep green margin. Mature trees usually have a beautiful, gnarled trunk, making it an ideal choice for bonsai enthusiasts. In the spring, its delicate white flowers add an extra layer of beauty, before the dramatic autumn hues of red, yellow and orange set in. It\'s an easy-to-care-for, slow-growing tree that becomes even more stunning with age. Perfect for home gardens, patio or courtyard spaces, it\'s no wonder the Johin Japanese Maple is so popular!',
      image: 'https://perenual.com/storage/species_image/10_acer_johin/og/pexels-photo-2183508.jpg',
      category: categories[0]._id,
      price: 79.99,
      quantity: 5
    },
    {
      name: 'Snakebark Maple',
      description: 'The Snakebark Maple (Acer davidii) is an amazing tree, beloved by gardeners. It features beautiful gills, which are handsomely striped with tiger-like markings. In the summer, its leaves turn to a bright golden hue and its bark remains smooth, with a distinctive mottled ash-gray coloration. Plant it in a sunny spot to take full advantage of its leaves, which are said to produce a calming effect. It is also low maintenance and very tolerant of the cold, surviving through temperatures as low as -25°F. With its stunning shape and amazing color, the Snakebark Maple is a wonderful addition to any landscape!',
      image: 'https://perenual.com/storage/species_image/11_acer_davidii/og/6868591754_f4ac5b0510_b.jpg',
      category: categories[0]._id,
      price: 59.99,
      quantity: 10
    },
    
      ]);

  console.log("Products seeded");

  // Seeding for Users Model
  await User.deleteMany();

  await User.insertMany([

    {
      socialTitle: "Mrs.",
      firstName: "Hannah",
      lastName: "Lewis",
      email: "Hannah@testemail.com",
      password: "password12345",
      birthdate: new Date("05/06/1994"),
      shippingAddress: '1 Park Ave',
      shippingCity: "New York",
      shippingState: "New York",
      shippingZip: "10028",
      billingAddress: "1 Park Ave",
      billingCity: "New York",
      billingState: "New York",
      billingZip: "10028",
    },
    {
      socialTitle: "Mr.",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      birthdate: new Date("1990-01-01"),
      shippingAddress: "123 Shipping Street",
      shippingCity: "Shipping City",
      shippingState: "Shipping State",
      shippingZip: "12345",
      billingAddress: "456 Billing Street",
      billingCity: "Billing City",
      billingState: "Billing State",
      billingZip: "54321",
    },
    {
      socialTitle: "Mrs.",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      password: "password456",
      birthdate: new Date("1985-05-10"),
      shippingAddress: "789 Shipping Street",
      shippingCity: "Shipping City",
      shippingState: "Shipping State",
      shippingZip: "67890",
      billingAddress: "987 Billing Street",
      billingCity: "Billing City",
      billingState: "Billing State",
      billingZip: "09876",
    },
  ]);

  console.log("Users seeded");

  process.exit();
});
