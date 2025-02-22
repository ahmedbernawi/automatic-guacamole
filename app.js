angular.module('portfolioApp', [])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.projects = [
        { title: 'Project 1', tech: 'Angular, Firebase', image: 'project1.jpg' },
        { title: 'Project 2', tech: 'React, Node.js', image: 'project2.jpg' }
    ];

    $scope.skills = ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Responsive Design'];
    
    $scope.sendMessage = function() {
        if($scope.contactForm.$valid) {
            const formData = {
                name: $scope.name,
                email: $scope.email,
                message: $scope.message
            };

            // Add Formspree integration
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if(response.ok) {
                    alert('Message successfully sent!');
                    $scope.name = '';
                    $scope.email = '';
                    $scope.message = '';
                    $scope.$apply();
                }
            });
        }
    };

    $scope.languages = {
        en: {
            home: 'Home',
            projects: 'Projects',
            contact: 'Contact'
        },
        ar: { /* Arabic translations */ },
        es: { /* Spanish translations */ },
        fr: { /* French translations */ }
    };

    $scope.currentLang = 'en';
}]);


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

