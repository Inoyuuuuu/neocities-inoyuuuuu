const inspirocardButton = document.getElementById('inspirocard-button');
const inspirocardImage = document.getElementById('inspirocard-image');

inspirocardButton.addEventListener('click', async (e) => {
    inspirocardImage.src = await getImage();
});

async function getImage() {
  const apiUrl = "https://inspirobot.me/api?generate=true";

  try {
    const data = await fetch(apiUrl);
    const imageUrl = await data.text();
    return imageUrl;

  } catch(error) {
    console.error(error);
  }

}