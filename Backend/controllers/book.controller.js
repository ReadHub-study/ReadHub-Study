import cloudinary from '../config/cloudinary.js'

export const generatePdfSignature = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' })

    const timestamp = Math.round(Date.now() / 1000)

    const paramsToSign = {
      timestamp,
      folder: 'documents',
      resource_type: 'raw',
      allowed_formats: 'pdf,epub',
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET,
    )

    res.json({
      timestamp,
      signature,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      folder: 'documents',
      resource_type: 'raw',
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
