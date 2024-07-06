// Fetch function
export async function fetchLastTrants() {
    const url = "https://smart-pay.onrender.com/api/v0/transactions/";
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
      return result.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  }

  // Fetch Notifications
export async function fetchNotifications() {
  const url = "https://smart-pay.onrender.com/api/v0/notifications";
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
    return result.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}
// Fetch Card
export async function fetchCards() {
  const url = "https://smart-pay.onrender.com/api/v0/users/cards";
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
    return result.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}
// Fetch Portitfilo
export async function fetchPortifilo() {
  const url = "https://smart-pay.onrender.com/api/v0/users/crypto";
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
    return result.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}

// Fetch Balance
export async function fetchBalance() {
  const url = "https://smart-pay.onrender.com/api/v0/users/balance";
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
    localStorage.setItem('balance', result.data.balance)
    return result.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}