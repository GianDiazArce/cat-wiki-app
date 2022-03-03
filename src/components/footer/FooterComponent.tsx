import "./footerStyles.css";
import { LogoSvg } from "../svg/LogoSvg";

export const FooterComponent = () => {
    return (
        <footer className="content footer">
            <figure>
                <LogoSvg color="white" />
            </figure>
            <div className="footer__copyright">
                &copy; created by{" "}
                <a
                    href="https://devchallenges.io/portfolio/GianDiazArce"
                    target="_blank"
                    rel="noreferrer"
                >
                    GianDiazArce
                </a>
                - devChallenge.io2022
            </div>
        </footer>
    );
};
