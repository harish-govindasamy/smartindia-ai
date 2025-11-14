export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="luxury-footer">
      <p className="footer-copyright">© {currentYear} SmartIndia.Ai</p>
    </footer>
  )
}
