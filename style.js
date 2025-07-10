body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
}

.form {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: #eee;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
}

footer {
  margin-top: auto;
  text-align: center;
  padding: 10px;
  background-color: #ddd;
}
