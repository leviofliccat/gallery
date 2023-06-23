var imageThumbs = document.getElementById("image-thumbs"); //HTML div that stores list of thumbnails
var currentImage = document.getElementById("current-image"); //HTML img of currently selected/displayed image
var imageCaption = document.getElementById("caption");
var x = 0;
const people = ['david','mel','mitch','riley','will','babykuma'];
const imageContainer = document.getElementById("top-thumbs");

for (image of images) {
    if (image.split('_')[0] == people[x]) {
        // var thumb = document.createElement("img"); //create a new img element for each image 
        // thumb.src = "images/" + image; //assign src attribute; file path
        // thumb.classList.add("thumb"); //assign class thumb (created and styled in CSS file)
        // imageThumbs.appendChild(thumb); //add new thumbnail image to the HTML div (list of thumbs)
        var gridElement = document.createElement('div');
        gridElement.class = "col";
        var imgElement = document.createElement('img');
        imgElement.src = "images/" + image;
        imgElement.classList.add("thumb");
        gridElement.appendChild(imgElement);
        imageContainer.appendChild(gridElement);
        x++;
        imgElement.addEventListener( //add event handler 
            "click", function() { //triggers when given thumbnail is clicked
                currentImage.src = this.src; //assign currently selected image src to the selected image
                
                var name1 = currentImage.src.split('/')[9];
                var name = name1.split('_')[0];
                // console.log(name);
                var captionText = captions[name];
                var node = document.createTextNode(captionText);
                imageCaption.replaceChild(node, imageCaption.childNodes[0]);
            }
        );
    }
}



const captions = {david: "David, the Ultimate Gamer - inspired by Yasuo (League of Legends)",
mel: "Melissa, the Ultimate Animal Caretaker",
mitch: "Mitch, the Ultimate Shitposter - inspired by various memes and Eminem",
riley: "Riley, the Ultimate Druggie (Canadian eshay)",
will: "William, the Ultimate God Complex",
babykuma: "Babykuma, the Game Master"
};




function nextImage(){
    var name = currentImage.src.split('/')[9];
    var currentImageIndex = images.indexOf(name) + 1;
    if (currentImageIndex > images.length - 1){
        currentImageIndex = 0;
    }
    var newImage = images[currentImageIndex];
    currentImage.src = 'images/' + newImage;
    var newName = newImage.split('_')[0];
    var captionText = captions[newName];
    var node = document.createTextNode(captionText);
    imageCaption.replaceChild(node, imageCaption.childNodes[0]);
};

function prevImage(){
    var name = currentImage.src.split('/')[9];
    var currentImageIndex = images.indexOf(name) - 1;
    if (currentImageIndex < 0){
        currentImageIndex = images.length - 1;
    }
    var newImage = images[currentImageIndex];
    currentImage.src = 'images/' + newImage;
    var newName = newImage.split('_')[0];
    var captionText = captions[newName];
    var node = document.createTextNode(captionText);
    imageCaption.replaceChild(node, imageCaption.childNodes[0]);
};
