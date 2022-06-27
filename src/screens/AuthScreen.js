import PageLayout from "../common/PageLayout";
import Register from "../components/SignUp";

function AuthScreen() {
    return (
        <PageLayout>
            <div className="overflow-scroll h-full w-full">
                <Register/>
            </div>
        </PageLayout>
    );
}

export default AuthScreen;
