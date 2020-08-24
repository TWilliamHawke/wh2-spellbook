const { useState, useEffect } = require("react")

export const useWindowWidth = () => {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 1280) {
      setShowWarning(true)
    }
    
    const resizeHandler = () => {
      if(window.innerWidth < 1280) {
        setShowWarning(true)
      } else {
        setShowWarning(false)
      }
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener(resizeHandler)

  }, [])


  return {showWarning}
}