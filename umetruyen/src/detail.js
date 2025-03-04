function execute(url) {
    url = url.replace("umetruyen.net", "umetruyen.org")
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".post-title h1").first().text(),
            cover: doc.select(".summary_image img").first().attr("src"),
            author: doc.select(".author-content").first().text(),
            description: doc.select(".description-summary").html(),
            detail: doc.select(".post-content .post-content_item").html(),
            host: "https://umetruyen.org",
            ongoing: doc.select(".post-content .post-content_item").text().indexOf("OnGoing") !== -1
        });
    }
    return null;
}