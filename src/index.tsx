import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const BaseHtml = () => {
	return (
		<html lang="en">
			<body>
				<h1>FUCKER</h1>
			</body>
		</html>
	);
};
const app = new Elysia()
	.use(html())
	.get("/", () => <BaseHtml />)
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
