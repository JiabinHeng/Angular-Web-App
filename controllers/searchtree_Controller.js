angular.module('mapsApp')
.controller('SearchtreeCtrl', function ($scope) {

   var data1 = [];

    for (var i = 0; i < 2; i++) {
        var obj = {
            id: 'a'+i,
            name: 'Node ' + i,
            children: []
        };

        for (var j = 0; j < 3; j++) {
            var obj2 = {
                id: i+'b'+j,
                name: 'Node ' + i + '.' + j,
                children: [],
                selected: true
            };
            obj.children.push(obj2);
        }

        data1.push(obj);
    }

    data1[1].children[0].children.push({
        id: 'c'+j,
        name: 'Node sub_sub 1',
        children: [],
        selected: true
    });

    var testdata = [{
        id: 'world', 
        name:'The earth', 
        selected: true,
        children: [
            { id: 'AF', name:'Africa',
                children:[
                    { id: 'EG', name:'Egypt'},
                    { id: 'KE', name:'Kenya', 
                        children:[
                            { id: 'Nairobi', name:'Nairobi',population:'sasasasasasa'},
                            { id: 'Mombasa', name:'Mombasa'},
                        ] 
                    },
                    { id: 'SD', name:'Sudan', 
                        children:[
                            { id: 'Khartoum', name:'Khartoum'}
                        ]
                    }
                ]
            },
            { id: 'AS', name:'Asia'},
            { id: 'OC', name:'Oceania'},
            { id: 'EU', name:'Europe'},
            { id: 'NA', name:'North America'},
            { id: 'SA', name:'South America'}
        ]
    }];

/*
            { id: 'AS', name:'Asia', type:'continent', parent: 'world' },
                { id: 'CN', name:'China', type:'country', parent: 'AS' },
                { id: 'IN', name:'India', type:'country', parent: 'AS' },
                { id: 'RU', name:'Russia', type:'country', parent: 'AS' },
                { id: 'MN', name:'Mongolia', type:'country', parent: 'AS' },
            { id: 'OC', name:'Oceania', type:'continent', population:'21 million', parent: 'world'},
            { id: 'EU', name:'Europe', type:'continent', parent: 'world' },
                { id: 'DE', name:'Germany', type:'country', parent: 'EU' },
                { id: 'FR', name:'France', type:'country', parent: 'EU' },
                { id: 'ES', name:'Spain', type:'country', parent: 'EU' },
                { id: 'IT', name:'Italy', type:'country', parent: 'EU' },
            { id: 'NA', name:'North America', type:'continent', parent: 'world' },
            { id: 'SA', name:'South America', type:'continent', parent: 'world' }
*/
    $scope.data = angular.copy(testdata);
    $scope.datas = angular.copy(testdata);       


    $scope.CustomCallback = function (item, selectedItems) {
        if (selectedItems !== undefined && selectedItems.length >= 80) {
            return false;
        } else {
            return true;
        }
    };

});