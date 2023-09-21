import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  padding: 1rem;


  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmailLink = styled.a`
&& {
  color: #007BFF;  
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function ContactMe() {
  return (
    <ContactContainer>
      <ContactTitle>Para contrataciones de proyectos en España:</ContactTitle>
            <p>Puedes contactar conmigo en el teléfono 659 34 33 29</p>
            
            <p>También puedes enviar un mail a:</p>
            <EmailLink href="mailto:a.arrayas@gmail.com">a.arrayas@gmail.com</EmailLink>

            <br></br>

            <ContactTitle>Para contrataciones de proyectos fuera de España:</ContactTitle>


            <p>CONTACT FOR ILLUSTRATION WORK</p>

            <p>I represented by Lilla Rogers Studio (LRS)</p>

            <p>For illustration work please contact my agents at Lilla Rogers Studio</p>
            <p>Please, send a mail to:</p>


            <EmailLink href="mailto:info@lillarogers.com">info@lillarogers.com</EmailLink>


        </ContactContainer>
    );
}

export default ContactMe;
