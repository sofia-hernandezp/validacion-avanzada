document.addEventListener("DOMContentLoaded",()=>{
    const password1 =  document.getElementById('password1')
    const password2 =  document.getElementById('password2')
    const terminosCheck =  document.getElementById('terminos')
    const terminosMensaje = document.getElementById('terminosMessage')
    const botonModal = document.getElementById('botonModal')
    const linkToTerms = document.querySelector('.btn-link.text-primary');
    const checkTerminosContenedor = document.getElementsByClassName('form-check')[0]
    
    const verificarTerminos = () => {
        document.querySelector('label[for="terminos"]').classList.remove('is-invalid','is-valid', 'text-danger','text-success');
        document.querySelector('#terminos').classList.remove('bg-danger','bg-success')
        botonModal.classList.remove('text-danger','text-success');
      if(!terminosCheck.checked){
          terminosMensaje.setCustomValidity("Acepta los terminos y condiciones")
          document.querySelector('label[for="terminos"]').classList.add('is-invalid', 'text-danger');
          document.querySelector('#terminos').classList.add('bg-danger');
          botonModal.classList.add('text-danger');
      }else{
          terminosMensaje.setCustomValidity("");
          document.querySelector('label[for="terminos"]').classList.add('is-valid', 'text-success');
          document.querySelector('#terminos').classList.add('bg-success');
          botonModal.classList.add('text-success');
      }
  }
    password2.addEventListener('input',()=>{
        if(password1.value !== password2.value){ 
            console.log("no coincide")
            password2.setCustomValidity("Las contraseñas deben coincidir")
        }else{
            password2.setCustomValidity("")
        }
    })
    terminosCheck.addEventListener('change',verificarTerminos)
    function Validacion() {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {  
              verificarTerminos()    
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
          
              form.classList.add('was-validated')
            }, false)
          })
      }
      Validacion()
    })

    
