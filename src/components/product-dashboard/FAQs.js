import React, { useEffect } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './css/FAQs.css';

export default function App(props) {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .accordion button:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section className="faq-block">
      <div className="faq-block-inner">
        <h2 className="head-block-center">FAQ</h2>
        <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
          <MDBAccordion>
          {props.FAQs.map((faq, index) => (
                      // <li key={index}>{highlights}</li>
                     
            <MDBAccordionItem key={index} className="FAQ__item custom-accordion-item" collapseId={index+1} headerTitle={faq.question}>
              {faq.answer}
            </MDBAccordionItem>
            
          ))}
          </MDBAccordion>
        </MDBContainer>
      </div>
    </section>
  );
}