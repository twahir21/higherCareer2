import "../styles/PrimaryFees.css"
const PrimaryFees = () => {
  return (
    <div>

  <header className="fees-header-primary">
    <h1>Primary Tuition and Fees</h1>
    <p>Explore the breakdown of tuition and fees</p>
  </header>

  <div className="fees-wrapper">
    <main className="fees-main">
      <section className="fees-section">
        <h2 className="fees-title">Registration and Initial Fees</h2>
        <table>
          <thead>
            <tr>
              <th className="primary">Item</th>
              <th className="primary">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Form Collection</td>
              <td>5,000/=</td>
            </tr>
            <tr>
              <td>Form Submission</td>
              <td>30,000/=</td>
            </tr>
            <tr>
              <td>Health Checkups</td>
              <td>20,000/=</td>
            </tr>
            <tr>
              <td>T-Shirts</td>
              <td>15,000/=</td>
            </tr>
            <tr>
              <td>First Three/Four Months Fees</td>
              <td>200,000/= or 150,000/=</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>270,000/= or 220,000/=</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section className="fees-section">
        <h2>Tuition Fees</h2>
        <table>
          <thead>
            <tr>
              <th className="primary">Period</th>
              <th className="primary">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April - June</td>
              <td>200,000/= or 150,000/=</td>
            </tr>
            <tr>
              <td>July - September</td>
              <td>200,000/= or 150,000/=</td>
            </tr>
            <tr>
              <td>October - December</td>
              <td>- or 150,000/=</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>400,000/= or 450,000/=</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section className="fees-section">
        <h2>Additional Fees</h2>
        <ul className="list-fees">
          <li className="fees-item-primary">Materials: 1 ream of paper</li>
          <li className="fees-item-primary">Madrassa (Three Months): 90,000/=</li>
          <li className="fees-item-primary">Graduation and Field Trip: 40,000/=</li>
          <li className="fees-item-primary">Transportation: Varies based on location</li>
        </ul>
      </section>
  
      <section className="payment-info-primary">
        <h2>Payment Information</h2>
        <p>All payments should be made to:</p>
        <p><strong>Islamic Bank PBZ</strong></p>
        <p><strong>Account No:</strong> 0726551001</p>
        <p><strong>Account Name:</strong> AB Higher Career Academic Ltd</p>
      </section>
    </main>
  </div>

  <footer className="fees-footer-primary">
    <p>For more information, contact us at 0777343414 or 0776578657.</p>
  </footer>

    </div>
  )
}

export default PrimaryFees