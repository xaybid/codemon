// import React, { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Simulated user data for demonstration
//     const userData = [
//       { id: 1, name: 'John Doe', email: 'john@example.com' },
//       { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//       { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
//     ];

//     setUsers(userData);
//   }, []);

//   return (
//     <Container>
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Admin Dashboard
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Total Users: {users.length}
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           User Details:
//         </Typography>
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>
//               Name: {user.name}, Email: {user.email}
//             </li>
//           ))}
//         </ul>
//       </Box>
//     </Container>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Assuming the API endpoint is '/api/users'
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        {loading ? (
          <Typography variant="body1">Loading...</Typography>
        ) : (
          <div>
            <Typography variant="h6" gutterBottom>
              Total Users: {users.length}
            </Typography>
            <Typography variant="h6" gutterBottom>
              User Details:
            </Typography>
            <ul>
              {users.map(user => (
                <li key={user._id}>
                  Name: {user.name}, Email: {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default AdminDashboard;
