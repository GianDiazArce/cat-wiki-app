import "./scoreStyles.css";

interface Props {
    number: 1 | 2 | 3 | 4 | 5;
}

export const ScoreComponent = ({ number }: Props) => {
    return (
        <div className="score">
            <div
                className={`score__bar ${
                    number >= 1 ? "score__bar--active" : null
                }`}
            />
            <div
                className={`score__bar ${
                    number >= 2 ? "score__bar--active" : null
                }`}
            />
            <div
                className={`score__bar ${
                    number >= 3 ? "score__bar--active" : null
                }`}
            />
            <div
                className={`score__bar ${
                    number >= 4 ? "score__bar--active" : null
                }`}
            />
            <div
                className={`score__bar ${
                    number >= 5 ? "score__bar--active" : null
                }`}
            />
        </div>
    );
};
