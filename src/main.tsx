import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports.js'

try {
  Amplify.configure(awsconfig)
  console.log('Amplify configured successfully')
} catch (error) {
  console.error('Error configuring Amplify:', error)
}

try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log('React app mounted successfully')
} catch (error) {
  console.error('Error mounting React app:', error)
  // Fallback content
  document.getElementById("root")!.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Rassooq - راس السوق</h1>
      <p>Loading application...</p>
      <p style="color: red;">Error: ${error}</p>
    </div>
  `
}
