import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileContract,
  faHandshake,
  faCopyright,
  faBan,
  faPrint,
  faDollarSign,
  faPlay,
  faExclamationCircle,
  faUserLock,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Terms.css";

const Terms = () => {
  return (
    <div>
      <header className="terms-header">
        <h1 className="terms-main-title terms">
          <FontAwesomeIcon icon={faFileContract} className="fas"/> Terms and Conditions
        </h1>
      </header>
      <div className="terms-container">
        <h2 className="terms-subtitle">
          <FontAwesomeIcon icon={faHandshake} className="fas"/> Welcome to Our Website
        </h2>
        <p className="terms-text terms-fade-in">
          These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use the site if you do not agree to all the terms and conditions stated here.
        </p>

        <h2 className="terms-subtitle">
          <FontAwesomeIcon icon={faCopyright} className="fas"/> License
        </h2>
        <p className="terms-text terms-fade-in">
          Unless otherwise stated, we or our licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from the website for your personal use, subject to restrictions set in these terms and conditions.
        </p>

        <h2 className="terms-subtitle">
          <FontAwesomeIcon icon={faBan} className="fas"/> Restrictions
        </h2>
        <p className="terms-text terms-fade-in">You are specifically restricted from all of the following:</p>
        <ul className="terms-list terms-fade-in">
          <li className="terms-item">
            <FontAwesomeIcon icon={faPrint} className="fas"/> Publishing any website material in any other media
          </li>
          <li className="terms-item">
            <FontAwesomeIcon icon={faDollarSign} className="fas"/> Selling, sublicensing, and/or otherwise commercializing any website material
          </li>
          <li className="terms-item">
            <FontAwesomeIcon icon={faPlay} className="fas"/> Publicly performing and/or showing any website material
          </li>
          <li className="terms-item">
            <FontAwesomeIcon icon={faExclamationCircle} className="fas"/> Using this website in any way that is or may be damaging to this website
          </li>
          <li className="terms-item">
            <FontAwesomeIcon icon={faUserLock} className="fas"/> Using this website in any way that impacts user access to this website
          </li>
        </ul>

        <h2 className="terms-subtitle">
          <FontAwesomeIcon icon={faExclamationTriangle} className="fas"/> Disclaimer
        </h2>
        <p className="terms-text terms-fade-in">
          The information on this website is provided &quot;as is,&quot; with no guarantees of completeness, accuracy, or timeliness. We will not be held liable for any issues arising from the use of the website.
        </p>

        <h2 className="terms-subtitle">Interpretation and Definitions</h2>
        <h3 className="terms-subheader">Interpretation</h3>
        <p className="terms-text">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h2 className="terms-subtitle">Acknowledgment</h2>
        <p className="terms-text">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p className="terms-text">
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p className="terms-text">
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>
        <p className="terms-text">
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        </p>
        <p className="terms-text">
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </p>

        <h2 className="terms-subtitle">Links to Other Websites</h2>
        <p className="terms-text">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </p>
        <p className="terms-text">
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
        <p className="terms-text">
          We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
        </p>

        <h2 className="terms-subtitle">Termination</h2>
        <p className="terms-text">
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p className="terms-text">Upon termination, Your right to use the Service will cease immediately.</p>

        <h2 className="terms-subtitle">Limitation of Liability</h2>
        <p className="terms-text">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
        </p>

        <h2 className="terms-subtitle">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
        <p className="terms-text">
          The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.
        </p>
      </div>
    </div>
  );
};

export default Terms;
