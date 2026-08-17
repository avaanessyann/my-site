import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Ошибка соединения с сервером:', error)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="logo">Instagram</div>

        <p className="auth-subtitle">
          Войдите, чтобы продолжить
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Имя пользователя или email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">
            Войти
          </button>
        </form>

        <div className="divider">
          <span>ИЛИ</span>
        </div>

        <a
          href="https://www.facebook.com/login/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-login"
        >
          Войти через Facebook
        </a>

        <a
          href="https://www.instagram.com/accounts/password/reset/"
          target="_blank"
          rel="noopener noreferrer"
          className="forgot-password"
        >
          Забыли пароль?
        </a>
      </div>

      <div className="register-card">
        <span>Нет аккаунта?</span>

        <a
          href="https://www.instagram.com/accounts/emailsignup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Создать новый аккаунт
        </a>
      </div>
    </div>
  )
}

export default Login