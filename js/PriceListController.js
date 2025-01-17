function PriceListController ($scope) {

    $scope.Products = [
        {
            title : 'Easter Specials',
            sort : 10,
            items : [
                {
                    desc : 'Dipped candle holders in easter gift wrap. Available in pink, blue or green.',
                    price : 2.0,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Glitter egg cups in easter gift wrap. Available in pink, blue or green.',
                    price : 1.25,
                    disc : 0.0,
                    img : ''
                },
            ]
        },
        {
            title : 'Glitter',
            sort : 100,
            items : [
                {
                    desc : 'Set of three glitter tea light holders in an organza bag (includes three tea lights). Available in blue, pink and green.',
                    price : 3.0,
                    disc : 0.0,
                    img : '',
                    notAvailableToOrder : false    // Add this property (set to false) to mark items as sold out
                },
                {
                    desc : 'Candle holders',
                    price : 1.5,
                    disc : 0.0,
                    img : ''
                },
                {
                    desc : 'Dipped candle holders',
                    price : 1.50,
                    disc : 0.0,
                    img : '',
                    notAvailableToOrder: false
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
                    img : '',
                    available : false
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
                    img : '',
                    available : true
                },
                {
                    desc : 'Set of 3 lavender bags in a organza gift bag',
                    price : 3.00,
                    disc : 0.0,
                    img : '',
                    available : true
                }
            ]
        }
    ];

}
