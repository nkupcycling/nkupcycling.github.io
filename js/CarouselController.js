function CarouselController ($scope) {

    var slides = [
        {
            img     : "images/Amethyst.jpg",
            h1      : "Upcycling",
            p       : "A new use for our old things"
        },
        {
            img     : "images/Emerald.jpg",
            h1      : "Perfect for Gifts",
            p       : "Mother's Day, Easter, Birthdays"
        },
        {
            img     : "images/Sapphire.jpg", // /home/jeff/Desktop/Upcycling/images/products/IMG_0451.JPG
            h1      : "Available in different colours",
            p       : "Amethyst, Sapphire or Emerald"
        }

    ];


    $scope.Slides = _.shuffle (slides);

}
