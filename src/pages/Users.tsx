import React, { useEffect, useState } from 'react';

const Users = () => {
	const [users, setUsers] = useState<any[]>([]);

	const getUsers = async () => {
		const url = 'https://jsonplaceholder.typicode.com/users';

		const fetchData = await fetch(url);
		const usersData = await fetchData.json();

		setUsers(usersData);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Address</th>
				</tr>
			</thead>
			<tbody>
				{users.length > 0
					? users.map((user) => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.address.street}</td>
							</tr>
					  ))
					: null}
			</tbody>
		</table>
	);
};

export default Users;
