// inserting the images
function insertImage() {

    document.querySelector('.box').forEach(image => {

        if(image.innerText.length !== 0) {
            if (image.innerText == 'Wpan' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='alling allpawn' src="$(image.innerText).png" alt="">`
                image.style.cursor = 'pointer'
            }

            else {

                image.innerHTML = `${image.innerText} <img class='alling' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()