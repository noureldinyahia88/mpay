export async function SignFun(userData) {
    const response = await fetch('https://smart-pay.onrender.com/api/v0/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the token');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { token, data: { role } } = await response.json();
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  
    return { token, role };
  }
  