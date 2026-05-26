import { useState } from 'react'
import axios from 'axios'
import '../styles/Auth.css'
import { api } from '../services/api'

interface AuthProps {
  onLoginSuccess: (userData: any) => void
}

export function Auth({ onLoginSuccess }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Form Login
  const [loginData, setLoginData] = useState({
    usuario: '',
    senha: '',
  })

  // Form Cadastro
  const [signupData, setSignupData] = useState({
    nome: '',
    email: '',
    usuario: '',
    senha: '',
    confirmaSenha: '',
  })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignupData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!loginData.usuario.trim() || !loginData.senha.trim()) {
        setError('Preencha todos os campos')
        setLoading(false)
        return
      }

      const response = await api.post('/auth/login', {
        usuario: loginData.usuario,
        senha: loginData.senha,
      })

      if (response.data) {
        setSuccess('Login realizado com sucesso!')
        setTimeout(() => {
          onLoginSuccess({
            usuario: response.data.usuario,
            tipo: response.data.tipo || 'usuario',
          })
        }, 500)
      } else {
        setError('Usuário ou senha incorretos')
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Usuário ou senha incorretos')
      } else {
        setError('Erro ao fazer login')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!signupData.nome.trim() || !signupData.email.trim() || 
          !signupData.usuario.trim() || !signupData.senha.trim()) {
        setError('Preencha todos os campos')
        setLoading(false)
        return
      }

      if (signupData.senha !== signupData.confirmaSenha) {
        setError('As senhas não correspondem')
        setLoading(false)
        return
      }

      if (signupData.senha.length < 6) {
        setError('A senha deve ter no mínimo 6 caracteres')
        setLoading(false)
        return
      }

      if (!signupData.email.includes('@')) {
        setError('Email inválido')
        setLoading(false)
        return
      }

      await api.post('/usuarios', {
        nome: signupData.nome,
        email: signupData.email,
        usuario: signupData.usuario,
        senha: signupData.senha,
        tipo: 'usuario',
      })

      setSuccess('Cadastro realizado com sucesso! Faça login agora.')
      setTimeout(() => {
        setIsLogin(true)
        setSignupData({
          nome: '',
          email: '',
          usuario: '',
          senha: '',
          confirmaSenha: '',
        })
        setSuccess('')
      }, 2000)
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Erro ao cadastrar')
      } else {
        setError('Erro ao cadastrar')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>MARIDÃO DE ALUGUEL</h1>
          <p className="subtitle">Plataforma de Serviços</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(true)
              setError('')
              setSuccess('')
            }}
          >
            Login
          </button>
          <button
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(false)
              setError('')
              setSuccess('')
            }}
          >
            Cadastro
          </button>
        </div>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {isLogin ? (
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label htmlFor="login-usuario">Usuário</label>
              <input
                id="login-usuario"
                type="text"
                name="usuario"
                placeholder="Digite seu usuário"
                value={loginData.usuario}
                onChange={handleLoginChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-senha">Senha</label>
              <input
                id="login-senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                value={loginData.senha}
                onChange={handleLoginChange}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            <p className="help-text">
              Demo: usuário: <strong>admin</strong> | senha: <strong>123456</strong>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="auth-form">
            <div className="form-group">
              <label htmlFor="signup-nome">Nome Completo</label>
              <input
                id="signup-nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome completo"
                value={signupData.nome}
                onChange={handleSignupChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={signupData.email}
                onChange={handleSignupChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-usuario">Usuário</label>
              <input
                id="signup-usuario"
                type="text"
                name="usuario"
                placeholder="Escolha um usuário"
                value={signupData.usuario}
                onChange={handleSignupChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-senha">Senha</label>
              <input
                id="signup-senha"
                type="password"
                name="senha"
                placeholder="Escolha uma senha (mín. 6 caracteres)"
                value={signupData.senha}
                onChange={handleSignupChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-confirmaSenha">Confirmar Senha</label>
              <input
                id="signup-confirmaSenha"
                type="password"
                name="confirmaSenha"
                placeholder="Confirme sua senha"
                value={signupData.confirmaSenha}
                onChange={handleSignupChange}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
