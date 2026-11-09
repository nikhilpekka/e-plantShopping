import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Leaf, Truck, Sprout, Heart } from 'lucide-react';
import { products } from './products';

const picks = [products[6], products[0], products[12]];

export default function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner page-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> YOUR LITTLE CORNER OF GREEN</div>
            <h1>Good things<br/> <em>grow</em> here<span className="hero-period">.</span></h1>
            <p>Bring a little life into your everyday. Thoughtfully chosen houseplants, delivered with care, made for spaces like yours.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/plants">Get Started <ArrowUpRight size={19}/></Link>
              <Link className="text-link hero-secondary" to="/about">Get to know us <ArrowRight size={17}/></Link>
            </div>
            <div className="hero-social-proof"><div className="avatar-stack"><span>J</span><span>A</span><span>M</span></div><div><strong>Made for plant people</strong><small>From first leaves to leafy jungles</small></div></div>
          </div>
          <div className="hero-visual" role="img" aria-label="Illustrated thriving monstera plant in a terracotta pot">
            <div className="hero-circle"/><span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✻</span>
            <img className="hero-plant" src="/plants/monstera.svg" alt="" />
            <div className="hero-note"><Leaf size={18}/><div><strong>Grow at your own pace</strong><small>A little green goes a long way.</small></div></div>
            <span className="hero-caption">NATURE, RIGHT AT HOME — EST. 2026</span>
          </div>
        </div>
        <div className="hero-bottom"> <div className="page-shell hero-bottom-inner"><span>ROOTED IN LOVE. GROWN FOR YOU.</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div></div>
      </section>

      <section className="benefits page-shell" aria-label="Why shop with us">
        <div className="benefit"><span className="benefit-icon"><Sprout size={24}/></span><div><strong>Happy, healthy plants</strong><p>Carefully picked, always loved</p></div></div>
        <div className="benefit"><span className="benefit-icon"><Truck size={24}/></span><div><strong>Delivered to your door</strong><p>Thoughtfully packed for the trip</p></div></div>
        <div className="benefit"><span className="benefit-icon"><Heart size={24}/></span><div><strong>Easy to fall in love with</strong><p>Greenery for every lifestyle</p></div></div>
      </section>

      <section className="featured-section page-shell">
        <div className="section-header"><div><p className="section-kicker">A LITTLE GREEN INSPIRATION</p><h2>Meet your new <em>leafy friends.</em></h2></div><Link className="text-link" to="/plants">Shop all plants <ArrowUpRight size={18}/></Link></div>
        <div className="featured-grid">{picks.map((plant) => <Link className="featured-card" to="/plants" key={plant.id}><div className="featured-art"><img src={plant.image} alt={plant.name}/></div><div className="featured-card-bottom"><span><strong>{plant.name}</strong><small>{plant.botanical}</small></span><ArrowUpRight size={20}/></div></Link>)}</div>
      </section>
      <section className="cta-strip"><div className="page-shell cta-inner"><div><span>YOUR SPACE DESERVES A LITTLE GREEN</span><h2>Every plant has a story.<br/><em>Start yours today.</em></h2></div><Link className="btn btn-light" to="/plants">Explore the collection <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
