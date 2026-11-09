import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { selectCartCount } from './CartSlice';

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-icon"><Leaf size={23} strokeWidth={1.8} /></span>
          <span className="brand-name">paradise<span>nursery</span><small>PLANTS & LITTLE JOYS</small></span>
        </Link>
        <div className="nav-links">
          <NavLink end to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/plants" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Plants</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Our Story</NavLink>
        </div>
        <Link className="cart-nav" to="/cart" aria-label={`Cart with ${cartCount} items`}>
          <span className="cart-nav-text">Your cart <ArrowUpRight size={14}/></span>
          <span className="bag-wrapper"><ShoppingBag size={22} strokeWidth={1.8}/><span className="cart-badge">{cartCount}</span></span>
        </Link>
      </nav>
    </header>
  );
}
