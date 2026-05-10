const sampleData = {
  users: [
    {
      name: 'Nandini',
      email: 'admin@gulabistore.com',
      password: '123456',
      role: 'admin',
    },
    {
      name: 'Priya',
      email: 'user@gulabistore.com',
      password: '123456',
      role: 'user',
    },
  ],
  products: [
    // ── BLOCK PRINT TEXTILES ──────────────────────────────────────────
    {
      name: 'Sanganeri Block Print Cotton Kurta',
      slug: 'sanganeri-block-print-cotton-kurta',
      category: 'Block Print Textiles',
      description:
        'Hand-stamped with traditional Sanganeri floral motifs on breathable cotton. Each piece is individually block-printed by master craftsmen in Sanganer village near Jaipur, making every kurta subtly unique. Perfect for festive and everyday wear.',
      images: [
        '/images/products/block-print-kurta-1.jpg',
        '/images/products/block-print-kurta-2.jpg',
      ],
      price: 1299,
      brand: 'Gulabi Originals',
      rating: 4.7,
      numReviews: 24,
      stock: 15,
      isFeatured: true,
      banner: '/images/banners/block-print-banner.jpg',
    },
    {
      name: 'Bagru Print Indigo Dupatta',
      slug: 'bagru-print-indigo-dupatta',
      category: 'Block Print Textiles',
      description:
        'Crafted using the ancient Bagru resist-printing technique with natural indigo dye. The geometric patterns are carved into wooden blocks and hand-stamped on soft mulmul cotton. A timeless Rajasthani accessory.',
      images: [
        '/images/products/bagru-dupatta-1.jpg',
        '/images/products/bagru-dupatta-2.jpg',
      ],
      price: 799,
      brand: 'Gulabi Originals',
      rating: 4.5,
      numReviews: 18,
      stock: 20,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Block Print Floral Bedsheet Set',
      slug: 'block-print-floral-bedsheet-set',
      category: 'Block Print Textiles',
      description:
        'A queen-size pure cotton bedsheet with two pillow covers, all hand block-printed with the classic Jaipur buti motif in dusty rose and ivory. Soft, breathable, and made to last for years.',
      images: [
        '/images/products/block-print-bedsheet-1.jpg',
        '/images/products/block-print-bedsheet-2.jpg',
      ],
      price: 2499,
      brand: 'Gulabi Originals',
      rating: 4.8,
      numReviews: 31,
      stock: 10,
      isFeatured: true,
      banner: '/images/banners/bedsheet-banner.jpg',
    },

    // ── BLUE POTTERY ─────────────────────────────────────────────────
    {
      name: 'Blue Pottery Floral Mug Set (Set of 2)',
      slug: 'blue-pottery-floral-mug-set',
      category: 'Blue Pottery',
      description:
        'Hand-crafted using the traditional Jaipur blue pottery technique — a Persian art form revived by Maharaja Ram Singh. Made without clay, these mugs use quartz powder and are painted with cobalt blue and turquoise oxide. No two pieces are identical.',
      images: [
        '/images/products/blue-pottery-mug-1.jpg',
        '/images/products/blue-pottery-mug-2.jpg',
      ],
      price: 899,
      brand: 'Neelam Kala',
      rating: 4.6,
      numReviews: 42,
      stock: 25,
      isFeatured: true,
      banner: '/images/banners/blue-pottery-banner.jpg',
    },
    {
      name: 'Blue Pottery Decorative Wall Plate',
      slug: 'blue-pottery-decorative-wall-plate',
      category: 'Blue Pottery',
      description:
        'A stunning 10-inch decorative plate featuring a peacock motif painted in cobalt blue on a white quartz base. Comes with a wooden stand for display. A perfect centrepiece or wall accent for any home.',
      images: [
        '/images/products/blue-pottery-plate-1.jpg',
        '/images/products/blue-pottery-plate-2.jpg',
      ],
      price: 1199,
      brand: 'Neelam Kala',
      rating: 4.9,
      numReviews: 17,
      stock: 8,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Blue Pottery Planter Pot',
      slug: 'blue-pottery-planter-pot',
      category: 'Blue Pottery',
      description:
        'Bring Jaipur into your living room with this hand-painted blue pottery planter. Features traditional geometric border patterns and a drainage hole at the bottom. Suitable for small succulents, herbs, or as a standalone decor piece.',
      images: [
        '/images/products/blue-pottery-planter-1.jpg',
        '/images/products/blue-pottery-planter-2.jpg',
      ],
      price: 699,
      brand: 'Neelam Kala',
      rating: 4.4,
      numReviews: 29,
      stock: 18,
      isFeatured: false,
      banner: null,
    },

    // ── MEENAKARI JEWELLERY ──────────────────────────────────────────
    {
      name: 'Meenakari Gold-Plated Jhumka Earrings',
      slug: 'meenakari-gold-plated-jhumka-earrings',
      category: 'Meenakari Jewellery',
      description:
        'Traditional Jaipur jhumkas with intricate meenakari enamel work in vibrant pink and green hues on gold-plated brass. Handcrafted by artisans from the Soni community who have practised this Mughal art form for generations.',
      images: [
        '/images/products/meenakari-jhumka-1.jpg',
        '/images/products/meenakari-jhumka-2.jpg',
      ],
      price: 1599,
      brand: 'Rang Mahal Jewels',
      rating: 4.8,
      numReviews: 56,
      stock: 30,
      isFeatured: true,
      banner: '/images/banners/meenakari-banner.jpg',
    },
    {
      name: 'Meenakari Kundan Choker Necklace',
      slug: 'meenakari-kundan-choker-necklace',
      category: 'Meenakari Jewellery',
      description:
        'A regal choker necklace combining the twin arts of Kundan setting and Meenakari enamel work. Features uncut polki stones set in gold-plated silver with a vivid red and green enamel reverse. Comes in a gift box.',
      images: [
        '/images/products/meenakari-choker-1.jpg',
        '/images/products/meenakari-choker-2.jpg',
      ],
      price: 3499,
      brand: 'Rang Mahal Jewels',
      rating: 4.9,
      numReviews: 12,
      stock: 5,
      isFeatured: false,
      banner: null,
    },

    // ── LAC BANGLES ──────────────────────────────────────────────────
    {
      name: 'Lac Bangle Set with Mirror Work (Set of 6)',
      slug: 'lac-bangle-set-mirror-work',
      category: 'Lac Bangles',
      description:
        'Handmade lac bangles from Jaipur\'s Maniharon ka Rasta, decorated with tiny mirrors, gold zari thread, and coloured stones. Each bangle is moulded by hand on a heated lac rod. Available in sizes 2.4, 2.6, 2.8.',
      images: [
        '/images/products/lac-bangles-1.jpg',
        '/images/products/lac-bangles-2.jpg',
      ],
      price: 549,
      brand: 'Gulabi Originals',
      rating: 4.5,
      numReviews: 38,
      stock: 40,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Bridal Lac Bangle Set with Kundan (Set of 12)',
      slug: 'bridal-lac-bangle-set-kundan',
      category: 'Lac Bangles',
      description:
        'A full bridal set of 12 lac bangles richly studded with Kundan stones, pearls, and gold foil work. Traditionally worn by Rajasthani brides, these bangles are made to order and can be customised by colour and size.',
      images: [
        '/images/products/lac-bangles-bridal-1.jpg',
        '/images/products/lac-bangles-bridal-2.jpg',
      ],
      price: 1899,
      brand: 'Gulabi Originals',
      rating: 4.9,
      numReviews: 9,
      stock: 12,
      isFeatured: true,
      banner: null,
    },

    // ── SANDALWOOD CRAFTS ────────────────────────────────────────────
    {
      name: 'Hand-Carved Sandalwood Elephant Figurine',
      slug: 'hand-carved-sandalwood-elephant-figurine',
      category: 'Sandalwood Crafts',
      description:
        'A beautifully carved elephant figurine in genuine sandalwood, hand-crafted by artisans from Rajasthan. The natural fragrance lasts for years. Elephants are a symbol of wisdom and good luck in Rajasthani culture. Approx. 5 inches tall.',
      images: [
        '/images/products/sandalwood-elephant-1.jpg',
        '/images/products/sandalwood-elephant-2.jpg',
      ],
      price: 2199,
      brand: 'Aranya Crafts',
      rating: 4.7,
      numReviews: 22,
      stock: 7,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Sandalwood Carved Photo Frame',
      slug: 'sandalwood-carved-photo-frame',
      category: 'Sandalwood Crafts',
      description:
        'A 5x7 inch photo frame hand-carved in sandalwood with a floral jali border. Subtly fragrant and naturally warm-toned, this frame makes a thoughtful gift for weddings, housewarmings, or anniversaries.',
      images: [
        '/images/products/sandalwood-frame-1.jpg',
        '/images/products/sandalwood-frame-2.jpg',
      ],
      price: 1499,
      brand: 'Aranya Crafts',
      rating: 4.6,
      numReviews: 14,
      stock: 11,
      isFeatured: false,
      banner: null,
    },

    // ── LEATHER MOJARIS ──────────────────────────────────────────────
    {
      name: 'Hand-Embroidered Leather Mojari (Gold)',
      slug: 'hand-embroidered-leather-mojari-gold',
      category: 'Leather Mojaris',
      description:
        'Traditional Rajasthani mojaris handcrafted from genuine leather and hand-embroidered with golden zari thread in a floral pattern. The curled toe is a signature of Jaipur craftsmanship. Available in sizes 36–42.',
      images: [
        '/images/products/mojari-gold-1.jpg',
        '/images/products/mojari-gold-2.jpg',
      ],
      price: 1799,
      brand: 'Jutti Mahal',
      rating: 4.6,
      numReviews: 33,
      stock: 20,
      isFeatured: true,
      banner: '/images/banners/mojari-banner.jpg',
    },
    {
      name: 'Mirror Work Velvet Mojari (Pink)',
      slug: 'mirror-work-velvet-mojari-pink',
      category: 'Leather Mojaris',
      description:
        'A festive pair of mojaris in deep pink velvet with intricate mirror work and bead embroidery. Leather-soled and cushioned for comfort. Perfect for weddings, mehndi, and festive occasions.',
      images: [
        '/images/products/mojari-pink-1.jpg',
        '/images/products/mojari-pink-2.jpg',
      ],
      price: 1599,
      brand: 'Jutti Mahal',
      rating: 4.8,
      numReviews: 21,
      stock: 15,
      isFeatured: false,
      banner: null,
    },

    // ── MARBLE INLAY ─────────────────────────────────────────────────
    {
      name: 'Marble Inlay Decorative Tray',
      slug: 'marble-inlay-decorative-tray',
      category: 'Marble Inlay',
      description:
        'Inspired by the pietra dura craft of the Taj Mahal, this white marble tray is inlaid with semi-precious stones — lapis lazuli, malachite, and mother of pearl — in a floral pattern. Each tray takes 3–4 days to complete by hand.',
      images: [
        '/images/products/marble-tray-1.jpg',
        '/images/products/marble-tray-2.jpg',
      ],
      price: 3999,
      brand: 'Makrana Marble Arts',
      rating: 4.9,
      numReviews: 8,
      stock: 4,
      isFeatured: true,
      banner: '/images/banners/marble-banner.jpg',
    },
    {
      name: 'Marble Inlay Coaster Set (Set of 4)',
      slug: 'marble-inlay-coaster-set',
      category: 'Marble Inlay',
      description:
        'A set of four round white marble coasters each inlaid with a different floral motif using turquoise and red coral stone chips. A practical yet luxurious addition to any table setting. Comes in a velvet pouch.',
      images: [
        '/images/products/marble-coasters-1.jpg',
        '/images/products/marble-coasters-2.jpg',
      ],
      price: 1899,
      brand: 'Makrana Marble Arts',
      rating: 4.7,
      numReviews: 19,
      stock: 16,
      isFeatured: false,
      banner: null,
    },

    // ── RAJASTHANI PUPPETS ───────────────────────────────────────────
    {
      name: 'Kathputli Rajasthani String Puppet Pair',
      slug: 'kathputli-rajasthani-string-puppet-pair',
      category: 'Rajasthani Puppets',
      description:
        'A vibrant pair of traditional Kathputli puppets — a king and queen — dressed in miniature Rajasthani costumes with embroidered fabric, mirror work, and painted wooden heads. Handmade by the Bhat puppet-maker community of Jaipur.',
      images: [
        '/images/products/kathputli-pair-1.jpg',
        '/images/products/kathputli-pair-2.jpg',
      ],
      price: 899,
      brand: 'Gulabi Originals',
      rating: 4.8,
      numReviews: 47,
      stock: 22,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Large Decorative Kathputli Wall Puppet',
      slug: 'large-decorative-kathputli-wall-puppet',
      category: 'Rajasthani Puppets',
      description:
        'A large 18-inch Kathputli puppet designed as a wall hanging. Dressed in a full ghagra-choli with real mirror-work fabric and a miniature silver headpiece. A stunning piece of folk art for homes, cafes, or offices.',
      images: [
        '/images/products/kathputli-wall-1.jpg',
        '/images/products/kathputli-wall-2.jpg',
      ],
      price: 1299,
      brand: 'Gulabi Originals',
      rating: 4.6,
      numReviews: 15,
      stock: 10,
      isFeatured: false,
      banner: null,
    },

    // ── JAIPUR CARPETS ───────────────────────────────────────────────
    {
      name: 'Hand-Knotted Woollen Dhurrie (4x6 ft)',
      slug: 'hand-knotted-woollen-dhurrie-4x6',
      category: 'Jaipur Carpets',
      description:
        'A flat-woven 4x6 ft dhurrie in natural wool with a traditional geometric diamond pattern in terracotta, ivory, and indigo. Hand-knotted on a wooden loom by weavers in the villages around Jaipur. Reversible and durable.',
      images: [
        '/images/products/dhurrie-1.jpg',
        '/images/products/dhurrie-2.jpg',
      ],
      price: 4999,
      brand: 'Bunkar Weavers',
      rating: 4.7,
      numReviews: 11,
      stock: 6,
      isFeatured: true,
      banner: '/images/banners/carpet-banner.jpg',
    },
    {
      name: 'Cotton Chindi Rag Rug (3x5 ft)',
      slug: 'cotton-chindi-rag-rug-3x5',
      category: 'Jaipur Carpets',
      description:
        'A colourful handwoven chindi rug made from upcycled cotton fabric strips. Each rug is unique in its colour combination. Eco-friendly, washable, and perfect for bedrooms, balconies, or reading nooks.',
      images: [
        '/images/products/chindi-rug-1.jpg',
        '/images/products/chindi-rug-2.jpg',
      ],
      price: 1799,
      brand: 'Bunkar Weavers',
      rating: 4.5,
      numReviews: 28,
      stock: 14,
      isFeatured: false,
      banner: null,
    },

    // ── JAIPUR RAZAI ─────────────────────────────────────────────────
    {
      name: 'Jaipuri Hand Block Print Razai (Double)',
      slug: 'jaipuri-hand-block-print-razai-double',
      category: 'Jaipur Razai',
      description:
        'A luxuriously light double-bed razai filled with pure cotton and covered in hand block-printed fabric. The Jaipur razai is famous across India for its warmth without weight. This one features a classic bel-patta border print in rose and gold.',
      images: [
        '/images/products/razai-1.jpg',
        '/images/products/razai-2.jpg',
      ],
      price: 3499,
      brand: 'Gulabi Home',
      rating: 4.9,
      numReviews: 64,
      stock: 18,
      isFeatured: true,
      banner: '/images/banners/razai-banner.jpg',
    },
    {
      name: 'Jaipuri Silk Razai (Single)',
      slug: 'jaipuri-silk-razai-single',
      category: 'Jaipur Razai',
      description:
        'A lightweight single-bed razai with a pure silk outer layer in peacock blue and gold. Filled with natural cotton batting. The silk cover gives it a rich sheen while keeping it breathable for Rajasthan\'s winters.',
      images: [
        '/images/products/silk-razai-1.jpg',
        '/images/products/silk-razai-2.jpg',
      ],
      price: 2799,
      brand: 'Gulabi Home',
      rating: 4.7,
      numReviews: 23,
      stock: 9,
      isFeatured: false,
      banner: null,
    },

    // ── EMBROIDERED UMBRELLAS ────────────────────────────────────────
    {
      name: 'Rajasthani Embroidered Decorative Umbrella (Pink)',
      slug: 'rajasthani-embroidered-decorative-umbrella-pink',
      category: 'Embroidered Umbrellas',
      description:
        'A vibrant gulabi pink parasol hand-embroidered with mirror work, sequins, and colourful thread in a floral pattern. Traditionally used in Rajasthani folk dance and weddings, this umbrella is also a stunning home decor piece when hung from the ceiling.',
      images: [
        '/images/products/umbrella-pink-1.jpg',
        '/images/products/umbrella-pink-2.jpg',
      ],
      price: 1299,
      brand: 'Gulabi Originals',
      rating: 4.8,
      numReviews: 36,
      stock: 12,
      isFeatured: true,
      banner: '/images/banners/umbrella-banner.jpg',
    },
    {
      name: 'Miniature Embroidered Umbrella Bunch (Set of 5)',
      slug: 'miniature-embroidered-umbrella-bunch',
      category: 'Embroidered Umbrellas',
      description:
        'A set of 5 miniature embroidered umbrellas in different colours — perfect as a hanging mobile for nurseries, boho rooms, or wedding decor. Each umbrella is about 8 inches in diameter with hand-stitched mirror work.',
      images: [
        '/images/products/umbrella-mini-1.jpg',
        '/images/products/umbrella-mini-2.jpg',
      ],
      price: 799,
      brand: 'Gulabi Originals',
      rating: 4.6,
      numReviews: 19,
      stock: 25,
      isFeatured: false,
      banner: null,
    },

    // ── JAIPURI JUTTIS ───────────────────────────────────────────────
    {
      name: 'Jaipuri Jutti with Gota Patti Work (Ivory)',
      slug: 'jaipuri-jutti-gota-patti-ivory',
      category: 'Jaipuri Juttis',
      description:
        'Handcrafted leather juttis with intricate gota patti (ribbon embroidery) detailing on an ivory base. Fully leather-lined for comfort. These flat juttis pair beautifully with kurtas, salwars, and lehengas. Sizes 36–41.',
      images: [
        '/images/products/jutti-ivory-1.jpg',
        '/images/products/jutti-ivory-2.jpg',
      ],
      price: 1499,
      brand: 'Jutti Mahal',
      rating: 4.7,
      numReviews: 44,
      stock: 20,
      isFeatured: false,
      banner: null,
    },

    // ── RAJASTHANI PAINTINGS ─────────────────────────────────────────
    {
      name: 'Miniature Pichwai Painting on Cloth (Krishna)',
      slug: 'miniature-pichwai-painting-krishna',
      category: 'Rajasthani Paintings',
      description:
        'A hand-painted Pichwai painting on cloth depicting Lord Krishna with cows and lotus motifs. Painted with natural stone pigments and 24-karat gold leaf detailing by trained miniature painters from Nathdwara. Framed and ready to hang.',
      images: [
        '/images/products/pichwai-krishna-1.jpg',
        '/images/products/pichwai-krishna-2.jpg',
      ],
      price: 5999,
      brand: 'Chitrakaar Studio',
      rating: 5.0,
      numReviews: 7,
      stock: 3,
      isFeatured: true,
      banner: '/images/banners/painting-banner.jpg',
    },
    {
      name: 'Phad Painting on Canvas (Pabuji Folk Story)',
      slug: 'phad-painting-pabuji-folk-story',
      category: 'Rajasthani Paintings',
      description:
        'A traditional Phad scroll painting depicting episodes from the folk legend of Pabuji, the Rajasthani hero-god. Painted on cotton canvas with vegetable dyes in the bold, flat style characteristic of the Joshi painter community of Bhilwara.',
      images: [
        '/images/products/phad-painting-1.jpg',
        '/images/products/phad-painting-2.jpg',
      ],
      price: 4499,
      brand: 'Chitrakaar Studio',
      rating: 4.9,
      numReviews: 5,
      stock: 4,
      isFeatured: false,
      banner: null,
    },
  ],
};

export default sampleData;