import './Netpage.css'
import Header from './Header'
import Netflix from './Netflix'
import NetflixFooter from './NetflixFooter'

export default function Netpage(){
    return(
        <div className="container-fluid">
            <div className="box">
                <Header />
                <section className="text-center align-items-center mt-10">
                    <main>
                        <Netflix />
                    </main>
                </section>
                <NetflixFooter/>
            </div>

        </div>
    )
}