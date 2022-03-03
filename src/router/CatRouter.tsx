import { useState } from "react";
import {
    BrowserRouter,
    Link,
    Outlet,
    Route,
    Routes,
    useOutletContext,
} from "react-router-dom";
import { FooterComponent } from "../components/footer/FooterComponent";
import { BreedDetailPage } from "../pages/BreedDetailPage";
import { HomePage } from "../pages/HomePage";
import { LogoSvg } from "../components/svg/LogoSvg";
import { TopBreedPage } from "../pages/TopBreedPage";
import { LoadingComponent } from "../components/custom/loading/LoadingComponent";

type ContextType = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CatRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="breed/:breedName"
                        element={<BreedDetailPage />}
                    />
                    <Route path="/top" element={<TopBreedPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Layout = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="container router">
            <Link to="/">
                <LogoSvg />
            </Link>
            <Outlet context={{ isLoading, setIsLoading }} />
            <FooterComponent />
            <LoadingComponent isLoading={isLoading} />
        </div>
    );
};

export const useLoading = () => {
    return useOutletContext<ContextType>();
};
