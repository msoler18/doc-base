const plugin = (hook, vm) => {
    hook.doneEach(function() {
        // Side menu tooltip
        let title, action;
        document.querySelectorAll(".sidebar-nav .section-link").forEach(menu => {
            title = menu.innerText;
            action = menu.getAttribute("href");
            menu.parentElement.innerHTML = `<div class="tooltip">
                <span class="tooltiptext">${title}</span>
                <a class="section-link" href="${action}">${title}</a>
            </div>`;

        });

    })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)