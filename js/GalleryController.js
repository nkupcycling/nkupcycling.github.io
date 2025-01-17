
function GalleryController ($scope, $timeout) {

    var gallery = [
        {
            img : 'images/gallery/1.jpg',
            title : 'Pink Handwriting',
            desc : 'An attractive and useful pen pot'
        },
        {
            img : 'images/gallery/2.jpg',
            title : 'Daisy',
            desc : 'Can be used as a pen holder or flower pot'
        },
        {
            img : 'images/gallery/3.jpg',
            title : 'Storage Jar',
            desc : 'Decorated storage for all those little bits and pieces'
        },
//        {
//            img : 'images/gallery/4.jpg',
//            title : 'Lavender Bags',
//            desc : 'Lorem ipsum...'
//        },
        {
            img : 'images/gallery/5.jpg',
            title : 'Flower',
            desc : ''
        },
        {
            img : 'images/gallery/6.jpg',
            title : 'Purple Heart',
            desc : 'A handy storage jar'
        },
        {
            img : 'images/gallery/7.jpg',
            title : 'Coin Tray',
            desc : 'Convenience for coins'
        },
        {
            img : 'images/gallery/8.jpg',
            title : 'Candle Holder',
            desc : ''
        },
        {
            img : 'images/gallery/9.jpg',
            title : 'Material Flowers',
            desc : 'Useful for paint brush storage'
        },
        {
            img : 'images/gallery/10.jpg',
            title : 'Large Candle Holder',
            desc : 'Perfect for the dinner table'
        },
        {
            img : 'images/gallery/11.jpg',
            title : 'Lavender Bags',
            desc : 'Available individually or in a gift set'
        },
        {
            img : 'images/gallery/12.jpg',
            title : 'Large Candle Stick Holders',
            desc : 'Available in a variety of textures'
        },
        {
            img : 'images/gallery/13.jpg',
            title : 'Lavender Bag Gift Set',
            desc : 'Three in an organza gift bag'
        }

    ];

    $scope.Gallery = _.shuffle(gallery);

    var shuffleAbout = function () {
        $scope.Gallery = _.shuffle(gallery);
        $timeout (shuffleAbout, 10000);
    }

    $timeout (shuffleAbout, 10000);

}
