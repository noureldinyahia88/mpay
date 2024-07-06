// Fetch admin Transactions
export async function fetchAdminTransactions() {
    const url = "https://smart-pay.onrender.com/api/v0/transactions/adminTransactions";
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error("No token found");
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  }