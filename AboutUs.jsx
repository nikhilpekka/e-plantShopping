import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart, Sprout, SunMedium } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="about-page page-shell">
      <div className="about-intro"><p className="section-kicker">OUR STORY</p><h1>We're here to make<br/><em>the world a little greener.</em></h1><p>Paradise Nursery is an online home for houseplants and the people who love them. We believe everyone deserves a little nature in their everyday life, whether you're growing your very first plant or building your own indoor jungle.</p></div>
      <div className="about-split"><div className="about-illustration"><img src="/plants/bird-paradise.svg" alt="Illustration of a Bird of Paradise plant"/><span>GROW SOMETHING GOOD ✳</span></div><div className="about-details"><p className="section-kicker">A NOTE FROM PARADISE NURSERY</p><h2>Plants make a house <em>feel like home.</em></h2><p>Our mission is simple: make it easy, enjoyable and affordable to bring plants into your space. We handpick a diverse collection of indoor greens, from tough-as-nails favorites to striking statement plants.</p><p>Every listing includes the essential details you need to choose with confidence. Explore the collection, find a new favorite, and bring your corner of the world to life.</p><div className="about-values"><div><Sprout size={23}/><strong>Thoughtfully selected</strong><span>Plants for every skill level</span></div><div><SunMedium size={23}/><strong>Grow with confidence</strong><span>Useful, beginner-friendly info</span></div><div><Heart size={23}/><strong>Made with care</strong><span>A little joy in every leaf</span></div></div><Link to="/plants" className="btn btn-primary">Explore our plants <ArrowUpRight size={18}/></Link></div></div>
    </main>
  );
}
