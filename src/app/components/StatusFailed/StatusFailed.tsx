export default function StatusFailed() {
    return (
      <div className="flex items-center justify-center mb-10">
        <div className="bg-red-500 text-white px-12 py-12 rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-lg font-medium">Status FAILED</h2>
            <p>Try again please.</p>
          </div>
        </div>
      </div>
    )
  }