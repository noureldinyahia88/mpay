export async function ReceiveFun(data) {
    try {
      const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/receive`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        },
      });
  
      if (!response.ok) {
        const error = new Error('An error occurred while creating the admin');
        error.code = response.status;
        error.info = await response.json();
        console.error('Error:', error);
        throw error;
      }
  
      return response.json();
    } catch (error) {
      console.error('Unexpected error:', error);
      throw error;
    }
  }