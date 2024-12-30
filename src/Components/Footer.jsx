import React, { useState } from 'react';

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [activeContent, setActiveContent] = useState(''); // State to manage which content is active

  const handleOpenModal = (contentType) => {
    setActiveContent(contentType);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveContent('');
  };
  

  return (
    <div>
      <footer className="footer footer-center bg-gray-400 text-black rounded p-10 mt-[70rem] sm:mt-[30rem]">
        <aside>
          <b>
            <p className="text-[black]">
              These Services are for Pennsylvania, Ohio, and Florida residents only
            </p>
          </b>
        </aside>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/">
            Home
          </a>
          <a
            className="link link-hover"
            href="https://www.optimantra.com/optimus/om/patient/login?accessPoint=UzBCcVd2WTZiRnNsUkpCOWQ4ZU1udz09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patient Portal
          </a>
          <a className="link link-hover" href="/contact">
            Contact
          </a>
          <a className="link link-hover" href="/about">
            About Us
          </a>
        </nav>

        <aside>
          <p className="text-decoration-line:none">Phone: 813-499-9090</p>
          <p className="text-decoration-line:none">Fax: 800-499-5068</p>
          <p className="text-decoration-line:none">Gmail: simrikmed@gmail.com</p>
          <p>Copyright © <span className='text-[red]'>SimrikMed LLC</span> 2024 - All rights reserved</p>
          <div className="mt-2">
            <button
              onClick={() => handleOpenModal('terms')}
              className=" underline"
            >
              Terms and Conditions</button>
            {' | '}
            <button
              onClick={() => handleOpenModal('privacy')}
              className=" underline"
            >
              Privacy Policy
            </button>
            {' | '}
            <button onClick={() => handleOpenModal('hipaa')} className="underline">
              HIPAA Privacy Notice
            </button>
          </div>
        </aside>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl overflow-y-auto max-h-[80vh] relative">
            {/* Cross Button to Close Modal */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4  text-2xl text-[black] font-bold"
            >
              &times;
            </button>

            {/* Modal Content */}
            {activeContent === 'terms' && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-2 text-[black]">Terms & Conditions</h2>
                  <div className="text-left p-4 text-[black]">
      <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>

      <p className="mb-4">
        This SIMRIKMED LLC Website is offered to you under the condition that you accept, without modification, the terms, conditions, and notices contained herein. Your use of this SIMRIKMED LLC Website constitutes your agreement to all such terms, conditions, and notices.
      </p>

      <p className="mb-4">
        <b>Modification of These Terms of Use</b><br />
        SIMRIKMED LLC reserves the right to change the terms, conditions, and notices under which this website is offered, including, but not limited to, the charges associated with the use of this website.
      </p>

      <p className="mb-4">
        <b>Links to Third-Party Sites</b><br />
        The SIMRIKMED LLC Website may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of SIMRIKMED LLC and SIMRIKMED LLC is not responsible for the content of any Linked Site, including any link contained in a Linked Site or any updates to a Linked Site. SIMRIKMED LLC provides these links as a convenience, and the inclusion of any link does not imply endorsement by SIMRIKMED LLC of the site or any association with its operators.
      </p>
      <p></p>

      <p className="mb-4">
        <b>No Unlawful or Prohibited Use</b><br />
        As a condition of your use of this website, you warrant to SIMRIKMED LLC that you will not use the SIMRIKMED LLC Website for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this website in any manner that could damage, disable, overburden, or impair the site or interfere with any other party’s use and enjoyment of the site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided through the SIMRIKMED LLC website.
      </p>

      <p className="mb-4">
        <b>Use of Communication Services</b><br />
        The SIMRIKMED LLC website may contain communication services designed to enable you to communicate with the public or with a group (collectively, "Communication Services"). By using these services, you agree to use the Communication Services only to post, send, and receive messages and materials that are proper and related to the particular Communication Service through two-way secure texting and through the HIPAA-compliant patient portal. You agree to receive SMS updates with onboarding and customer service information from SIMRIKMED LLC to the number provided.
      </p>

      <p className="mb-4">
        For example, and not as a limitation, you agree that when using a Communication Service, you will not:
        <ul className="list-disc ml-5 mt-2">
          <li>Defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights of others.</li>
          <li>Publish, post, upload, distribute, or disseminate any inappropriate, defamatory, or unlawful material or information.</li>
          <li>Upload files that contain viruses, corrupted files, or any other similar software that may damage another’s computer.</li>
          <li>Advertise or offer to sell or buy any goods or services unless allowed by the Communication Service.</li>
          <li>Conduct or forward surveys, contests, pyramid schemes, or chain letters.</li>
          <li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li>
          <li>Harvest or collect information about others, including email addresses, without consent.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>
      </p>

      <p className="mb-4">
        SIMRIKMED LLC has no obligation to monitor the Communication Services. However, SIMRIKMED LLC reserves the right to review materials posted and to remove any materials at its discretion. SIMRIKMED LLC reserves the right to terminate your access to any or all of the Communication Services at any time, without notice, for any reason.
      </p>

      <p className="mb-4">
        <b>Liability Disclaimer</b><br />
        The information, software, products, and services included in or available through the SIMRIKMED LLC Website may include inaccuracies or typographical errors. Changes are periodically added to the information. SIMRIKMED LLC and/or its suppliers may make improvements or changes to the website at any time.
      </p>

      <p className="mb-4">
        SIMRIKMED LLC</p>
          <p className="mb-4">
    To the maximum extent permitted by law, in no event shall SIMRIKMED LLC and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages, or any damages whatsoever, including without limitation, damages for loss of use, data, or profits, arising out of or in any way connected with the use or performance of this website.
  </p>

  <p className="mb-4">
    <b>Copyright and Trademark Notices</b><br />
    All contents of this website are Copyright © 2024 SIMRIKMED LLC. All rights reserved. All logos are trademarks and service marks of SIMRIKMED LLC. All other trademarks, service marks, and logos used in this website are the property of their respective owners.
  </p>

  <p className="mb-4">
    <b>Trademarks</b><br />
    The names of actual companies and products mentioned herein may be the trademarks of their respective owners. Any association with any real company, organization, product, person, or event is not intended or should be inferred.
  </p>

  <p className="mb-4">
    <b>Notices</b><br />
    For inquiries, contact us by phone at +1 (813) 499-9090 or via email at simrikmed@gmail.com.
  </p>

  <p className="mb-4">
    SIMRIKMED LLC<br />
    Virtual Urgent Care & Weight Loss Clinic<br />
    Call: (813)-499-9090<br />
    Fax: (800)-499-5068<br />
    Email: simrikmed@gmail.com
  </p>

  <p className="mb-4">
    © 2024 SIMRIKMED LLC. Terms & Conditions
  </p>
</div>

                  
              </div>
            )}

            {activeContent === 'privacy' && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-2 text-[black]">Privacy Policy</h2>
                <p>
                  <b className='text-[black]'>Privacy Statement</b><br />
                  <div className="text-left p-4 text-[black]">
      <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
      
      <p className="mb-4">
        <b>Privacy Statement</b><br />
        SIMRIKMED LLC is dedicated to protecting your privacy and providing a secure online experience. This Privacy Statement applies to the SIMRIKMED LLC website and explains data collection and usage practices. By using this site, you agree to the practices outlined below.
      </p>

      <p className="mb-4">
        <b>Collection of Personal Information</b><br />
        SIMRIKMED LLC may collect personal information such as your name, email address, mailing address, and phone number, along with demographic data like ZIP code, age, gender, preferences, and interests. Information about your device, including IP address, browser type, domain names, access times, and referring websites, is automatically collected to support functionality, maintain quality, and analyze site use.
      </p>
      <p className="mb-4">
        Please exercise caution when sharing personal or sensitive information on public message boards, as it may be collected and used by others. SIMRIKMED LLC advises reviewing privacy policies on any linked sites to understand their data practices, as we are not responsible for the privacy practices or content on other websites.
      </p>

      <p className="mb-4">
        <b>Use of Personal Information</b><br />
        SIMRIKMED LLC uses your personal information to operate the website and deliver requested services. We may also use your information to notify you of additional SIMRIKMED LLC services, products, or research opportunities through secure, end-to-end encrypted two-way texting services.SMS opt-in or phone numbers for the purpose of SMS are not shared with any third parties or affiliate companies for marketing purposes. SIMRIKMED LLC does not charge for texting services, but your service carrier may apply messaging and data rates. Please contact your SMS service provider for more details.
      </p>
      <p className="mb-4">
        SIMRIKMED LLC does not sell, rent, or lease customer lists to third parties. Data may be shared with trusted partners who assist with statistical analysis, communication, customer support, or deliveries. All third parties must maintain confidentiality and use your data only for service purposes. Sensitive information like race, religion, or political affiliation is not disclosed without explicit consent.
      </p>
      <p className="mb-4">
        Personal information may be disclosed without notice only if required by law.
      </p>

      <p className="mb-4">
        <b>Use of Cookies</b><br />
        The SIMRIMED LLC website uses cookies to personalize and enhance your experience. Cookies are small text files placed on your device that help improve site functionality. Cookies are secure, cannot run programs or deliver viruses, and are accessible only by the server that issued them.
      </p>

      <p className="mb-4">
        <b>Security of Personal Information</b><br />
        SIMRIKMED LLC protects your information against unauthorized access, use, or disclosure. Personal information is stored on secure servers. When transmitting sensitive data (e.g., credit card numbers), we use encryption, such as Secure Socket Layer (SSL), for enhanced protection.
      </p>

      <p className="mb-4">
        <b>Changes to this Privacy Statement</b><br />
        SIMRIKMED LLC may update this Privacy Statement periodically to reflect feedback or service changes. We encourage reviewing this page regularly to stay informed on how we protect your information.
      </p>

      <p className="mb-4">
        <b>Contact Information</b><br />
        For inquiries, contact us by phone at +1 (813) 499-9090 or via email at simrikmed@gmail.com.
      </p>

      <p className="mb-4">
        SIMRIKMED LLC<br />
        Virtual Urgent Care & Weight Loss Clinic<br />
        Call: (813)-499-9090<br />
        Fax: (813)-499-5068<br />
        Email: simrikmed@gmail.com
      </p>

      <p className="mb-4">
        © 2024 SIMRIKMED LLC / Privacy Policy | Terms & Conditions / HIPAA Privacy Notice
      </p>
    </div>
                </p>
                <p className="mt-4 text-[black]">
                  <b>Collection of Personal Information</b><br />
                  SIMRIKMED LLC may collect personal information such as your name, email address, mailing address, and phone number, along with demographic data like ZIP code, age, gender, preferences, and interests. Information about your device, including IP address, browser type, domain names, access times, and referring websites, is automatically collected to support functionality, maintain quality, and analyze site use.
                </p>
                {/* Include the rest of your Privacy Policy content here */}
              </div>
            )}
            {activeContent === 'hipaa' && (
              <div className="text-left text-black">
                <h2 className="text-xl font-bold mb-2">HIPPA Privacy Policy</h2>
                 <div className="text-left p-4">
      <h2 className="text-xl font-bold mb-4">HIPAA Privacy Notice</h2>
      <p className="mb-4">Last Revised: October 2024</p>

      <h3 className="font-bold mb-2">Notice of Privacy Practices</h3>
      <p className="mb-4">
        This Notice is provided to you pursuant to the privacy regulations enacted under the Health Insurance Portability and Accountability Act of 1996 (HIPAA). THIS NOTICE OF PRIVACY PRACTICES DESCRIBES HOW YOUR MEDICAL INFORMATION MAY BE USED AND DISCLOSED AND HOW YOU CAN ACCESS YOUR INFORMATION. This Notice applies to all your medical information created or maintained by SIMRIKMED LLC. PLEASE REVIEW THIS NOTICE CAREFULLY.
      </p>

      <h3 className="font-bold mb-2">A. Our Commitment to Your Privacy</h3>
      <p className="mb-4">
        The terms of this Notice apply to all of your Protected Health Information (PHI) created or maintained by SIMRIKMED LLC. We reserve the right to change this Notice at any time, and any changes will be effective for all existing PHI as well as any future PHI we collect. SIMRIKMED LLC will post the latest version of this Notice on our website. You may request a copy of our most current Notice at any time by contacting SIMRIKMED’s Privacy Officer (see Section J below).
      </p>
      <p className="mb-4">
        This Notice of Privacy Practices is not an authorization; rather, it explains how SIMRIKMED LLC, our business associates, and subcontractors may use and disclose your PHI for treatment, payment, healthcare operations, and other purposes as allowed or required by law. It also describes your rights to access and control your PHI.
      </p>
      <p className="mb-4">
        "Protected Health Information" (PHI) refers to any information that individually identifies you, including demographic data and information about your past, present, or future physical or mental health condition and related healthcare services.
      </p>

      <h3 className="font-bold mb-2">B. Persons/Entities Covered by This Notice</h3>
      <p className="mb-4">
        Your provider is part of a coordinated care network organized by SIMRIKMED LLC. As part of this structure, SIMRIKMED LLC follows the HIPAA requirements for sharing information across affiliated providers and service arrangements for coordinated treatment, payment, and healthcare operations. Your PHI may be shared within this network to improve the quality and efficiency of your care.
      </p>

      <h3 className="font-bold mb-2">C. Contact for Questions</h3>
      <p className="mb-4">
        For more information or questions about SIMRIKMED LLC’s privacy practices, please contact:
      </p>
      <p className="mb-4">
        Privacy Officer<br />
        SIMRIKMED LLC<br />
        +1 (813) 499-9090<br />
        Email: simrikmed@gmail.com
      </p>

      <h3 className="font-bold mb-2">D. Use and Disclosure of Your PHI</h3>
      <p className="mb-4">
        1. <b>Treatment</b> - SIMRIKMED LLC may use or disclose your PHI to provide medical treatment or services for you, manage your care, and coordinate with other providers. For example, we may share your information with specialists, pharmacies, hospitals, or home health providers to ensure that all necessary information is available for your treatment.
      </p>
      <p className="mb-4">
        2. <b>Payment</b> - SIMRIKMED LLC may use and disclose your PHI to bill for the healthcare services you receive and collect payment from health plans or other entities. For example, we may share your PHI with your health insurance provider to verify coverage or obtain payment.
      </p>
      <p className="mb-4">
        3. <b>Healthcare Operations</b> - We may use and disclose your PHI to improve the quality and efficiency of our operations, including activities such as quality assessment, staff training, licensing, auditing, and customer service. We may also use de-identified information for certain operational activities.
      </p>
      <p className="mb-4">
        4. <b>Appointment Reminders and Results</b> - We may use or disclose your PHI to remind you of upcoming appointments or provide you with test results. Messages will contain only the minimum necessary information to maintain your privacy.
      </p>
      <p className="mb-4">
        5. <b>Treatment Options and Health-Related Benefits</b> - We may use and disclose your PHI to inform you about treatment options or health-related services that may be of interest to you.
      </p>
      <p className="mb-4">
        6. <b>Disclosures to Family or Friends</b> - We may disclose your PHI to family members or friends involved in your care, if you are incapacitated or in an emergency situation, and to the extent necessary to assist with your care.
      </p>
      <p className="mb-4">
        7. <b>Disclosures Required by Law</b> - SIMRIKMED LLC will use and disclose your PHI as required by federal, state, or local laws, such as for public health reporting or compliance with legal obligations.
      </p>

      <h3 className="font-bold mb-2">E. Special Circumstances for Use and Disclosure of PHI</h3>
      <p className="mb-4">
        SIMRIKMED LLC may also use or disclose your PHI in the following situations:
      </p>
      <p className="mb-4">
        1. <b>Public Health Reporting</b> - We may disclose your PHI to authorities for public health activities, such as reporting diseases or adverse reactions to medications.
      </p>
      {/* Continue with the rest of the sections, using similar formatting */}
      <p className="mb-4">
        © 2024 SIMRIKMED LLC. All rights reserved.
      </p>
    </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
