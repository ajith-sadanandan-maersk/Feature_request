
import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";



function Footer() {
  return (
    <>  
      <div className={styles.footer}>
   
    <footer className="text-center text-lg-start bg-light text-muted p-0">
  

     <section className="my-5 mx-5 mb-5 p-0">
     <div className={styles.footerdetails}>
      <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         <Image src="/Maersk-Logo.png" width="180" height="100">

         </Image>
          
          <p>
          © A.P. Moller - Maersk
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            About Us
          </h6>
          <p>
            <a  href="#!" className={styles.textreset}>Career</a>
          </p>
          <p>
            <a  href="#!" className={styles.textreset}>Maersk Growth</a>
          </p>
          <p>
            <a  href="#!" className={styles.textreset}>News & advisories</a>
          </p>
          <p>
            <a  href="#!" className={styles.textreset}>Sustainablity</a>
          </p>
          <p>
            <a  href="#!" className={styles.textreset}>Whistleblower</a>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact Us
          </h6>
          <p>
            <a href="#!" className={styles.textreset}>Investors</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Press</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Procurement</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Support</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         <h6 className="text-uppercase fw-bold mb-4">
           Terms and Conditions
          </h6>
          <p>
            <a href="#!" className={styles.textreset}>Privacy Policy</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Brand Protection</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Cookie policy</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Cookie Preferences</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         <h6 className="text-uppercase fw-bold mb-4">
           Point to Point services
          </h6>
          <p>
            <a href="#!" className={styles.textreset}>Supply Chain and Logistics</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Transportation Services</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Vessel Schedules</a>
          </p>
          <p>
            <a href="#!" className={styles.textreset}>Container Sales</a>
          </p>
        </div>
      
      </div>
    </div>
    </div>
  </section>
  <section
    className="d-flex justify-content-center justify-content-lg-between p-0 border-bottom"> 
    
    </section>
    
    <div className={styles.footerdetails2}>
  <div className="text-center p-4">
    <p>
    
    <a className={(`${styles.textreset} fw-bold mx-5`)} href="#!">Linkedin</a>
    
    
    <a className={(`${styles.textreset} fw-bold mx-5`)} href="#!">Facebook</a>
    
    
    <a className={(`${styles.textreset} fw-bold mx-5`)} href="#!">Twitter</a>

    
    <a className={(`${styles.textreset} fw-bold mx-5`)} href="#!">Instagram</a>

    
    <a className={(`${styles.textreset} fw-bold mx-5`)} href="#!">YouTube</a>
    
    </p>
  </div>
  </div>
 
</footer>

</div>
</>
  )
}

export default Footer