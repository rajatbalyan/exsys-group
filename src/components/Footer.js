import React from 'react'
import styles from '../App.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
            <h3>Exsys Components</h3>
            <div className={styles.footer_text}>
                <p>exsyscomponents@gmail.com ; info@exsysgroup.com</p>
                <p>+91-9911117791 ; +91-8743951372</p>
                <p>Plot No. 1, Khedi Enclave - Part 1, Ballabgarh - Sohna Road, Faridabad - 121004</p>
            </div>
            <p>©2012 by Exsys Components</p>
    </div>
  )
}

export default Footer