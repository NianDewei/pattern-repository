import { app } from "./app"

app.listen(8080, () => {
	console.log("Server is running on port 8080")
    console.log(`http://localhost:8080`)
	// console.log(JSON.stringify(process.env))
})
