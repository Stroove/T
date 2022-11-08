import React, { Suspense } from "react";
import Preloader from "../preloader/Preloader";

export const Suspence = (Component) => {
    return (
        <Suspense fallback={<Preloader />}>
            <Component  />
        </Suspense>
    )
}