import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
    isLoading: boolean;
}

export const LoadingComponent = ({ isLoading }: Props) => {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
