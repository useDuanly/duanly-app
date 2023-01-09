export default function PageWithoutJSbasedForm() {
  return (
    <form action='api/form' method='post' className='formulario'>
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

      <input
        type='email'
        id='email'
        name='email'
        required
        placeholder='Escribe su Correooo'
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
