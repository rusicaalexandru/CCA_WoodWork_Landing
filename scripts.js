// scripts.js

/**
 * Adds images to the gallery section.
 * @param {Array} works - An array of work objects containing title, description, and images.
 */
function add_imgs(works) {
    const galleryRow = document.getElementById('gallery-row');

    works.forEach((work, index) => {
        // Create column
        const col = document.createElement('div');
        col.className = 'col-md-4 gallery-image';

        // Create card
        const card = document.createElement('div');
        card.className = 'card';

        // Create carousel if multiple images
        let imageElement;
        if (work.images.length > 1) {
            const carouselId = `carousel-${index}`;
            const carousel = document.createElement('div');
            carousel.id = carouselId;
            carousel.className = 'carousel slide';
            carousel.setAttribute('data-ride', 'carousel');

            const carouselInner = document.createElement('div');
            carouselInner.className = 'carousel-inner';

            work.images.forEach((imgSrc, imgIndex) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = imgIndex === 0 ? 'carousel-item active' : 'carousel-item';

                const img = document.createElement('img');
                img.src = imgSrc;
                img.className = 'd-block w-100';
                img.alt = work.title;

                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);
            });

            carousel.appendChild(carouselInner);

            // Add carousel controls
            const prevLink = document.createElement('a');
            prevLink.className = 'carousel-control-prev';
            prevLink.href = `#${carouselId}`;
            prevLink.setAttribute('role', 'button');
            prevLink.setAttribute('data-slide', 'prev');
            prevLink.innerHTML = `
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            `;

            const nextLink = document.createElement('a');
            nextLink.className = 'carousel-control-next';
            nextLink.href = `#${carouselId}`;
            nextLink.setAttribute('role', 'button');
            nextLink.setAttribute('data-slide', 'next');
            nextLink.innerHTML = `
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            `;

            carousel.appendChild(prevLink);
            carousel.appendChild(nextLink);

            imageElement = carousel;
        } else {
            // Single image
            imageElement = document.createElement('img');
            imageElement.src = work.images[0];
            imageElement.className = 'card-img-top';
            imageElement.alt = work.title;
        }

        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Title
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = work.title;

        cardBody.appendChild(cardTitle);

        // Description (optional)
        if (work.description) {
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = work.description;
            cardBody.appendChild(cardText);
        }

        // Assemble card
        card.appendChild(imageElement);
        card.appendChild(cardBody);
        col.appendChild(card);

        // Append to gallery row
        galleryRow.appendChild(col);
    });
}
