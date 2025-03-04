function execute() {
    let response = fetch("https://truyenbns.com/reader/theloai");
    if (response.ok) {
        let doc = response.html();
        let genre = [];
        doc.select("div.view-content .theloai-row a").forEach(e => genre.push({
            title: e.text(),
            input: "https://truyenbns.com" + e.attr("href"),
            script: "gen.js"
        }));
        return Response.success(genre);
    }

    return null;
}