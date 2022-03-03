import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCatWiki } from "../api/catApi";
import {
    Breed,
    BreedByNameResp,
    Image,
    ImagesRespByID,
} from "../interfaces/interfaces";
import "../css/detailPage.css";
import { ScoreComponent } from "../components/score/index";
import { useLoading } from "../router/CatRouter";
import { ILabelAndData } from "../interfaces/interfaces";

export const BreedDetailPage = () => {
    const { breedName } = useParams();
    const [breed, setBreed] = useState<Breed>();
    const [imageUrl, setimageUrl] = useState("");
    const [images, setImages] = useState<Image[]>([]);
    const { setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true);
        apiCatWiki
            .get<BreedByNameResp>(
                `https://api-wiki-cat.herokuapp.com/api/cats/${breedName}`
            )
            .then(
                (response) => {
                    setBreed(response.data.breed[0]);
                    setimageUrl(response.data.image.url);
                    apiCatWiki
                        .get<ImagesRespByID>(
                            `https://api-wiki-cat.herokuapp.com/api/cats/images/${response.data.breed[0].id}`
                        )
                        .then((resp) => {
                            setImages(resp.data.images);
                            setIsLoading(false);
                        });
                },
                (err) => {
                    console.log(err);
                }
            );
    }, [breedName]);

    return (
        <div className="detailsContainer">
            {breed && (
                <>
                    <main className="breedDetail">
                        <div className="detail__photo">
                            <figure className="detail__img card__image--first">
                                <img src={imageUrl} alt={breedName} />
                            </figure>
                        </div>
                        <div className="detail__texts">
                            <h2 className="detail__title">{breed.name}</h2>
                            <p className="paragraph">{breed.description}</p>
                            <LabelAndData
                                label="Temperament"
                                data={breed.temperament}
                            />
                            <LabelAndData label="Origin" data={breed.origin} />
                            <LabelAndData
                                label="Life Span"
                                data={breed.life_span}
                            />
                            <LabelAndData
                                label="Adaptability"
                                data={breed.adaptability}
                                score
                            />
                            <LabelAndData
                                label="Affection level"
                                data={breed.affection_level}
                                score
                            />
                            <LabelAndData
                                label="Child Friendly"
                                data={breed.child_friendly}
                                score
                            />
                            <LabelAndData
                                label="Grooming"
                                data={breed.grooming}
                                score
                            />
                            <LabelAndData
                                label="Intelligence"
                                data={breed.intelligence}
                                score
                            />
                            <LabelAndData
                                label="Health issues"
                                data={breed.health_issues}
                                score
                            />
                            <LabelAndData
                                label="Social needs"
                                data={breed.social_needs}
                                score
                            />
                            <LabelAndData
                                label="Stranger friendly"
                                data={breed.stranger_friendly}
                                score
                            />
                        </div>
                    </main>
                    <div className="detail__photos">
                        <h2>Other Photos</h2>
                        <div className="breedGallery">
                            {images.map((image) => (
                                <figure key={image.id}>
                                    <img
                                        src={image.url}
                                        alt={"cat" + image.id}
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const LabelAndData = ({ data, label, score }: ILabelAndData) => {
    return (
        <div
            className="labelAndData"
            style={{ justifyContent: score ? "space-between" : "flex-start" }}
        >
            <p className="paragraph detail__label">{label}: </p>
            {score ? (
                <ScoreComponent number={data as any} />
            ) : (
                <span className="paragraph">{data}</span>
            )}
        </div>
    );
};
