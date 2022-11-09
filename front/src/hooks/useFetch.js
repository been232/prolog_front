import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Api from "../api/Api";
import { red } from "@mui/material/colors";

function useFetch(page, type, searchKeyword, loaded) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [last, setLast] = useState(0);
    const fetchData = useCallback((type, last, searchKeyword) => {
        switch (type) {
            case "all":
                return Api.getAllPost(last);
            case "recent":
                return Api.getRecentPost(last);
            case "search":
                if (loaded) return Api.getSearchResult(searchKeyword, last);
                break;
            default:
                break;
        }
    });

    const sendQuery = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const res = await fetchData(type, last, searchKeyword);
            console.log(res);
            if (res != null) {
                setList([...list, ...res.data.data]);
                if (type === "all") setLast((prev) => prev + 15);
                else setLast(res.data.data[res.data.data.length - 1].id);
            }
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, [fetchData, type, last, searchKeyword, list]);

    useEffect(() => {
        sendQuery();
    }, [page]);
    useEffect(() => {
        setList([]);
        setLast(0);
    }, [type]);
    return { list, setList, setLast };
}

export default useFetch;
