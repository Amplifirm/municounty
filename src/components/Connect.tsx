import { ArrowRight } from '../icons';
import { PHOTOS } from '../data';

export default function Connect() {
  return (
    <section id="connect" className="connect">
      <div className="connect-pic">
        <img src={PHOTOS.arts} alt="Arts and culture in Mercer County" />
        <div className="connect-cap">
          <h3>Stay connected with your county.</h3>
          <p>
            Sign up for emergency alerts, meeting agendas, road closures, and county news
            delivered straight to your inbox or phone.
          </p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <span className="eyebrow on-dark gold">Stay in the loop</span>
        <h2 style={{ marginTop: 14 }}>Subscribe to alerts.</h2>

        <div className="field">
          <label>Full name</label>
          <input placeholder="First and last" />
        </div>
        <div className="field">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Municipality</label>
          <input placeholder="e.g. Trenton, Princeton, Hamilton…" />
        </div>
        <div className="field">
          <label>What would you like to hear about?</label>
          <textarea rows={2} placeholder="Emergency alerts, parks events, road closures, meetings…" />
        </div>

        <button className="btn btn-light submit" type="submit">
          Sign Me Up <ArrowRight />
        </button>
      </form>
    </section>
  );
}
