export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Cliente
    return '';
  }

  // Servidor (SSR / build)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};