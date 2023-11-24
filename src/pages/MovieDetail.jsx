import { Route, useParams } from "@solidjs/router";

export default () => {

    const params = useParams();

    console.log(params.movieid);

    return (
        <p>{params.movieid}</p>
    )
}