export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async event => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      nombre: event.target.mombre.value,
      email: event.target.email.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit} className='formulario'>
      <label htmlFor='nombre'>Nombre (requerido)</label>
      <input
        type='text'
        id='nombre'
        name='nombre'
        required
        placeholder='Escribe su Nombre'
        pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
        title='Nombre sólo acepta letras y espacios en blanco'
      />

      <label htmlFor='subject'>Asunto (requerido)</label>
      <input
        type='text'
        name='subject'
        placeholder='Asunto a tratar'
        title='El Asunto es requerido'
        required
      />
      <label htmlFor='email'>Correo (requerido)</label>

      <input
        type='email'
        id='email'
        name='email'
        required
        placeholder='Escribe su Correo'
        pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
        title='Email incorrecto'
      />
      <label htmlFor='comments'>Comentarios (requerido)</label>

      <textarea
        name='comments'
        cols='50'
        rows='5'
        placeholder='Escribe tus comentarios'
        title='Tu comentario no debe exceder los 255 caracteres'
        data-pattern='^.{1,255}$'
        required
      ></textarea>

      <button type='submit'>Submit</button>
    </form>
  )
}
