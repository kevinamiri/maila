
export const getIdJsonUrl = (id, langKey, jsonData) => {
    if (id !== "undefined") {
        let res;
        switch (langKey) {
            //we get the name of the page according the id
            case "en":
                res = jsonData[id].en;
                break;
            case "sv":
                res = jsonData[id].sv;
                break;
            case "zh":
                res = jsonData[id].zh;
                break;
            default:
                return " ";
        }
        return res;
    } else {
        console.log("missed id in the getIdUrl() function!");
    }
};

export const startPath = (langKey, langsMenu, basename, _url) => {
    const lengthLangKey = langKey.length;
    let indx;
    indx = _url.indexOf(basename);
    const basePath = _url.slice(lengthLangKey + 2, indx);
    return basePath;
};

export const check_path = (langKey, _url, id_article, jsonData) => {
    let basename;
    if (id_article !== "undefined") {
        basename = getIdJsonUrl(id_article, langKey, jsonData);
    }
    return [basename, id_article];
};

export const setLangsMenu = (langsMenu, id, basePath, jsonData) => {
    if (id !== "undefined") {
        langsMenu[0].link =
            `/en/${basePath}` + getIdJsonUrl(id, "en", jsonData) + "";
        langsMenu[1].link =
            `/sv/${basePath}` + getIdJsonUrl(id, "sv", jsonData) + "";
    } else {
        console.log("missed id in the setLangsMenu() function!");
    }
};
