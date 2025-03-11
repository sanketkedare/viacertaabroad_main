// Function to parse and decode a JWT token
const parseAndDecodeJwt = (token) => {
    if (!token) return null;
  
    try {
      const [header, payload, signature] = token.split('.');
  
      if (!payload) {
        console.error("Invalid token format.");
        return null;
      }
  
      // Decode Base64Url (payload)
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(char => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
  
      // Parse the decoded payload as JSON
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid or expired token:", error);
      return null;
    }
  }
  
  export default parseAndDecodeJwt;
  