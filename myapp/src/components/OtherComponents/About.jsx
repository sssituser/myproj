import React from 'react';
import MessageCard from './MessageCard';
 
const About = () => {
    return (
        <React.Fragment>
            <div className="container">
                <p className="h1 text-warning text-center">About</p>
                <MessageCard name="Anupama" age="33" contact="99999999"
                designation="Actress"
                imageUrl="https://www.gethucinema.com/wp-content/uploads/2022/01/AnupamaParameswaran-625.jpg"
                address="Kerala"
               />
                <MessageCard name="Ram.P" age="35" contact="88888888"
                designation="Actor"
                imageUrl="https://tse2.mm.bing.net/th/id/OIP.wC89sDCgVt21DKcbeZz7jwHaLH?cb=12&w=1400&h=2100&rs=1&pid=ImgDetMain&o=7&rm=3"
                address="Andhra Prades"
               />

                <MessageCard name="Prabhas" age="42" contact="777777"
                designation="Actor"
                imageUrl="https://tse1.mm.bing.net/th/id/OIP.vNLZfGL62JEL2Xd5wIxRLwAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                address="Andhra Pradesh"
               />

            </div>
        </React.Fragment>
    );
}
export default About;