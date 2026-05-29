import React from "react";
import { motion } from 'framer-motion';
import { Shield, Road, Heart, Tree, ArrowRight } from '../icons';
import { PHOTOS } from '../data';

const ease = [0.2, 0.7, 0.2, 1] as const;

const ICONS: Record<string, React.ReactElement> = {
  shield: <Shield />, road: <Road />, heart: <Heart />, tree: <Tree />,
};

const VALUES = [
  { icon: 'shield', h: 'Fiscal Accountability',  p: 'Restoring financial stability. Every tax dollar tracked and reported.' },
  { icon: 'road',   h: 'Infrastructure',          p: 'Roads, bridges, and the new Trenton-Mercer Airport terminal.' },
  { icon: 'heart',  h: 'Human Services',          p: 'Housing, mental health, seniors, and youth — the full spectrum of community care.' },
  { icon: 'tree',   h: 'Parks & Open Space',      p: '3,000+ acres of trails, recreation, and natural lands for every resident.' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-pic"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease }}
        >
          <img src={PHOTOS.boathouse} alt="Mercer County Park Boathouse aerial view" />
          <div className="about-badge">
            <strong>Mercer County Park</strong>
            2,500 acres · West Windsor, NJ
          </div>
        </motion.div>

        <div>
          <span className="eyebrow">About the County</span>
          <h2 style={{ marginTop: 18 }}>Built on community since 1838.</h2>
          <p className="lead">
            As the Capital County of New Jersey, Mercer County boasts a rich history, ample
            opportunities, a diverse economy, and a welcoming environment. Positioned between
            the New York and Philadelphia metro areas, residents enjoy rural, suburban, and
            urban living — all in one county.
          </p>
          <div className="about-values">
            {VALUES.map(v => (
              <div key={v.h} className="about-value">
                <span className="av-ico" aria-hidden>{ICONS[v.icon]}</span>
                <div>
                  <h4>{v.h}</h4>
                  <p>{v.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="https://www.mercercounty.org/community/about/discover-mercer-county" className="btn btn-dark">
              Discover Mercer County <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
