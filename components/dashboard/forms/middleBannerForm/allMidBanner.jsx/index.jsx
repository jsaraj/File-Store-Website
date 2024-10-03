"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const AllMidBanner = () => {

    const [banner, setBanner] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        axios.get(`https://sarajfileshop.liara.run/api/middle-banner?pn=${pageNum}`)
            .then(d => console.log("ok all banner"))
            .catch(e => console.log(e))
    })

    return (
        <div>

        </div>
    );
}

export default AllMidBanner;