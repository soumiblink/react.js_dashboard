import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'

const PhotoResult = () => {
  const navigate = useNavigate()
  const photo = localStorage.getItem('capturedPhoto')

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = photo
    link.download = `photo-${Date.now()}.jpg`
    link.click()
  }

  if (!photo) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-400">No photo captured</p>
        <button
          onClick={() => navigate('/camera')}
          className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Go to Camera
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/camera')}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Camera</span>
      </button>

      <div className="card-premium p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Captured Photo</h1>

        <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-6">
          <img src={photo} alt="Captured" className="w-full h-auto" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleDownload}
            className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Photo</span>
          </button>
          <button
            onClick={() => navigate('/camera')}
            className="px-8 py-4 bg-neutral-900 border border-neutral-800 hover:border-indigo-500 hover:bg-neutral-800 text-white font-medium rounded-xl transition-all duration-200"
          >
            Retake
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoResult
