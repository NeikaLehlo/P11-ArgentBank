import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Feature from "../../components/feature/Feature"
import Footer from "../../components/footer/Footer"
import chat from "../../assets/img/icon-chat.webp"
import money from "../../assets/img/icon-money.webp"
import security from "../../assets/img/icon-security.webp"
import "../../main.scss"

function Home() {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature 
                        img={chat}
                        alt="chat icon"
                        title="You are our #1 priority"
                        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes"
                    />
                    <Feature 
                        img={money}
                        alt="money icon"
                        title="More savings means higher rates"
                        text="The more you save with us, the higher your interest rate will be!"
                    />
                    <Feature 
                        img={security}
                        alt="security icon"
                        title="Security you can trust"
                        text="We use top of the line encryption to make sure your data and money is always safe"
                    />
                </section>
            </main>
            <Footer />
        </div>   
    )
}
export default Home;