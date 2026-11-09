import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Search, ShoppingBag, SlidersHorizontal, Sun, Droplets } from 'lucide-react';
import { addItem, selectCartItems } from './CartSlice';
import { categories, formatPrice, products } from './products';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const result = products.filter((plant) => (activeCategory === 'all' || plant.category === activeCategory) && `${plant.name} ${plant.botanical} ${plant.description}`.toLowerCase().includes(search.toLowerCase().trim()));
    if (sort === 'price-low') return [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-high') return [...result].sort((a, b) => b.price - a.price);
    if (sort === 'name') return [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeCategory, search, sort]);

  const groups = activeCategory === 'all' ? categories : categories.filter((cat) => cat.id === activeCategory);
  const addedIds = new Set(cartItems.map((item) => item.id));
  const countLabel = `${filtered.length} ${filtered.length === 1 ? 'plant' : 'plants'}`;

  return (
    <main>
      <section className="shop-hero"><div className="page-shell shop-hero-inner"><div><p className="section-kicker">THE PARADISE COLLECTION</p><h1>Find your next <em>green thing.</em></h1><p>From easy-going greens to room-stealing showstoppers, there's a plant for every kind of plant parent.</p></div><div className="shop-hero-image"><img src="/plants/areca-palm.svg" alt="Illustrated areca palm" /></div></div></section>
      <div className="shop-toolbar page-shell"><div className="category-tabs" role="group" aria-label="Filter plant category"><button className={activeCategory === 'all' ? 'tab active' : 'tab'} type="button" onClick={() => setActiveCategory('all')}>All plants <span>18</span></button>{categories.map((category) => <button key={category.id} className={activeCategory === category.id ? 'tab active' : 'tab'} type="button" onClick={() => setActiveCategory(category.id)}>{category.name} <span>6</span></button>)}</div><div className="filter-row"><label className="search-box"><Search size={17}/><input aria-label="Search plants" placeholder="Search for a plant..." value={search} onChange={(e) => setSearch(e.target.value)}/></label><label className="sort-box"><SlidersHorizontal size={16}/><span className="sr-only">Sort plants</span><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort plants"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></label></div></div>
      <div className="shop-content page-shell"><p className="results-count">Showing {countLabel} in our collection</p>{filtered.length === 0 ? <div className="no-results"><Search size={30}/><h2>No plants found</h2><p>Try another search or pick a different category.</p><button type="button" className="btn btn-primary" onClick={() => {setSearch('');setActiveCategory('all');}}>Clear filters <ArrowRight size={18}/></button></div> : groups.map((category) => {
        const groupPlants = filtered.filter((plant) => plant.category === category.id);
        if (!groupPlants.length) return null;
        return <section className="plant-category" key={category.id} aria-labelledby={`category-${category.id}`}><div className="category-heading"><div><p className="section-kicker">{category.tag}</p><h2 id={`category-${category.id}`}>{category.name}<span className="category-count">{groupPlants.length.toString().padStart(2, '0')}</span></h2><p>{category.subtitle}</p></div><span className="category-decoration" aria-hidden="true">✳</span></div><div className="product-grid">{groupPlants.map((plant) => {
          const added = addedIds.has(plant.id);
          return <article className="product-card" key={plant.id}><div className="product-art"><img src={plant.image} alt={`${plant.name} indoor houseplant`} loading="lazy"/>{plant.badge && <span className="product-badge">{plant.badge}</span>}</div><div className="product-body"><div className="product-name-row"><div><h3>{plant.name}</h3><p className="botanical">{plant.botanical}</p></div><strong className="price">{formatPrice(plant.price)}</strong></div><p className="product-description">{plant.description}</p><div className="plant-care"><span><Sun size={14}/> {plant.light}</span><span><Droplets size={14}/> {plant.water}</span></div><button className={added ? 'add-btn added' : 'add-btn'} type="button" disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? <><Check size={18}/> Added to Cart</> : <><ShoppingBag size={17}/> Add to Cart <ArrowUpRight size={17}/></>}</button></div></article>;
        })}</div></section>;
      })}<div className="shop-end"><span>✳</span><p>That's all our lovely plants for now.</p><Link to="/cart">View your basket <ArrowUpRight size={16}/></Link></div></div>
    </main>
  );
}
