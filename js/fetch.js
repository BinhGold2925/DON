fetch("http://localhost:3001/comments")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let htmls = "";
        data.forEach(item => {
            htmls += `
                <div class="product-item">
                    ${item.content}
                </div>
            `
        });
        const divProduct =document.querySelector("#comments");
        divProduct.innerHTML = htmls;
    })