const url = "https://dog.ceo/api/breeds/image/random/10";

const request = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const images = data.message.map(img => {
        return `
        <div class="col-md-4" id="">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top"
                src="${img}"
                alt="Card image cap">
                <div class="card-body">
                    ${img}
                </div>
            </div>
        </div>`});
    const markup = images.join(" ");
    document.querySelector(".row").innerHTML = markup;
};

request(url);