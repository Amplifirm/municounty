const s = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export function ArrowRight({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" {...s}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
export function Caret({ className }: { className?: string }) {
  return <svg className={className} width="10" height="10" viewBox="0 0 24 24" {...s}><path d="M6 9l6 6 6-6"/></svg>;
}
export function Search() {
  return <svg width="16" height="16" viewBox="0 0 24 24" {...s}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
}
export function Phone() {
  return <svg width="11" height="11" viewBox="0 0 24 24" {...s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>;
}
export function Globe() {
  return <svg width="11" height="11" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
}
export function Menu() {
  return <svg width="18" height="18" viewBox="0 0 24 24" {...s}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
}
export function AlertBell() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
}
export function FileText() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>;
}
export function CreditCard() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>;
}
export function Road() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M3 17l3-10M21 17l-3-10M9 17l1.5-6M15 17l-1.5-6M3 17h18"/></svg>;
}
export function Vote() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
}
export function Calendar() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>;
}
export function Briefcase() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4"/></svg>;
}
export function Tree() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M12 22V12M12 12L7 7M12 12l5-5M3 17h18"/></svg>;
}
export function Shield() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
export function Home() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
export function Heart() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}
export function Plane() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...s}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 4.2a1 1 0 0 0-1 .25L.58 5.71a.77.77 0 0 0 .07 1.06L9 11l-3 3H4l-2 2 3 1 1 3 2-2v-2l3-3 4.28 8.35a.77.77 0 0 0 1.06.07l1.25-1.22a1 1 0 0 0 .21-1z"/></svg>;
}
