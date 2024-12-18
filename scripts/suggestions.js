document.addEventListener('DOMContentLoaded', function() {
    const suggestion_form = document.getElementsByClassName('suggestion-form')[0];
    const name_input = document.getElementById("user_name");
    const textarea = document.getElementById("user_reason");

    const container = document.getElementsByClassName("reasons")[0];

    suggestion_form.addEventListener('submit', () => {
        const name = name_input.value;
        const reason = textarea.value;

        const data = JSON.parse(localStorage.getItem("storage")) || [];
        data.push({
                        header: name,
                        text: reason,
                    });

        localStorage.setItem("storage", JSON.stringify(data));
    });

    const data = JSON.parse(localStorage.getItem("storage")) || [];
    data.forEach(item => {
        let new_reason = document.createElement('section');
        new_reason.classList.add('reason');
        new_reason.classList.add('reasons__note');
        let new_reason_header = document.createElement('h2')
        new_reason_header.classList.add('reason__header');
        new_reason_header.textContent = item.header;
        let new_reason_text = document.createElement('p');
        new_reason_text.classList.add('reason__text');
        new_reason_text.textContent = item.text;

        container.appendChild(new_reason);
        new_reason.appendChild(new_reason_header);
        new_reason.appendChild(new_reason_text);
    });
})