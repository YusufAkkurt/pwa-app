export default function serviceWorkerDev() {
	const serviceWorkerPath = `${process.env.PUBLIC_URL}/service-worker.js`;
	navigator.serviceWorker.register(serviceWorkerPath);
}
