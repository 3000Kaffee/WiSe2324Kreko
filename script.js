console.log("Hello world!");
// Definiere eine Klasse für die Galerie
class Gallery {
    images;
    currentIndex;
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.render();
    }
    render() {
        const container = document.getElementById('gallery-container');
        if (container) {
            container.innerHTML = '';
            container.style.display = 'flex';
            container.style.flexDirection = 'column'; // Buttons untereinander anordnen
            container.style.alignItems = 'center'; // Zentriert die Elemente horizontal
            const currentImage = this.images[this.currentIndex];
            const imgElement = document.createElement('img');
            imgElement.src = currentImage.src;
            imgElement.alt = currentImage.alt;
            container.appendChild(imgElement);
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'flex'; // Buttons nebeneinander anordnen
            buttonsContainer.style.justifyContent = 'center'; // Zentriert die Elemente horizontal
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.addEventListener('click', () => this.showPrevious());
            buttonsContainer.appendChild(prevButton);
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', () => this.showNext());
            buttonsContainer.appendChild(nextButton);
            container.appendChild(buttonsContainer);
        }
    }
    showPrevious() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.render();
    }
    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.render();
    }
}
// Beispielbilder
const images = [
    { src: './Bilder/Bild1000.jpg', alt: 'Image 1' },
    { src: './Bilder/Bild2000.jpg', alt: 'Image 2' },
    { src: './Bilder/Bild4000.jpg', alt: 'Image 3' }
];
// Initialisierung der Galerie mit den Bildern
const gallery = new Gallery(images);
//In diesem Beispiel wird eine Klasse `Gallery` definiert, die eine Liste von Bildobjekten enthält.
//Durch Klicken auf die Schaltflächen "Previous" und "Next" können Sie durch die Bilder navigieren. 
//Die `render()`-Methode aktualisiert das DOM entsprechend dem aktuellen Bild in der Galerie. Denken Sie daran, 
//das HTML-Dokument mit einem Container-Element mit der ID 'gallery-container' zu ergänzen, damit das Skript funktioniert.
//# sourceMappingURL=script.js.map