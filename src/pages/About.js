import styled from 'styled-components';
import aboutImg from '../img/about-me.jpeg';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;  
`;

const ContentContainer = styled.div`
    display: flex;
    margin-left: 250px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 0 1rem;  
    text-align: justify;
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;  
    img {
        width: 100%;
        max-width: 400px; 
    }

   
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

function About() {
    return (
        <AboutContainer>
            <br></br>
            <h1>SOBRE MÍ</h1>
            <ContentContainer>
                <TextContainer>
                    <p>Hi :)<br />
                        My name is Albert Arrayás and I'm an illustrator. I hope you enjoy my website. Have a nice day.</p>

                    <p>I was born in Barcelona, Spain (1990). I studied Fine Arts at the University of Barcelona and then
                        I did a course at The Women School (Escola de la Dona). I am still working as a professional illustrator.
                        I have 25 children's books published. For the moment, I have published in Spain, Portugal, Germany, China,
                        South Korea, and Brazil.</p>
                    <br></br>
                    <p>In 2014, I published 'The pirate of stars' in Spain. It was my first children's book as an author and illustrator. It has been published in Germany. In 2017, I published The Mystery of Chickentown in Spain by Babulinka Books, and it was my second book as an author and illustrator. I have just published my third book as an author and illustrator, A Thousand Hugs and a Sweet Nudge in Spain by Lumen.</p>
                    <br></br>
                    <p>I regularly collaborate with magazines and publishers all over Spain. Some other books I have published as an illustrator include:
                        - Mahatma Gandhi, 2019, Alba Editorial, Little People & Big Dreams, UK, USA, Spain, Portugal, Germany, and more.
                        - Om. The wild boy, Alba Editorial, 2016, Spain.
                        - Where's the moon? 2015, Akiara Books, Spain, Portugal, China & South Korea.</p>

                    <br></br>
                    <p>My work reflects a delicacy, beauty, and above all, a dream world, accompanied
                        by great details and textures. You can walk around in big places where nothing
                        else fits or enjoy the blank space that your mind fills with things.</p>


               
                </TextContainer>

                <ImageContainer>
                    <img src={aboutImg} alt="Albert Arrayás" />
                </ImageContainer>
            </ContentContainer>
        </AboutContainer>
    );
}

export default About;
