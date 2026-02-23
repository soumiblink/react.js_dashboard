const Emergency = () => {
  return (
    <div style={{ 
      backgroundColor: '#ff0000', 
      color: '#ffffff', 
      padding: '50px',
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
        🚨 EMERGENCY TEST PAGE 🚨
      </h1>
      <p style={{ marginBottom: '10px' }}>
        If you can see this RED page with white text, then:
      </p>
      <ul style={{ marginLeft: '30px', marginTop: '20px' }}>
        <li>✅ React is working</li>
        <li>✅ Routing is working</li>
        <li>✅ The app is rendering</li>
      </ul>
      <div style={{ 
        backgroundColor: '#00ff00', 
        color: '#000000', 
        padding: '20px', 
        marginTop: '30px',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          GREEN BOX TEST
        </h2>
        <p>If you see this green box, inline styles are working!</p>
      </div>
      <div style={{ 
        backgroundColor: '#0000ff', 
        color: '#ffffff', 
        padding: '20px', 
        marginTop: '20px',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          BLUE BOX TEST
        </h2>
        <p>If you see this blue box, everything is rendering!</p>
      </div>
      <div style={{ marginTop: '30px', fontSize: '18px' }}>
        <p><strong>What to do next:</strong></p>
        <p>1. Take a screenshot of this page</p>
        <p>2. Tell me what colors you see</p>
        <p>3. Check browser console (F12) for any errors</p>
      </div>
    </div>
  )
}

export default Emergency
