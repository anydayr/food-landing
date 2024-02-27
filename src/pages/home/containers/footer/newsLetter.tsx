import './form/styles/form.scss'
import useFormNewsLetter from './form/hooks/useForm'
function FormNewsLetter() {
  const { handleSubmit, onSubmit, register, errors, isValid } =
    useFormNewsLetter()

  return (
    <div className="form" style={{ padding: '91px 0px' }}>
      <h2 className="form__title">Contactanos</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form__container">
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            gap: '64.14px',
            flexDirection: 'column',
          }}
        >
          <div className="form__grid">
            <div className="input__container">
              <label
                htmlFor="first_name"
                style={{ display: 'flex', flexDirection: 'column' }}
                className={'label'}
              >
                Nombre
                <input
                  id="first_name"
                  className={errors.firstname ? 'input--error' : ''}
                  type="text"
                  {...register('firstname')}
                  placeholder="Nombre"
                />
              </label>
              {errors.firstname && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.firstname?.message}
                </span>
              )}
            </div>
            <div className="input__container">
              <label
                htmlFor="lastname"
                style={{ display: 'flex', flexDirection: 'column' }}
                className={'label'}
              >
                Apellido
                <input
                  className={errors.lastname ? 'input--error' : ''}
                  type="text"
                  {...register('lastname')}
                  placeholder="Apellido"
                />
              </label>
              {errors.lastname && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.lastname?.message}
                </span>
              )}
            </div>
            <div className="input__container">
              <label
                htmlFor="email"
                style={{ display: 'flex', flexDirection: 'column' }}
                className={'label'}
              >
                Email
                <input
                  className={errors.email ? 'input--error' : ''}
                  type="email"
                  {...register('email')}
                  placeholder="Email"
                  id="email"
                />
              </label>
              {errors.email && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="input__container">
              <label
                htmlFor="phone"
                style={{ display: 'flex', flexDirection: 'column' }}
                className={'label'}
              >
                Teléfono
                <input
                  className={errors.phone ? 'input--error' : ''}
                  type="text"
                  {...register('phone')}
                  placeholder="Teléfono"
                  id="phone"
                />
              </label>
              {errors.phone && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.phone?.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={!isValid ? 'button--disabled' : 'button'}
            disabled={!isValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormNewsLetter
