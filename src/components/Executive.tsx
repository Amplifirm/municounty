import { motion } from 'framer-motion';
import { PHOTOS } from '../data';

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Executive() {
  return (
    <section className="exec-section" id="executive">
      <div className="container exec-inner">
        <motion.div
          className="exec-photo"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease }}
        >
          <img src={PHOTOS.danBenson} alt="County Executive Dan Benson" />
        </motion.div>

        <motion.div
          className="exec-text"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease }}
        >
          <span className="eyebrow on-dark">County Executive</span>
          <blockquote>
            "In Mercer County, if you have a good idea that can help people, I want to hear it.
            This administration will work tirelessly to make sure everyone has a seat at the table."
          </blockquote>
          <div className="exec-attr">
            <strong>Dan Benson</strong>
            <span>County Executive · Sworn in January 2024</span>
          </div>
          <p className="exec-mission">
            The mission of the Office of the County Executive is to exercise executive leadership
            of Mercer County government for the greater benefit of all residents and visitors —
            in an honest, effective, and economical manner.
          </p>
          <div className="exec-stats">
            <div><span className="es-n">380K+</span><span className="es-l">residents served</span></div>
            <div><span className="es-n">45+</span><span className="es-l">county departments</span></div>
            <div><span className="es-n">$1.2B</span><span className="es-l">annual budget</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
