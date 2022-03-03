import { ArrowRight } from "../svg/ArrowRight";
import "./mainSection.css";

export const MainSectionComponent = () => {
    return (
        <section className="section content">
            <div className="section__texts">
                <h2 className="title">Why should you have a cat?</h2>
                <p className="paragraph">
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body wich lower your stress and
                    axiety leves
                </p>

                <span>
                    READ MORE <ArrowRight />
                </span>
            </div>
            <div className="section__images">
                <div className="section__left">
                    <figure className="section__img1">
                        <img src="/assets/images/image 2.png" alt="" />
                    </figure>
                    <figure className="section__img2">
                        <img src="/assets/images/image 1.png" alt="" />
                    </figure>
                </div>
                <div className="section__right">
                    <figure className="section__img3">
                        <img src="/assets/images/image 3.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};
