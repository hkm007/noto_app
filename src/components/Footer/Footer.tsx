import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className="footer-basic">
        <footer>
            <p className="copyright upload">Wanna contribute to the notes store ? Upload your notes <a href="https://forms.gle/tANdrmGzaePWZLyF7" className="footer-a">here</a>.</p>
            <p className="copyright contact-us">Feel free to contact us at <i><b>thenoto.app@gmail.com</b></i>.</p>
            <hr />
            <p className="copyright">Developed and designed by <a className='footer-a' href='https://www.linkedin.com/in/hkm007/'>Himanshu</a>.</p>
            <p className="copyright">
              Copyright © {new Date().getFullYear()}
            </p>
        </footer>
    </div>
  )
}

export default Footer