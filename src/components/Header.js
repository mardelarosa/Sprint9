import styled from 'styled-components';
import header from '../img/header.jpeg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;    
  padding: 1rem 2rem;
  background-image: url(${header}); 
  background-size: cover;           
  background-repeat: no-repeat;     
  background-position: center;      
  height: 300px;                    
  color: white;                     
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>La Madriguera Arrayas by Albert Arrayás</h1>
    </HeaderContainer>
  );
}

export default Header;
