export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(btn => {
            btn.classList.remove('animated', 'slideInUp', 'slideInDown');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.downloadItem(this.path);
                this.downloadItem.classList.remove('animated');
            });
        });
    }
}