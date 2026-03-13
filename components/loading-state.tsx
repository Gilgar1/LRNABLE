export function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-semibold text-foreground">LOADING...</p>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your experience</p>
        </div>
      </div>
    </div>
  )
}
