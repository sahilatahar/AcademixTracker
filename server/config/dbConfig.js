import mongoose from "mongoose"

const connectDB = async () => {
	try {
		mongoose.connect(process.env.CONNECTION_URL)
		console.log("Database connected successfully!")
	} catch (error) {
		console.error(`Database connection Error: ${error.message}`)
	}
}

export default connectDB
