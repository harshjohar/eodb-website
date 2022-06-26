import PageLayout from "../common/PageLayout";
import Carousel from "../components/Carousel";

function HomeScreen() {
    return (
        <PageLayout>
            <div className="h-full w-full overflow-scroll bg-red-100">
                <div className="my-10 h-5/6 w-full">
                    <Carousel />
                </div>
            </div>
        </PageLayout>
    );
}

export default HomeScreen;
