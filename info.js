 

     function formValidationExample() 
     {

        clearErrors();            
         return validSurname() && validPassword() && validPassword2();
  
      }  
 

 
      function validSurname() 
      {
        var stringName = document.querySelector("#firstName").value;
        stringName = stringName.trim();
        var stringLength = stringName.length;
 
         
        var countNonAlpha = 0;		
        stringName = stringName.toUpperCase();            
 
        for (var i=0;i<stringLength;i++ ) {
           if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) 
           {  
              countNonAlpha++;
              break;
           } 
        } 
        if  (countNonAlpha) 
        {
           showErrors("<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />");
           return false;
        }
        return true;
      }  
 
      function validPassword() 
      {
        var str = document.querySelector("#pnumber").value;
        str = str.trim();
 
        var stringLength = str.length;
 
        if (stringLength < 6) 
        { 
            showErrors("<p><mark>Password</mark><br /> - Must be 6 characters long<br />");
            return false;
        }  

        return true;
 
      }  

      function validPassword2()
      {
        var str = document.querySelector("#passwordv").value;
        str = str.trim();
        var stringLength = str.length;

        if (str!= validatePassword())
        {
            showErrors("<p><mark>Password Verify</mark><br /> - Passwords do not match<br />");
            return false;
        }
        else
        return true;
      }


      function validUsername()
      {
         var str = document.querySelector("#userName").value;
         str = str.trim();
         alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

         var stringLength = str.length;

         if (stringLength < 6)
         {
            showErrors("<p><mark>Username</mark><br /> - Must be 6 characters long<br />");
            return false;
         }

         if (!startWith(str) != alphabet)
         {
            showErrors("<p><mark>UserName</mark><br /> - Must start with alphabet<br />");
            return false;
         }
         return true;
      }
       
      function showErrors(messages) {
       
         document.querySelector('#errors').innerHTML += messages;
      }  
  
      function  clearErrors() {
 
         document.querySelector('#errors').innerHTML = "";
         document.querySelector('#firstName').focus();         
      }  