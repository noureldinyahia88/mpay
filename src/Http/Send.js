export async function SendFun(data) {
    try {
      const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/send`, {
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

  export async function SendFunCrad(data) {
    try {
      const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/send`, {
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
  export async function SendFunPhone(data) {
    try {
      const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/send`, {
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

  // buy Crypto
  export async function BuyCryptofun(data) {
    try {
      const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/buyOrSellCrypto`, {
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

    // Deposit
    export async function Despositfun(data) {
      try {
        const response = await fetch(`https://smart-pay.onrender.com/api/v0/transactions/rechargeOrDeposit`, {
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