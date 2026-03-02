import { useState } from 'react'
import { employeeService } from '../services/api'
import { RefreshCw, CheckCircle, XCircle } from 'lucide-react'

const ApiTest = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const testApi = async () => {
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      console.log('Testing API...')
      const data = await employeeService.getEmployees()
      console.log('API Response:', data)
      setResult(data)
    } catch (err) {
      console.error('API Error:', err)
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">API Test Page</h1>
        <p className="text-neutral-400">Test the employee API endpoint</p>
      </div>

      <div className="card-premium p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">API Details</h2>
          <div className="text-sm text-neutral-400 space-y-1">
            <p><strong>URL:</strong> https://backend.jotish.in/backend_dev/gettabledata.php</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Body:</strong> {`{ "username": "test", "password": "123456" }`}</p>
          </div>
        </div>

        <button
          onClick={testApi}
          disabled={loading}
          className="btn-primary px-6 py-3 flex items-center gap-2"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Testing...' : 'Test API'}
        </button>
      </div>

      {error && (
        <div className="card-premium p-6 border-red-500/50">
          <div className="flex items-start gap-3">
            <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Error</h3>
              <p className="text-neutral-300">{error}</p>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="card-premium p-6 border-emerald-500/50">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">Success</h3>
              <p className="text-neutral-400 text-sm">API returned data</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium mb-2">Data Type:</h4>
              <p className="text-neutral-300">{Array.isArray(result) ? 'Array' : typeof result}</p>
            </div>

            {!Array.isArray(result) && typeof result === 'object' && (
              <div>
                <h4 className="text-white font-medium mb-2">Object Keys:</h4>
                <p className="text-neutral-300">{Object.keys(result).join(', ')}</p>
              </div>
            )}

            <div>
              <h4 className="text-white font-medium mb-2">Employee Count:</h4>
              <p className="text-neutral-300">
                {Array.isArray(result) 
                  ? result.length 
                  : result?.data?.length 
                  || result?.employees?.length
                  || result?.result?.length
                  || 'N/A'}
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">First Employee (if exists):</h4>
              <pre className="bg-neutral-900 p-4 rounded-lg text-xs text-neutral-300 overflow-auto">
                {JSON.stringify(
                  Array.isArray(result) ? result[0] : result?.data?.[0] || result,
                  null,
                  2
                )}
              </pre>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Full Response:</h4>
              <pre className="bg-neutral-900 p-4 rounded-lg text-xs text-neutral-300 overflow-auto max-h-96">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ApiTest
