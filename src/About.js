const About = () => {
    return (
        <div className="home-about">
            <h3>About Aerie</h3>
            <hr />
            <p>Aerie is Illustria's next generation of Personal Digital Assistant (PDA) devices, created to improve upon Hestia and to be its worthy successor. 
                It uses a brand-new framework that revolutionizes the way your personal data is stored with lightning-fast retrieval of documents, 
                truly permanent storage and a shockingly refreshing look that is sure to impress your co-workers and friends. </p>
            <p>This device is identified as the [ <b>Aerie Corporate</b> ] variant of the main series. It is intended for use by large corporations that need help moving 
                around large amounts of data on the individual level.</p>
            <p className="p-preserved">This Aerie device is currently using SFW version 1.0. </p>
            <hr />
            <div className="links">
                <p className="p-nomargin">Created by Yuun.</p> <a href="https://github.com/Yawnies" target="_blank" rel="noreferrer">🡺 GitHub</a> <a href="https://twitter.com/yawnizu" target="_blank" rel="noreferrer">🡺 Twitter</a>
            </div>
        </div>
    );
}
 
export default About;