import React, { useEffect, useState } from 'react'

export const ScrollMeComponent = () => {

    const [isScrollIconHidden, setIsScrollIconHidden] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsScrollIconHidden(true)
        }, 2600);
    }, [])

    return (
        <div className={`scroll-icon ${isScrollIconHidden ? "scroll-icon--hidden visibility" : ""}`}></div>
    )
}
