const express = require("express");
const app = express();
const port = 3001,
  host = "192.168.1.23";

app.all("*", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  req.next();
  //...
});

app.get("/", (req, res) => {
  res.json("");
});

const mockMenuData = [
  {
    title: "Home",
    children: [
      { title: "Home 1 – Background Image" },
      { title: "Home 2 – Youtube Video" },
      { title: "Home 3 – Google Inspired" },
      { title: "Home 4 – Travel Site" },
    ],
  },
  {
    title: "Tours",
    children: [],
  },
  {
    title: "Booking",
    children: [],
  },
  {
    title: "Destinations",
    children: [],
  },
  {
    title: "Pages",
    children: [],
  },
  {
    title: "Blog",
    children: [],
  },
  {
    title: "Shortcodes",
    children: [],
  },
  {
    title: "Shop",
    children: [],
  },
];

app.get("/menu", (req, res) => {
  res.json({
    data: mockMenuData,
  });
});

const mockDestinationsData = {
  title: "Popular Destinations",
  description: `World's best tourist destinations`,
  destinations: [
    {
      title: "Tokyo",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
    },
    {
      title: "Seoul",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
    },
    {
      title: "Paris",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
    },
    {
      title: "London",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
    },
  ],
};
// destinations
app.get("/destinations", (req, res) => {
  res.json({
    data: mockDestinationsData,
  });
});

const mockBannerData = {
  title: "Where do you want to go?",
  description: `Trips, experiences, and places. All in one service.`,
  imageUrl: "https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg",
};

app.get("/banner", (req, res) => {
  res.json({
    data: mockBannerData,
  });
});

// Awards
app.get("/awards", (req, res) => {
  res.json({
    data: {
      title: "Our Awards",
      description: `London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.`,
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png",
    },
  });
});

app.get("/contact", (req, res) => {
  res.json({
    data: {
      title: "Contact Info",
      phone: "1-567-124-44227",
      address: "184 Main Street East Perl Habour 8007",
      time: "Mon - Sat 8.00 - 18.00 Sunday CLOSED",
    },
  });
});

app.get("/social", (req, res) => {
  res.json({
    data: {
      facebook: { title: "facebook", link: "" },
      twitter: { title: "twitter", link: "" },
      youtube: { title: "youtube", link: "" },
      pinterest: { title: "pinterest", link: "" },
      instagram: { title: "instagram", link: "" },
    },
  });
});

// Recent Trips
app.get("/recent-trips", (req, res) => {
  res.json({
    data: {
      title: "Recent Trips",
      recentTrips: [
        {
          link: "https://www.flickr.com/photos/artiephotography/28760131762",
          imageUrl:
            "https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg",
          title:
            "Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia",
        },
        {
          link: "https://www.flickr.com/photos/artiephotography/27308262031",
          imageUrl:
            "https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg",
          title:
            "Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory",
        },
        {
          link: "https://www.flickr.com/photos/artiephotography/27287965356",
          imageUrl:
            "https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg",
          title:
            "Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore",
        },
        {
          link: "https://www.flickr.com/photos/artiephotography/27138570412",
          imageUrl:
            "https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg",
          title:
            "View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America",
        },
        {
          link: "https://www.flickr.com/photos/artiephotography/26520497604",
          imageUrl:
            "https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg",
          title:
            "Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR",
        },
        {
          link: "https://www.flickr.com/photos/artiephotography/27012097142",
          imageUrl:
            "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg",
          title:
            "The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HD",
        },
      ],
    },
  });
});

// Value Trips
app.get("/value-trips", (req, res) => {
  res.json({
    data: {
      title: "Best Value Trips",
      description: "Best offers trips from us",
      valueTrips: [
        {
          price: 5_000,
          discount: null,
          sale: null,
          title: "French Autumn",
          excerpt: "City Tours, Urban",
          stars: 4,
          days: 5,
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
        },
        {
          price: 6_000,
          discount: null,
          sale: null,
          title: "Grand Switzerland",
          excerpt: "Shopping, Mountain, Snow & Ice",
          stars: 4,
          days: 6,
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
        },
        {
          price: 3_000,
          discount: 2_500,
          sale: "Sale",
          title: "Discover Japan",
          excerpt: "City Tours, Iconic",
          stars: 4,
          days: 5,
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
        },
      ],
    },
  });
});

//Value__menu_trips
app.get("/menu-trips", (req, res) => {
  res.json({
    data: [
      {
        title: "Swiss Alps Trip",
        price: 3_900,
        imageUrl:
          "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg",
      },
      {
        title: "5 Lake of Fuji San",
        price: 4_900,
        discount: 4_200,
        imageUrl:
          "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg",
      },
    ],
  });
});

// Why Choose Us
app.get("/why-choose-us", (req, res) => {
  res.json({
    data: {
      title: "Why Choose Us",
      description: `Here are reasons you should plan trip with us`,
      whyChooseUs: [
        {
          title: "Handpicked Hotels",
          description:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
          iconUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
        },
        {
          title: "World Class Service",
          description:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
          iconUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
        },
        {
          title: "Best Price Guarantee",
          description:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
          iconUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
        },
      ],
    },
  });
});

// Articles
app.get("/articles", (req, res) => {
  res.json({
    data: {
      title: "Articles & Tips",
      description: `Explore some of the best tips from around the world`,
      articles: [
        {
          title: "Memorial Day to Someone Told Me to Travel",
          description:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
          date: "10/DECEMBER/2016",
        },
        {
          title: "7 Tips For Nomads On A Budget Trips",
          description:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
          date: "10/DECEMBER/2016",
        },
        {
          title: "Taking A Travel Blog Victory Lap",
          description:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
          imageUrl:
            "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
          date: "10/DECEMBER/2016",
        },
      ],
    },
  });
});

app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`);
});
