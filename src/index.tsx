import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const BaseHtml = () => {
	return (
		<html lang="en">
			<body>

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
