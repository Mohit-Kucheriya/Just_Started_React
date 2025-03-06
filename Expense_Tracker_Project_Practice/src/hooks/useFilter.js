import { useState } from "react";

export function useFilter(dataList, callbackFn) {
    const [query, setQuery] = useState("");

    const filteredData = dataList.filter((data) =>
        callbackFn(data).toLowerCase().includes(query.toLowerCase())
    );
    return [filteredData, setQuery];
}
