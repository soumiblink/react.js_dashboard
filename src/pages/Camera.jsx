import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import { Camera as CameraIcon, ArrowLeft } from 'lucide-react'

const Camera = () => {
  const webcamRef = useRef(null)
  const navigate = useNavigate()
  const [capturing, setCapturing] = useState(false)

  const capture = () => {
    setCapturing(true)
    const imageSrc = webcamRef.current.getScreenshot()
    localStorage.setItem('capturedPhoto', imageSrc)
    setTimeout(() => {
      navigate('/photo-result')
    }, 300)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="card-premium p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Capture Photo</h1>

        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-auto"
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: 'user',
            }}
          />
        </div>

        <button
          onClick={capture}
          disabled={capturing}
          className="w-full mt-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
        >
          <CameraIcon className="w-5 h-5" />
          <span>{capturing ? 'Capturing...' : 'Capture Photo'}</span>
        </button>
      </div>
    </div>
  )
}

export default Camera
