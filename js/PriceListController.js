
function PriceListController ($scope) {

    $scope.Products = [
        {
            title : 'Glitter',
            sort : 100,
            items : [
                {
                    desc : 'Set of three glitter tea light holders in an organza bag ( includes three tea lights )',
                    price : 2.5,
                    disc : 0.0,
                    img : '',
                    available : false    // Add this property (set to false) to mark items as sold out
                },
                {
                    desc : 'Candle holders',
                    price : 1.5,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Dipped candle holders',
                    price : 1.00,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Glitter stem vase',
                    price : 1.50,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Large glitter jars',
                    price : 2.00,
                    disc : 0.0,
                    img : ''
                }

            ]
        },
        {
            title : 'Pen Pots',
            sort : 200,
            items : [
                {
                    desc : 'Daisy',
                    price : 1.50,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Flower',
                    price : 1.50,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Purple Heart',
                    price : 1.50,
                    disc : 0.0,
                    img : '',
                    notAvailableToOrder : false
                },
                {
                    desc : 'Material flowers',
                    price : 2.00,
                    disc : 0.0,
                    img : '',
                    available : false    // Add this property (set to false) to mark items as sold out
                },
                {
                    desc : 'Pink handwriting',
                    price : 1.50,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Purple and pink flowers',
                    price : 2.00,
                    disc : 0.0,
                    img : ''
                }

            ]
        },
        {
            title : 'Miscellany',
            sort : 300,
            items : [
                {
                    desc : 'Large storage jar',
                    price : 2.00,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Set of two dinner candle holders',
                    price : 2.50,
                    disc : 0.0,
                    img : '',
                    notAvailableToOrder : false
                },
                {
                    desc : 'Large candle holder',
                    price : 2.0,
                    disc : 0.0,
                    img : '',
                    notAvailableToOrder : false
                },
                {
                    desc : 'Coin tray',
                    price : 1.50,
                    disc : 0.0,
                    img : ''
                }

            ]
        },
        {
            title : 'Lavender',
            sort : 350,
            items : [
                {
                    desc : 'Lavender bag',
                    price : 1.0,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Set of 3 lavender bags in a organza gift bag',
                    price : 3.00,
                    disc : 0.0,
                    img : ''
                }
            ]
        }
    ];

}
