import './catalogue.css';
import './contact.css'

export default function Contact() {
    return (
        <div>
            <div id="contact" className="catalogue">
                <h3>Contact</h3>
            </div>
            <div className="container">
                <div className='contain'>
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">Surkhet, NP12</div>
                                <div className="text-two">Birendranagar 06</div>
                            </div>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+0098 9893 5647</div>
                                <div className="text-two">+0096 3434 5678</div>
                            </div>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">codinglab@gmail.com</div>
                                <div className="text-two">info.codinglab@gmail.com</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Send us a message</div>
                            <p>Leave us a message or if you have any other inquiries you can send an email</p>
                            <form action="#">
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div className="input-box message-box">

                                </div>
                                <button className="btn btn-primary btn-lg"> Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}