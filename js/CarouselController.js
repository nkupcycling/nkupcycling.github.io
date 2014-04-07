function CarouselController ($scope) {

    var slides = [
        {
            img     : 'images/Easter1.jpg',
            h1      : 'Easter Gifts',
            p       : 'A variety of egg cups and candle holders'
        },
        {
            img     : 'images/Easter2.jpg',
            h1      : 'Easter Gifts',
            p       : 'Gift wrapped ready for Easter'
        },
        {
            img     : "images/Amethyst.jpg",
            h1      : "Upcycling",
            p       : "A new use for our old things"
        },
        {
            img     : "images/Emerald.jpg",
            h1      : "Perfect for Gifts",
            p       : "Easter, Birthdays or just to show someone you care"
        },
        {
            img     : "images/Sapphire.jpg", // /home/jeff/Desktop/Upcycling/images/products/IMG_0451.JPG
            h1      : "Available in different colours",
            p       : "Amethyst, Sapphire or Emerald"
        },
        {
            img     : 'images/SetOf3.jpg',
            h1      : 'Tea lights and holders',
            p       : 'Set of 3 in an organza gift bag'
        }

    ];


    $scope.Slides = slides; //_.shuffle (slides);

}
