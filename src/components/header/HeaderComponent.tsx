import { Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import { CatCardComponent } from "../cat-card/CatCardComponent";
import { ArrowRight } from "../svg/ArrowRight";
import { LogoSvg } from "../svg/LogoSvg";
import { apiCatWiki } from "../../api/catApi";
import {
    Breed,
    CatResponseWithLimitsAndPage,
    BreedsResponse,
} from "../../interfaces/interfaces";
import { CustomInput } from "../custom/input/CustomInput";
import { useNavigate } from "react-router-dom";

import "./headerStyles.css";

interface cboOption {
    id: string | number;
    label: string;
}

export const HeaderComponent = () => {
    const [breedsTop, setBreedsTop] = useState<Breed[]>([]);
    const [breedOptions, setBreedOptions] = useState<cboOption[]>([]);
    const [breedSelected, setBreedSelected] = useState<cboOption>({
        id: "",
        label: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        apiCatWiki
            .get<CatResponseWithLimitsAndPage>(
                `https://api-wiki-cat.herokuapp.com/api/cats?limit=4&page=1`
            )
            .then((resp) => setBreedsTop(resp.data.breeds))
            .catch(console.log);
        apiCatWiki
            .get<BreedsResponse>(`https://api-wiki-cat.herokuapp.com/api/cats`)
            .then((resp) => {
                let cboBreedsOpts: cboOption[] = [];
                resp.data.breeds.map((breed) => {
                    cboBreedsOpts.push({ id: breed.id, label: breed.name });
                    return breed;
                });
                setBreedOptions(cboBreedsOpts);
            })
            .catch(console.log);
    }, []);
    const handleSearch = () => {
        if (breedSelected.label.length > 1) {
            navigate(`/breed/${breedSelected.label.toLowerCase()}`);
        }
    };

    return (
        <header className="header">
            <div className="header__cards">
                <div className="header__card header__card1 content">
                    <div className="header__texts">
                        <LogoSvg color="white" height={190} width={80} />
                        <p>Get to know more about your cat breed</p>
                        {breedOptions.length > 1 ? (
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={breedOptions}
                                onChange={(event, value) => {
                                    if (value) {
                                        setBreedSelected(value);
                                    }
                                }}
                                isOptionEqualToValue={(option, value) =>
                                    option.label === value.label
                                }
                                sx={{ width: 300 }}
                                componentsProps={{
                                    paper: {
                                        sx: {
                                            borderRadius: "24px",
                                            marginTop: "20px",
                                        },
                                    },
                                }}
                                renderInput={(params) => (
                                    <CustomInput
                                        params={params}
                                        placeholder="Enter your breed"
                                        onClick={handleSearch}
                                    />
                                )}
                            />
                        ) : null}
                    </div>
                </div>
                <div className="header__card header__card2 content">
                    <h4 className="subtitle">Most Searched Breeds</h4>
                    <div className="header__title">
                        <h1 className="title">
                            66+ Breeds For you to discover
                        </h1>
                        <span onClick={() => navigate("/top")}>
                            see more <ArrowRight />
                        </span>
                    </div>
                    <div className="cards">
                        <CatCardComponent first breed={breedsTop[0]} />
                        <CatCardComponent breed={breedsTop[1]} />
                        <CatCardComponent breed={breedsTop[2]} />
                        <CatCardComponent breed={breedsTop[3]} />
                    </div>
                </div>
            </div>
        </header>
    );
};
