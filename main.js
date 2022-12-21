var app = angular.module("App", []);
app.controller("myController", function($scope){
    var uid=1;
    $scope.contacts = [
        {id: 0, 'name' : 'Chien', 'email' : 'phamngocchien@gmail.com', 'phone' : '012345689'}
    ];
    $scope.saveContact = function() {
        if ($scope.newcontact.id == null) {
            $scope.newcontact.id = uid++;
            $scope.contacts.push($scope.newcontact);
        } else {
            for (i in $scope.contacts) {
                if ($scope.contacts[i].id == $scope.newcontact.id) {
                    $scope.contacts[i] = $scope.newcontact;
                }
            } 
        }
        $scope.newcontact = {};
    }
    $scope.delete = function(id) {
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
              $scope.contacts.splice(i, 1);
              $scope.newcontact = {};
            }
        }
    }
    $scope.edit = function(id) {
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i])
            }
        }
    }
});



let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fullname = id("name"),
    password = id("password"),
    email = id("email"),
    phone = id("phone"),
    
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(fullname, 0, "Ten dang nhap khong hop le");
        engine(email, 1, "Email khong hop le");
        engine(phone, 2, "so dien thoai khong hop le");
        engine(password, 3, "mat khau khong hop le");

             
});
let engine = (id, serial, message) => {
    if(id.value.trim()==="") {
        errorMsg[serial].innerHTML = message;
        id.style.border="2px solid red";
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    } else {
        errorMsg[serial].innerHTML="";
        id.style.border="2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
}