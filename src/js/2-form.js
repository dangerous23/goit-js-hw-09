
    let formData = {
      email: "",
      message: ""
    };
    const form = document.querySelector('.feedback-form');
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      formData = JSON.parse(storedData);
      form.email.value = formData.email;
      form.message.value = formData.message;
    }
    form.addEventListener('input', function(event) {
      const { name, value } = event.target;
      formData[name] = value;
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
      } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        formData = { email: "", message: "" };
      }
    });
 