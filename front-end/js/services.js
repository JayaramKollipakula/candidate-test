angular.service('rug', function ($resource) {
    return $resource('api/rugs/:rugId', {}, {
        update: {method:'PUT'}
    });
});
