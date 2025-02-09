import "../styles/NurseryFees.css"
const NurseryFees = () => {
  return (
    <div>
  <header className="fees-header">
    <h1>Nursery Tuition and Fees</h1>
    <p>Explore the breakdown of tuition and fees</p>
  </header>

  <div className="fees-wrapper">
    <main className="fees-main">
      <section className="fees-section">
        <h2 className="fees-title-primary">Registration and Initial Fees</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Form Collection</td>
              <td>5,000/=</td>
            </tr>
            <tr>
              <td>Form Submission</td>
              <td>25,000/=</td>
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
              <td>160,000/= or 120,000/=</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>225,000/= or 185,000/=</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section className="fees-section">
        <h2>Tuition Fees</h2>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April - June</td>
              <td>160,000/= or 120,000/=</td>
            </tr>
            <tr>
              <td>July - September</td>
              <td>160,000/= or 120,000/=</td>
            </tr>
            <tr>
              <td>October - December</td>
              <td>- or 120,000/=</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>320,000/= or 360,000/=</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section className="fees-section">
        <h2>Additional Fees</h2>
        <ul className="list-fees">
          <li className="fees-item">Materials: 9 lined notebooks (Pg 200) for Baby, 10 for KGI & KGII</li>
          <li className="fees-item">Room notebooks: 2 (Pg 200)</li>
          <li className="fees-item">Drawing notebooks: 1 (Pg 200)</li>
          <li className="fees-item">Pencils: Box of 3</li>
          <li className="fees-item">Crayons: 1 box</li>
          <li className="fees-item">Covers for notebooks: 2</li>
          <li className="fees-item">Erasers: 5</li>
          <li className="fees-item">1 Ream of Paper</li>
          <li className="fees-item">Madrassa (Three Months): 90,000/=</li>
          <li className="fees-item">Graduation and Field Trip: 40,000/=</li>
          <li className="fees-item">Transportation: Varies based on location</li>
        </ul>
      </section>
  
      <section className="payment-info">
        <h2>Payment Information</h2>
        <p>All payments should be made to:</p>
        <p><strong>Islamic Bank PBZ</strong></p>
        <p><strong>Account No:</strong> 0726551001</p>
        <p><strong>Account Name:</strong> AB Higher Career Academic Ltd</p>
      </section>
    </main>
  </div>

  <footer className="fees-footer">
    <p>For more information, contact us at 0777343414 or 0776578657.</p>
  </footer>

    </div>
  )
}

export default NurseryFees