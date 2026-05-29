import { COUNTY } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-seal">MC</div>
          <p className="footer-name">MERCER COUNTY</p>
          <p className="footer-tag">The Capital County · New Jersey</p>
          <div className="footer-addr">
            <span>{COUNTY.address}</span>
            <span>P.O. Box 8068</span>
            <span>{COUNTY.city}</span>
            <span>{COUNTY.phone}</span>
            <span>{COUNTY.email}</span>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h5>Government</h5>
            <a href="https://www.mercercounty.org/government/county-executive">County Executive</a>
            <a href="https://www.mercercounty.org/government/board-of-county-commissioners">Board of Commissioners</a>
            <a href="https://www.mercercounty.org/government/county-clerk">County Clerk</a>
            <a href="https://www.mercercounty.org/government/county-surrogate">County Surrogate</a>
            <a href="https://www.mercercounty.org/government/sheriff">Sheriff</a>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="https://www.mercercounty.org/i-want-to/search-assessment-and-tax-records">Pay Taxes</a>
            <a href="https://www.mercercounty.org/departments/human-services">Human Services</a>
            <a href="https://www.mercercounty.org/departments/human-services/division-of-public-health">Public Health</a>
            <a href="https://www.mercercounty.org/i-want-to/view-job-opportunities">Job Opportunities</a>
            <a href="https://www.mercercounty.org/i-want-to/get-a-mail-in-ballot-for-voting">Voter Registration</a>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <a href="https://www.mercercounty.org/departments/mercer-county-park-commission">Parks &amp; Recreation</a>
            <a href="https://www.mercercounty.org/visit/visit-mercer-county/historic-sites">Historic Sites</a>
            <a href="https://www.mercercounty.org/visit/visit-mercer-county/outdoors-trails">Outdoors &amp; Trails</a>
            <a href="https://www.mercercounty.org/community/community-life/library-system">Library System</a>
            <a href="https://www.mercercounty.org/departments/wildlife-center">Wildlife Center</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="https://www.mercercounty.org/departments/public-information/county-news/email-updates">Email Updates</a>
            <a href="https://www.mercercounty.org/i-want-to/register-for-emergency-notifications">Alert Mercer</a>
            <a href="https://www.mercercounty.org/departments/public-information/public-legal-notices">Legal Notices</a>
            <a href="https://www.mercercounty.org/i-want-to/file-an-opra-request">File an OPRA</a>
            <a href="https://www.mercercounty.org/departments/public-information/contact-us">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 County of Mercer, New Jersey. All Rights Reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
