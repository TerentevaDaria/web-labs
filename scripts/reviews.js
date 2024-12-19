document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.getElementsByClassName("reasons")[0];
    const preloader = document.getElementsByClassName("preloader")[0];
    const err_div = document.getElementById("error");
    err_div.style.display = "none";
    

    async function getData() {
        const max = 500;
        let cnt = Math.floor(Math.random() * 20) + 1;
        let comments = [];
        for (let i = 0; i < cnt; i++) {
            let response;
            try {
                let post_id = Math.floor(Math.random() * max) + 1;
                response = await fetch(`https://jsonplaceholder.typicode.com/comments/${post_id}`);
            } catch(err) {
                throw err;
            }
            if (response.ok) {
                let ans = await response.json();
                comments.push(ans);
            } else {
                throw Error(response.statusText);
            }
        }
        return comments;
    }

    getData().then((comments) => {
        preloader.style.display = "none";
        comments.forEach((comment, index) => {
            let new_ = document.createElement('section');
            new_.classList.add('reason');
            new_.classList.add('reasons__note');
            let new_header = document.createElement('h2')
            new_header.classList.add('reason__header');
            new_header.textContent = comment.name;
            let new_text = document.createElement('p');
            new_text.classList.add('reason__text');
            new_text.textContent = comment.body;

            reviews.appendChild(new_);
            new_.appendChild(new_header);
            new_.appendChild(new_text);
        })
        }
    ).catch((err) => {
        preloader.style.display = "none";
        err_div.style.display = "block";
        err_div.textContent = "Что-то пошло не так";
    });
})