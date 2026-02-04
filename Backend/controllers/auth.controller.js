import User from '../models/User.js'
import bcrypt from 'bcrypt'
import {
  generateAccessToken,
  generateRefreshToken,
} from '../services/generateToken.js'

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    })

    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already in use' })
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: 'Password must be at least 6 characters' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })
    await newUser.save()
    return res
      .status(201)
      .json({ message: 'User registered successfully', data: newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    const accessToken = generateAccessToken({
      id: user._id,
      email: user.email,
    })
    const refreshToken = generateRefreshToken({ id: user._id })

    await User.updateOne({ _id: user._id }, { $set: { refreshToken } })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    return res.status(200).json({ message: 'Login successful', accessToken })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken)
      return res.status(401).json({ error: 'Refresh token missing' })

    const tokenExists = await User.findOne({ refreshToken })
    if (!tokenExists)
      return res.status(403).json({ error: 'Invalid refresh token' })

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid refresh token' })

      const newAccessToken = generateAccessToken(user)
      res.json({ accessToken: newAccessToken })
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token missing' })
    }
    await User.updateOne({ refreshToken }, { $unset: { refreshToken: 1 } })
    res.clearCookie('refreshToken')
    res.json({ message: 'User logged out successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const forgetPassword = (req, res) => {
  res.send('Forget password endpoint')
}

export const passwordTokenVerification = (req, res) => {
  res.send('Password token verification endpoint')
}

export const resetPassword = (req, res) => {
  res.send('Reset password endpoint')
}
