export type Business = {
  slug: string;

  category: string;

  name: string;

  subtitle: string;

  city: string;

  coordinates?: {
    lat: number;
    lng: number;
  };

  hero: string;

  logo?: string;

  ogImage?: string;

  description?: string;

  about?: string;

  phone?: string;

  email?: string;

  website?: string;

  instagram?: string;

  facebook?: string;

  booking?: string;

  address?: string;

  map?: string;

  rating?: number;

  reviews?: number;

  hours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };

  gallery?: string[];

  services?: {
    title: string;
    items: string[];
  }[];
};

export const businesses: Business[] = [
  {
    slug: "esthir",

    category: "beauty",

    name: "ΕΣΘΗΡ",

    subtitle: "Άγγιγμα Ομορφιάς",

    city: "Loutraki",

    coordinates: {
      lat: 37.97565,
      lng: 22.97779,
    },

    hero: "/images/esthir/hero.png",

    logo: "/images/esthir/logo.jpg",

    ogImage: "/images/esthir/hero.png",

    description:
      "Luxury beauty experience στο Λουτράκι. Σύγχρονες θεραπείες αισθητικής προσώπου και σώματος.",

    about:
      "Η ΕΣΘΗΡ δημιουργήθηκε με στόχο να προσφέρει σύγχρονες θεραπείες αισθητικής προσώπου και σώματος μέσα σε έναν χώρο ηρεμίας και φροντίδας.",

    phone: "6946136886",

    email: "magdakonti@hotmail.com",

    instagram:
      "https://www.instagram.com/magda_konti/",

    facebook:
      "https://www.facebook.com/profile.php?id=100063706924391",

    address:
      "Υψηλάντου 24 & Περίανδρου, Λουτράκι",

    map:
      "https://maps.google.com/maps?q=Υψηλάντου%2024%20Λουτράκι&t=&z=17&ie=UTF8&iwloc=&output=embed",

    rating: 5,

    reviews: 0,

    gallery: [
      "/images/esthir/gallery/1.jpg",
      "/images/esthir/gallery/2.jpg",
      "/images/esthir/gallery/3.jpg",
      "/images/esthir/gallery/4.jpg",
      "/images/esthir/gallery/5.jpg",
    ],

    services: [
      {
        title: "Facial Treatments",
        items: [
          "Βαθύς Καθαρισμός",
          "Μεσοθεραπεία",
          "Δερμοαπόξεση με Διαμάντι",
          "Υδρογονοθεραπεία",
          "Φυτικό Peeling",
          "RF Ραδιοσυχνότητες",
        ],
      },
      {
        title: "Body Treatments",
        items: [
          "RF Ραδιοσυχνότητες",
          "Πρεσσοθεραπεία",
          "Θερμοκουβέρτα",
          "Μασάζ Κυτταρίτιδας",
        ],
      },
      {
        title: "Massage",
        items: [
          "Χαλαρωτικό",
          "Deep Tissue",
          "Gua Sha",
        ],
      },
    ],
  },

  {
    slug: "spade-grooming",

    category: "hair",

    name: "Spade Grooming",

    subtitle: "More than a haircut.",

    city: "Loutraki",

    coordinates: {
      lat: 37.97487,
      lng: 22.97665,
    },

    hero: "/images/spade/hero.png",

    logo: "/images/spade/logo.png",

    ogImage: "/images/spade/hero.png",

    description:
      "Premium barber experience in Loutraki with modern grooming services, precision haircuts and beard styling.",

    about:
      "Precision. Style. Confidence. At Spade Grooming Loutraki, every haircut is designed to reflect your personality. A modern grooming destination where aesthetics meet experience.",

    phone: "2744401019",

    email: "",

    website: "",

    instagram:
      "https://instagram.com/spade_grooming_loutraki",

    facebook: "",

    booking:
      "https://www.ebarber.gr/barbershops/spade",

    address:
      "Ελευθερίου Βενιζέλου 37, Λουτράκι",

    map:
      "https://maps.google.com/?q=37.97487,22.97665",

    rating: 5,

    reviews: 0,

    hours: {
      monday: "09:00 - 15:00",
      tuesday: "10:00 - 14:00 / 18:00 - 22:00",
      wednesday: "10:00 - 14:00 / 18:00 - 22:00",
      thursday: "10:00 - 14:00 / 18:00 - 22:00",
      friday: "09:00 - 15:00 / 18:00 - 22:00",
      saturday: "09:00 - 15:00 / 17:00 - 21:00",
      sunday: "Closed",
    },

    gallery: [
      "/images/spade/1.png",
      "/images/spade/2.jpg",
      "/images/spade/3.jpg",
      "/images/spade/4.jpg",
      "/images/spade/5.jpg",
    ],

    services: [
      {
        title: "Hair Services",
        items: [
          "Men's Haircut",
          "Children's Haircut",
          "Beard Trim",
          "Haircut + Beard",
          "Nose / Ear Wax",
          "The Gentleman",
          "Full Grooming",
        ],
      },
    ],
  },
];
