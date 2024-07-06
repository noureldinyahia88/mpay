export async function LoginFun(userData) {
  const response = await fetch('https://smart-pay.onrender.com/api/v0/users/login', {
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

  const { token, data: { role, name, _id, smartEmail, defaultCard: { balance, number },phone } } = await response.json();
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
  localStorage.setItem('phone', phone);
  localStorage.setItem('name', name);
  localStorage.setItem('id', _id);
  localStorage.setItem('smartEmail', smartEmail);
  localStorage.setItem('defaultCard', JSON.stringify({ balance, number, _id }));

  return { token, role, name, _id, smartEmail, defaultCard: { balance, number, _id },phone };
}
