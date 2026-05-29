import { motion } from 'framer-motion';
import { ArrowRight } from '../icons';
import { PHOTOS, PARKS } from '../data';

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Parks() {
  return (
    <section className="section parks" id="parks">
      <div className="container parks-grid">
        <div className="parks-imgs">
          {[PHOTOS.lake, PHOTOS.hike, PHOTOS.pool].map((src, i) => (
            <motion.div
              key={i}
              className={i === 0 ? 'pi-a' : ''}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.9, ease }}
            >
              <img src={src} alt="Mercer County Parks" />
            </motion.div>
          ))}
        </div>

        <div>
          <span className="eyebrow">Parks &amp; Recreation</span>
          <h2 style={{ marginTop: 16 }}>Open space, year-round.</h2>
          <p className="muted" style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, maxWidth: '44ch' }}>
            The Mercer County Park Commission maintains over 3,000 acres of parks, trails,
            and recreation facilities across the county — from the boathouse at Mercer Lake
            to the historic Howell Living History Farm.
          </p>
          <div className="parks-list">
            {PARKS.map((p, i) => (
              <motion.a
                key={p.name}
                href="https://www.mercercounty.org/departments/mercer-county-park-commission"
                className="park-row"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.07, duration: 0.65, ease }}
              >
                <span className="p-num">{p.num}</span>
                <span className="p-nm">{p.name}<small>{p.desc}</small></span>
                <span className="p-arrow"><ArrowRight /></span>
              </motion.a>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a href="https://www.mercercounty.org/departments/mercer-county-park-commission" className="btn btn-dark">
              Explore Parks &amp; Programs <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
