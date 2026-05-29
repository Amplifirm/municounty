import { motion } from 'framer-motion';
import { ArrowRight } from '../icons';
import { PHOTOS } from '../data';

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: `url(${PHOTOS.hero})` }} aria-hidden />
      <div className="hero-grad" aria-hidden />

      <div className="container hero-inner">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
        >
          <span className="hero-dot" /> Established 1838 · Camden & Middlesex Counties, NJ
        </motion.span>

        <h1>
          {['Mercer County,', 'New Jersey.'].map((line, i) => (
            <motion.span
              key={i}
              style={{ display: 'block', overflow: 'hidden' }}
            >
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1.0, ease }}
              >
                {line}
              </motion.span>
            </motion.span>
          ))}
          <motion.span
            style={{ display: 'block', overflow: 'hidden' }}
          >
            <motion.span
              className="hero-accent"
              style={{ display: 'block' }}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1.0, ease }}
            >
              The Capital County.
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease }}
        >
          Home to over 380,000 residents across 13 municipalities — from Trenton, the state capital,
          to Princeton, to the Delaware River shore. Find services, meetings, parks, and everything
          you need from your county government.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease }}
        >
          <a href="#quick" className="btn btn-primary">Resident Services <ArrowRight /></a>
          <a href="https://www.mercercounty.org/i-want-to/report-a-concern" className="btn btn-ghost">Report a Concern <ArrowRight /></a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.9 }}
        >
          <div className="m"><div className="n">380,000+</div><div className="l">Residents</div></div>
          <div className="m"><div className="n">1838</div><div className="l">Incorporated</div></div>
          <div className="m"><div className="n">13</div><div className="l">Municipalities</div></div>
          <div className="m"><div className="n">3,000+</div><div className="l">Acres of Parkland</div></div>
        </motion.div>
      </div>
    </section>
  );
}
