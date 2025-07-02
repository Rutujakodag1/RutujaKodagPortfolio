import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-6 border">
  <div className="container mx-auto px-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Rutuja Kodag. All rights reserved.</p>
    <div className="mt-2 flex justify-center gap-4">
      <a href="https://github.com/Rutujakodag1" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
      <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/rutuja-kodag-878251285/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
      <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:rutujakodag0@gmail.com" className="hover:text-teal-400">
      <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</footer>

  )
}
