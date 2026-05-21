const movableCardContainer = document.getElementById('movable-card-container');
const movableCards = document.querySelectorAll('.movable');



//random location

let amountCards = movableCards.length;
let angleSize = 360 / amountCards;
let radius = 300; //in px

for (let i = 0; i < amountCards; i++) {

    const card = movableCards[i];
    console.log(i + " movable card: " + card.id + " angle: " + i*angleSize);

    //x0, y0 start pos von cards (cards-mittelpunkt)
    const cardX = movableCardContainer.getBoundingClientRect().left - (card.offsetWidth / 2);
    const cardY = movableCardContainer.getBoundingClientRect().top - (card.offsetHeight / 2);

    //x50, y50 von movable card dings
    const midX = movableCardContainer.getBoundingClientRect().width / 2;
    const midY = movableCardContainer.getBoundingClientRect().height / 2;

    let circleX = radius * Math.cos((i * angleSize) * (Math.PI / 180));
    let circleY = radius * Math.sin((i * angleSize) * (Math.PI / 180));

    circleX = Math.round(circleX);
    circleY = Math.round(circleY);

    console.log("circleX " + circleX + " circleY " + circleY);

    card.style.left = (midX + circleX + cardX) + 'px';
    card.style.top = (midY + circleY + cardY) + 'px';
}

//movement even listeners
for (const card of movableCards) {
    let isDragging = false;
    let startX, startY;

    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        card.style.cursor = 'grabbing';
        card.style.zIndex = '9999';        //brings the card to the front
        card.style.position = 'absolute';

        startX = e.clientX - card.getBoundingClientRect().left;
        startY = e.clientY - card.getBoundingClientRect().top;

        card.style.userSelect = 'none';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        card.style.cursor = 'grab';
        card.style.zIndex = '1';
        card.style.userSelect = 'auto';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            card.style.left = (e.clientX - startX) + 'px';
            card.style.top = (e.clientY - startY) + 'px';
        }
    });
}