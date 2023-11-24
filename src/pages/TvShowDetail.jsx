import { Route, useParams } from "@solidjs/router";

export default () => {

    const params = useParams();

    console.log(params.tvshowid);

    return (
        <p>{params.tvshowid}</p>
    )
}