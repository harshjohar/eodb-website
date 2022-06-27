import PageLayout from "../common/PageLayout";
import {  FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
function ContactScreen() {
    return (
        <PageLayout>
            <div className="h-full w-full flex flex-col items-center">
                <h1 className="font-extrabold text-center text-4xl">
                    Contact Us
                </h1>
                <p className="font-bold">Director Industries/ General Manager- DIC:</p>
                <p>(10 am to 5pm on all working day)</p>
                <div className="flex shadow-sm w-full justify-evenly">
                    <div className="flex flex-col items-center justify-start py-10">
                        <FaLocationArrow/>
                        <h2>Address</h2>
                        <p>Plot No. 39, Industrial Area Phase-II, <br/> UT Chandigarh.</p>
                    </div>
                    <div className="flex flex-col items-center justify-start py-10">
                        <FaPhone />
                        <h2>Helpline no.</h2>
                        <a href="tel:+911722679006">+91 172 267 9007</a>
                    </div>
                    <div className="flex flex-col items-center justify-start py-10">
                        <FaEnvelope />
                        <h2>Email</h2>
                        <a href="mailto:deskoffeodb@chd.nic.in">deskoffeodb@chd.nic.in</a>
                        <a href="mailto:dimsmeutchd@gmail.com">dimsmeutchd@gmail.com</a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5769.670109962928!2d76.78323194115642!3d30.69966170446221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%2039%20Industrial%20Area%20Phase-II%20UT%20Chandigarh!5e0!3m2!1sen!2sin!4v1596916904284!5m2!1sen!2sin"
                    frameborder="0"
                    title="map"
                    height={"300px"}
                    width="80%"
                ></iframe>
            </div>
        </PageLayout>
    );
}

export default ContactScreen;
