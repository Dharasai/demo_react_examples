import React from 'react'

const Logout = () => {




    const handleLogoutSuccess = () => {
        setEmail("")
        setAuthorization('false')
        setKeepSignedIn(false)
        setLoggedIn(false)
        localStorage.setItem("email", "")
        localStorage.setItem("verifyAccount", false)
        if ('caches' in window) {
          caches.keys().then((names) => {
            names.forEach(name => {
              caches.delete(name);
            })
          });
          window.location.reload(true);
        }
      }
      
  return (
    <div>
      
    </div>
  )
}

export default Logout
