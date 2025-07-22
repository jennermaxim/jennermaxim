import "../styles/home.scss";
import Maxim from "../assets/jennermaxim.png";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="profile">
                    <img src={Maxim} alt="Jenner Maxim" />
                    <div className="about-me">
                        <h1>Hi, I&apos;m Jenner Maxim</h1>
                        <h1>
                            a <span></span>
                        </h1>
                        <div className="languages">
                            Skills: <span></span>
                        </div>
                        <p>
                            I&apos;m a passionate software developer with expertise in building
                            scalable, efficient, and user-friendly applications. With a deep
                            understanding of various programming languages and a knack for
                            solving complex problems, I strive to deliver high-quality
                            software solutions that meet and exceed client expectations.
                        </p>
                        <p>Feel free to explore my portfolio, learn more about my skills, and get in touch if you&apos;d like to collaborate on a project!</p>
                    </div>
                </div>
                <Skills />
            </div>
        </>
    );
};

export default Home;
