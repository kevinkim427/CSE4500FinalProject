import logo from './logo.svg';
import './App.css';
import React from "react";

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>William Wilkening (Billy)</p>
      </header>
      <body className="App-body">
        <section className="About Me">
          <div className="hbox">
            <h1>Education</h1>
          </div>                 
          <div className="box">
            <p>Hello and welcome to my second html project. This is my 6th year of college, 3 years at Mt. SAC 
            community college, and 3 years here in CSUSB. I'm a computer science student with a focus on Game design. 
            I've dabbled in html coding before for another class, but I feel like I didn't learn much. I hope to get a 
            better grasp of the necessary skills here. This is my 6th year in college, and hopefully my last. As for my 
            recent education, I've attended the following schools.</p>
          </div>
          <div id="schools">
            <div id="names">
                <ol>
                    <li>Covina Highschool</li>
                    <li>Mt.SAC</li>
                    <li>CSUSB</li>
                </ol>
            </div>
            <div id="logos">                
                <img style={{height: "150px"}} id="Covina" src="https://cdn.shopify.com/s/files/1/1030/6275/products/Covina_Colts_Logo_b22b877e-fbe8-44b3-b966-6250ac2f6eff.jpg?v=1631124968" alt="Covina High Logo" />
                <img style={{height:"150px"}} id="Mt.SAC" src="data:image/png;base64,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" alt="Mt. SAC Logo" />
                <img style={{height:"150px"}} id="CSUSB" src="https://www.sbsun.com/wp-content/uploads/2023/03/CSUSB-LOGO-1.png?w=267" alt="CSUSB Logo" />                
            </div>
          </div>
        </section>
        <section className="hobbies">
            <div className="hbox">
                <h1>Fun</h1>
            </div>
            <div className="box">
                <p>With my focus on Game design, you may have guessed that in my spare time I play games. 
                I play a wide range of games from fps, to puzzle games, but my personal favorite are 
                medieval fantasy RPGs. Some day, I hope to make a grand AAA adventure game that 
                people can explore and enjoy. For now, I get to enjoy them. The following are games 
                that I've been playing recently.</p>
            </div>
                <div id="games">
                    <div id="names">
                        <ul>
                            <li>The Witcher 3</li>
                            <li>Kingdom Come Deliverance</li>
                            <li>Baldurs Gate 3</li>
                            <li>For Honor</li>
                            <li>League of Legends</li>
                            <li>Civilization 6</li>
                        </ul>
                    </div>
                <div id="covers">
                    <div>
                        <img style={{height: "120px"}} id="Witcher3" src="https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1693590732" alt="Witcher"/>
                        <img style={{height: "120px"}} id="Kingdome" src="https://cdn1.epicgames.com/ca4058f18b0a4a9e9e2ccc28f7f33000/offer/EGS_WarhorseStudios_KingdomComeDeliverance_S3-1360x766-1e8502930c6282cb34acf7add01c6832a5bc217e.jpg" alt="Kingdom Come Deliverence"/>
                        <img style={{height: "120px"}} id="Baldurs" src="https://images.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610.jpg" alt="Baldur'sGate 3"/>
                    </div>
                    <div>
                        <img style={{height: "140px"}} id="For Honor" src="https://cdn1.epicgames.com/sundrop/offer/FH_STD_Capsule_V2-1920x1080-600f70a9c129d67934f6747c3c5195787aa2553f.jpg" alt="For Honor"/>
                        <img style={{height: "140px"}} id="League" src="https://gaming-cdn.com/images/products/9456/616x353/league-of-legends-pc-game-cover.jpg?v=1662363312" alt="League"/>
                        <img style={{height: "140px"}} id="Civ6" src="https://cdn.akamai.steamstatic.com/steam/apps/289070/capsule_616x353.jpg?t=1680898825" alt="Civilization 6"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="Personal">
            <div className="hbox">
                <h1>Personal Note</h1>
            </div>          
            <div className="box">
                <p>I suppose this as good of a place as any. Just to let you know I am a disabled student. 
                    I have a vision impairment that causes me to lose details at a distance. If you're 
                    really curious it's called Juvenile Macular Dystrophy, or the more commnon name BEST's disease
                    after the person who first identified it. Basically just a growing blind spot in the center 
                    of my vision. I won't likely require anything special, which is why there was no notification 
                    through the disabled student sytem. I'll just sit near the front as I usually do.</p>
            </div>
        </section>
        <section className="repo">
            <div className="hbox">
                <h1>My Github Repository</h1>
            </div>          
            <div className="box">   
                <p>This is a button that links to my Github Repository for the CSE4500 course at CSUSB</p>
                <a
                className="App-link"
                href="https://github.com/BWilkening/CSE-4500-classwork"
                target="_blank"
                rel="noopener noreferrer">
                <button>My Repo</button>
                </a>
            </div> 
        </section>
        <footer>
            <p>CSE4500 2024</p>
        </footer>
        </body>      
    </div>
  );
}
export default App;
