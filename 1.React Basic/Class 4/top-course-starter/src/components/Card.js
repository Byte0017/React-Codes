import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({course}) => {
    return(
        <div className="card">
            <div>
                <img scr={course.image.url} ></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem" ></FcLike>
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    )
}