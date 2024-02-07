/* Hier ist ein einfaches Beispiel für eine Galerie mit TypeScript, 
bei der man durch Klicken auf Schaltflächen links und rechts neue Bilder erhalten kann.
Bitte beachten Sie, dass dies nur eine grundlegende Implementierung ist und je nach Ihren Anforderungen erweitert werden kann:

typescript */
// Definiere eine Schnittstelle für ein Bildobjekt
document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio('./Einsamkeit.mp3');
    audio.loop = true;
    audio.play();
});



interface Image {
    src: string;
    alt: string;
}

console.log("Hello world!");

// Definiere eine Klasse für die Galerie
class Gallery {
    private images: Image[];
    private currentIndex: number;

    constructor(images: Image[]) {
        this.images = images;
        this.currentIndex = 0;
        this.render();
    }



private render(): void {
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


    private showPrevious(): void {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.render();
    }

    private showNext(): void {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.render();
    }
}

// Beispielbilder
const images: Image[] = [
    { src: './Bilder/Bild1000.jpg', alt: 'Image 1' },
    { src: './Bilder/Bild2000.jpg', alt: 'Image 2' },
    { src: './Bilder/Bild4000.jpg', alt: 'Image 3' },
    { src: './Bilder/Bild550_10.jpg', alt: 'Image 4' },
    
];

// Initialisierung der Galerie mit den Bildern
const gallery = new Gallery(images);


//In diesem Beispiel wird eine Klasse `Gallery` definiert, die eine Liste von Bildobjekten enthält.
//Durch Klicken auf die Schaltflächen "Previous" und "Next" können Sie durch die Bilder navigieren. 
//Die `render()`-Methode aktualisiert das DOM entsprechend dem aktuellen Bild in der Galerie. Denken Sie daran, 
//das HTML-Dokument mit einem Container-Element mit der ID 'gallery-container' zu ergänzen, damit das Skript funktioniert.