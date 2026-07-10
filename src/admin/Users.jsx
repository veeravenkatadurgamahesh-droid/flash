function Users() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Users</h1>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mahesh</td>
            <td>mahesh@gmail.com</td>
            <td>Customer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;