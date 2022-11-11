function checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response)
      if (response.status === 'connected') {  
  
            // Logged into your app and Facebook.
            datos();    
          }
    });
  
    function datos() {
  
          FB.api('/me?fields=name,email,picture', function(response) {
  
  
             console.log(response)
             const name=response.name;
             const email=response.email;
             const picture=response.picture.data.url;
             const id=response.id;
  
             var xhr = new XMLHttpRequest();
             xhr.open('POST', 'http://localhost:3000/loginFB');
             xhr.setRequestHeader('Content-Type', 'application/json');
             xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
             xhr.responseType = 'json';
             xhr.send(JSON.stringify({'name' :name ,'email' : email ,'id' : id ,'picture' : picture}));
             xhr.onload = function() {
  
                if(xhr.response.errorXHR)
                  { 
  
                   overlayError=document.getElementById('overlayError')
                   mensajeError=document.getElementById('mensajeError')
                   mensajeError.innerHTML=xhr.response.errorXHR 
                   overlayError.style.visibility='visible'
                  }
                  else{
                    if (xhr.response.result == 'redirect') {
                       //redirecting to main page from here.
                       window.location.replace(xhr.response.url);
                      }
                  }
              };
          })
      }    
  }