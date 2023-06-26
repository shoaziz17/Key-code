const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `

    <div class="key">
        <small>key</small>
        <h1>${e.key == " " ? "Space" : e.key}</h1>
    </div>
    
    <div class="key">
        <small>code</small>
        <h1>${e.code}</h1>
    </div>
    
    <div class="key">
        <small>keyCode</small>
        <h1>${e.keyCode}</h1>
    </div>
    `;
});
