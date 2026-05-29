import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Caret, Search, Globe, Phone, ArrowRight } from '../icons';
import { NAV, COUNTY } from '../data';

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="util-bar">
        <div className="container util-inner">
          <div className="util-left">
            <a href="https://www.mercercounty.org/departments/personnel/job-opportunities">Jobs</a>
            <a href="https://www.mercercounty.org/i-want-to/calendar-month-view">Calendar</a>
            <a href="https://www.mercercounty.org/departments/purchasing/bidding-opportunities">Bids &amp; RFP</a>
            <a href="https://www.mercercounty.org/i-want-to/register-for-emergency-notifications" className="util-alert">
              <span className="util-dot" />Alert Mercer
            </a>
            <a href="https://www.mercercounty.org/departments/public-information/contact-us">Contact Us</a>
          </div>
          <div className="util-right">
            <a href={`tel:${COUNTY.phone}`}><Phone /> {COUNTY.phone}</a>
            <a href="#translate"><Globe /> EN</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        className={`header${scrolled ? ' header--up' : ''}`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="container header-inner" ref={navRef} onMouseLeave={() => setOpen(null)}>
          <a href="#" className="brand">
            <div className="brand-seal">MC</div>
            <span className="brand-text">
              <span className="brand-name">MERCER COUNTY</span>
              <span className="brand-tag">The Capital County · New Jersey</span>
            </span>
          </a>

          <div className="nav-row">
            <nav className="nav" aria-label="Primary">
              {NAV.map((item, idx) => {
                const cols = item.cols.filter(c => c.length > 0);
                const isOpen = open === idx;
                return (
                  <div
                    key={item.label}
                    className={`nav-item${isOpen ? ' open' : ''}`}
                    onMouseEnter={() => setOpen(idx)}
                  >
                    <button
                      className="nav-btn"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      {item.label} <Caret className="caret" />
                    </button>
                    <div className={`megamenu cols-${cols.length}`} role="menu">
                      {cols.map((col, ci) => (
                        <div key={ci} className="mm-col">
                          {col.map(entry => (
                            <div key={entry.heading}>
                              <h5><a href={(entry as any).href || '#'} className="mm-head-link">{entry.heading}</a></h5>
                              {entry.items && (
                                <ul className="mm-sub">
                                  {entry.items.map(s => (
                                    <li key={s.label}><a href={s.href}>{s.label}</a></li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="header-right">
            <button className="icon-btn" aria-label="Search"><Search /></button>
            <a href="https://www.mercercounty.org/i-want-to/search-assessment-and-tax-records" className="btn btn-primary btn-sm">
              Pay a Bill <ArrowRight />
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
