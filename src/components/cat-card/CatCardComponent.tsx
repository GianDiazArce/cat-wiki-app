import { useNavigate } from "react-router-dom";
import { Breed } from "../../interfaces/interfaces";
import "./catCardStyles.css";

interface Props {
    breed: Breed;
    first?: boolean;
}

export const CatCardComponent = ({ breed, first }: Props) => {
    const navigation = useNavigate();

    const handleCatcardClick = () => {
        navigation(`/breed/${breed.name.toLowerCase()}`);
    };
    if (breed) {
        return (
            <div className="card" onClick={handleCatcardClick}>
                <div className="card__container">
                    <figure
                        className={`card__image ${
                            first ? "card__image--first" : null
                        }`}
                        style={{
                            backgroundImage: `url(${
                                breed.image?.url && breed.image.url
                            })`,
                        }}
                    />
                    <h2 className="card__title">{breed.name}</h2>
                </div>
            </div>
        );
    } else {
        return <div>error</div>;
    }
};
