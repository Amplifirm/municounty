import React from "react";
import { Road, CreditCard, FileText, Vote, AlertBell, Briefcase, Calendar } from '../icons';
import { QUICK_LINKS } from '../data';

const ICON_MAP: Record<string, React.ReactElement> = {
  road:  <Road />,
  card:  <CreditCard />,
  file:  <FileText />,
  vote:  <Vote />,
  alert: <AlertBell />,
  brief: <Briefcase />,
  opra:  <FileText />,
  cal:   <Calendar />,
};

export default function QuickLinks() {
  return (
    <div className="quick-wrap" id="quick">
      <div className="container">
        <div className="quick-grid">
          {QUICK_LINKS.map(l => (
            <a key={l.label} href={l.href} className="quick-card">
              <span className="quick-ico" aria-hidden>{ICON_MAP[l.icon]}</span>
              <div>
                <div className="ql-label">{l.label}</div>
                <div className="ql-sub">{l.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
