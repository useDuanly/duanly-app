import Layout from '../components/Layout/Layout'
import Loader from '../components/Loader'
import Message from '../components/Message'
import useForm from '../hooks/useForm'

const initialForm = {
  nombre: '',
  email: '',
  comments: '',
}

const validationsForm = form => {
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexComments = /^.{1,255}$/
  let errors = {}
  if (!form.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido"
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' solo acepta letas"
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campos 'Email' acepta "
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campos  'Comments' acepta 255 carapteres"
  }

  return errors
}

export default function From() {
  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    response,
  } = useForm(initialForm, validationsForm)

  return (
    <Layout title='Duanly || Contacto' h1Title={'Contacto'}>
      <section className='container'>
        <form
          onSubmit={handleSubmit}
          className='row was-validated'
          autoComplete='true'
        >
          <div className='col-12 g-3 mt-3'>
            <label htmlFor='nombre' className='form-label'>
              Nombre (requerido)
            </label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              className='form-control is-invalid'
              required
              value={form.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Escribe su Nombre'
              minLength={'2'}
            />
            {errors && <p className='invalid-feedback '>{errors.nombre}</p>}
          </div>
          <div className='col-12 g-3 mt-1'>
            <label htmlFor='email' className='form-label'>
              Correo (requerido)
            </label>

            <input
              type='email'
              id='email'
              name='email'
              required
              className='form-control is-invalid'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Escribe su Correo'
            />
            {errors && <p className='invalid-feedback'>{errors.email}</p>}
          </div>
          <div className='col-12 g-3 mt-1'>
            <label htmlFor='comments' className='form-label'>
              Comentarios (requerido)
            </label>

            <textarea
              name='comments'
              value={form.comments}
              cols='50'
              className='form-control is-invalid '
              rows='5'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Escribe tus comentarios'
              required
            ></textarea>
            {errors && <p className='invalid-feedback'>{errors.comments}</p>}
          </div>

          <button
            type='submit'
            className='btn btn-secondary m-1'
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          {response && (
            <div>
              {loading && <Loader />}
              {response && (
                <Message msg='Los datos has sido Enviados' bgColor='#198754' />
              )}
            </div>
          )}
        </form>
      </section>
    </Layout>
  )
}
