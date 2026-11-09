/** All product images are bundled locally for reliable rendering. */
export const categories = [
  { id: 'easy-care', name: 'Easy-Care Favorites', subtitle: 'Low-maintenance greenery for effortless living.', tag: 'Made for beginners' },
  { id: 'statement', name: 'Statement Plants', subtitle: 'A little drama, a lot of personality.', tag: 'A bold impression' },
  { id: 'air-purifying', name: 'Air-Purifying Greens', subtitle: 'Fresh foliage for every little corner.', tag: 'Breathe a little easier' },
];

export const products = [
  { id: 'snake-plant', name: 'Snake Plant', botanical: 'Dracaena trifasciata', price: 499, category: 'easy-care', image: '/plants/snake-plant.svg', light: 'Low to bright indirect', water: 'Every 2–3 weeks', badge: 'Bestseller', description: 'Tall, architectural foliage that thrives on a little neglect.' },
  { id: 'pothos', name: 'Golden Pothos', botanical: 'Epipremnum aureum', price: 349, category: 'easy-care', image: '/plants/pothos.svg', light: 'Low to medium', water: 'Weekly', badge: 'Beginner friendly', description: 'Trailing golden-green leaves that make any shelf feel alive.' },
  { id: 'zz-plant', name: 'ZZ Plant', botanical: 'Zamioculcas zamiifolia', price: 649, category: 'easy-care', image: '/plants/zz-plant.svg', light: 'Low to indirect', water: 'Every 2–3 weeks', badge: '', description: 'Glossy emerald fronds with impressive drought tolerance.' },
  { id: 'aloe-vera', name: 'Aloe Vera', botanical: 'Aloe barbadensis', price: 299, category: 'easy-care', image: '/plants/aloe-vera.svg', light: 'Bright indirect', water: 'Every 2 weeks', badge: '', description: 'A sun-loving succulent with beautifully sculptural leaves.' },
  { id: 'jade-plant', name: 'Jade Plant', botanical: 'Crassula ovata', price: 399, category: 'easy-care', image: '/plants/jade-plant.svg', light: 'Bright indirect', water: 'Every 2 weeks', badge: '', description: 'Charming, plump leaves on a miniature tree-like silhouette.' },
  { id: 'spider-plant', name: 'Spider Plant', botanical: 'Chlorophytum comosum', price: 329, category: 'easy-care', image: '/plants/spider-plant.svg', light: 'Medium indirect', water: 'Weekly', badge: '', description: 'Playful striped leaves that cascade over the edges of a pot.' },

  { id: 'monstera', name: 'Monstera Deliciosa', botanical: 'Monstera deliciosa', price: 899, category: 'statement', image: '/plants/monstera.svg', light: 'Bright indirect', water: 'Weekly', badge: 'Popular', description: 'Iconic split leaves for an instant tropical feeling.' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', botanical: 'Ficus lyrata', price: 1199, category: 'statement', image: '/plants/fiddle-leaf.svg', light: 'Bright indirect', water: 'Weekly', badge: '', description: 'Large, violin-shaped leaves create a beautiful focal point.' },
  { id: 'bird-paradise', name: 'Bird of Paradise', botanical: 'Strelitzia nicolai', price: 1399, category: 'statement', image: '/plants/bird-paradise.svg', light: 'Bright light', water: 'Weekly', badge: 'Statement pick', description: 'Giant upright leaves that bring resort vibes indoors.' },
  { id: 'rubber-plant', name: 'Rubber Plant', botanical: 'Ficus elastica', price: 799, category: 'statement', image: '/plants/rubber-plant.svg', light: 'Bright indirect', water: 'Every 1–2 weeks', badge: '', description: 'Rich, dark leaves with an elegant glossy finish.' },
  { id: 'areca-palm', name: 'Areca Palm', botanical: 'Dypsis lutescens', price: 999, category: 'statement', image: '/plants/areca-palm.svg', light: 'Bright indirect', water: 'Weekly', badge: '', description: 'Soft, feathery fronds that add height and movement.' },
  { id: 'philodendron', name: 'Heartleaf Philodendron', botanical: 'Philodendron hederaceum', price: 549, category: 'statement', image: '/plants/philodendron.svg', light: 'Medium indirect', water: 'Weekly', badge: '', description: 'Lush heart-shaped foliage with a lovely trailing habit.' },

  { id: 'peace-lily', name: 'Peace Lily', botanical: 'Spathiphyllum wallisii', price: 599, category: 'air-purifying', image: '/plants/peace-lily.svg', light: 'Low to medium', water: 'Weekly', badge: 'Customer favorite', description: 'Graceful deep-green leaves and distinctive white blooms.' },
  { id: 'boston-fern', name: 'Boston Fern', botanical: 'Nephrolepis exaltata', price: 449, category: 'air-purifying', image: '/plants/boston-fern.svg', light: 'Indirect light', water: 'Keep lightly moist', badge: '', description: 'Clouds of delicate fronds for a soft, leafy touch.' },
  { id: 'chinese-evergreen', name: 'Chinese Evergreen', botanical: 'Aglaonema commutatum', price: 699, category: 'air-purifying', image: '/plants/chinese-evergreen.svg', light: 'Low to medium', water: 'Every 1–2 weeks', badge: '', description: 'Beautifully patterned leaves that brighten up shaded rooms.' },
  { id: 'bamboo-palm', name: 'Bamboo Palm', botanical: 'Chamaedorea seifrizii', price: 849, category: 'air-purifying', image: '/plants/bamboo-palm.svg', light: 'Medium indirect', water: 'Weekly', badge: '', description: 'A delicate cluster of palm fronds for a calming atmosphere.' },
  { id: 'dracaena', name: 'Dragon Tree', botanical: 'Dracaena marginata', price: 749, category: 'air-purifying', image: '/plants/dracaena.svg', light: 'Medium indirect', water: 'Every 1–2 weeks', badge: '', description: 'Slender spiky foliage gives an airy, modern silhouette.' },
  { id: 'english-ivy', name: 'English Ivy', botanical: 'Hedera helix', price: 379, category: 'air-purifying', image: '/plants/english-ivy.svg', light: 'Medium to bright', water: 'Weekly', badge: '', description: 'A classic evergreen vine, made for hanging planters.' },
];

export const formatPrice = (amount) => `₹${amount.toLocaleString('en-IN')}`;
