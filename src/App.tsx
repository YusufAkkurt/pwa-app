import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from 'layout/Layout';
import Home from 'pages/Home';
import About from 'pages/About';
import Users from 'pages/Users';

function App() {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ path: '', element: <Home /> },
				{ path: 'about', element: <About /> },
				{ path: 'users', element: <Users /> }
			]
		}
	]);
}

export default App;
