import PageLayout from "../common/PageLayout";

function AboutScreen() {
    return (
        <PageLayout>
            <div className="h-full w-full p-5 py-10 overflow-scroll flex flex-col items-center space-y-5">
                <h1 className="font-extrabold text-center text-4xl">
                    About Us
                </h1>
                <div className="text-md space-y-4 px-4">
                    <p>
                        Chandigarh Industrial Area is located on the South –
                        Eastern side of the city. Proximity to the Railway
                        Station and the National Highway also prevents the
                        movement of heavy vehicles within the city.
                    </p>
                    <p>
                        Industrial Area has been developed over 1200 acres in
                        two phases, the Phase – I has an area of 776.14 acres
                        and Phase – II has an area of 486 acres. While Phase – I
                        and Phase – II are fully developed, Phase – III with an
                        area of 153 acres is yet to be developed.
                    </p>
                    <p>
                        A total of 1966 plots have been planned in Phase I and
                        Phase II. Smaller plots in the area ranging from 5 marla
                        to 1 kanal constitute maximum number of plots in Phase I
                        whereas in Phase II there are all small Industrial plots
                        and with no large Industry.
                    </p>
                </div>

                <img
                    src="https://download.masterplansindia.com/maps/chandigarh/chandigarh-industrial-area-location-map.jpg"
                    alt=""
                />
            </div>
        </PageLayout>
    );
}

export default AboutScreen;
