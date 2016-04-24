// Following is angular JS functionality

var demoApp = angular.module('yourapp', []);

function RouteCtrl($route) {

    var self = this;

    $route.when('/rug', {template:'tpl/welcome.html'});

    $route.when('/rug/:rugID', {template:'tpl/rug-details.html', controller:rugDetailCtrl});

    $route.otherwise({redirectTo:'/rug'});

    $route.onChange(function () {
        self.params = $route.current.params;
    });

    $route.parent(this);

    this.addrug = function () {
        window.location = "#/rug/add";
    };

}

//Functionality for fetching all Rugs

function rugListCtrl(rug) {

    this.rug = rug.query();

}

//Functionality for fetching detail of particular Rug

function rugDetailCtrl(rug) {

    this.rug = rug.get({rugID:this.params.rugID});

//Functionality to add or update a Rug

    this.saverug = function () {
        if (this.rug.id > 0)
            this.rug.$update({rugID:this.rug.id});
        else
            this.rug.$save();
        window.location = "#/rug";
    }

//Functionality to Delete a Rug

    this.deleterug = function () {
        this.rug.$delete({rugID:this.rug.id}, function() {
            alert('rug ' + rug.name + ' deleted')
            window.location = "#/rug";
        });
    }

}