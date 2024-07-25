document.getElementById('depositButton').addEventListener('click', async () => {
  const accountId = document.getElementById('accountId').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch('http://localhost:3000/api/v1/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accountId, amount })
    });

    const data = await response.json();
    document.getElementById('response').innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById('response').innerText = `Error: ${error.message}`;
  }
});
