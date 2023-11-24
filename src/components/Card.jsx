import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import 'tippy.js/animations/scale.css';
import { A } from "@solidjs/router";
import starRating from "../utils/starRating";
import { onCleanup } from "solid-js";

export default (props) => {

    const tooltipRef = (el, text) => {
        if (el) {
          const instance = tippy(el, {
            content: text,
            placement: "bottom",
            arrow: false,
            animation: "scale"
          });

          onCleanup(() => {
            instance.destroy();
          });

        }

      };

    return (
    <div className="w-40">
        <A class="max-w" href={`${props.type}/${props.id}`}>

        <div class="max-w-xs bg-white rounded-xl overflow-hidden shadow-md` shadow-gray-700">
            <img class="w-full" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + props.poster_path} alt={props.title} 
            ref={(el) => tooltipRef(el, props.overview)}
            loading="lazy"/>
        </div>

        <div class="pl-2 py-4">
            <div class="font-bold text-lg mb-2 leading-5" ref={(el) => tooltipRef(el, props.original_title)}>{props.title}</div>
            <p class="text-gray-700 text-base">{props.release_date}</p>
            <p class="text-gray-700 text-base flex items-center mt-2" ref={(el) => tooltipRef(el, `${props.vote_count} głosów`)}>{starRating(Math.round(props.vote_average / 2))}</p>
        </div>
    </A>
    </div>
    )
}