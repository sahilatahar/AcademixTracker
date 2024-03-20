import jwt from "jsonwebtoken"

const verifyStudent = async (req, res, next) => {
	try {
		const token = req.headers.authorization?.split(" ")[1]
		if (!token)
			return res
				.status(401)
				.json({ message: "UnAuthorized, No token provided" })
		let decodedData
		if (token) {
			decodedData = jwt.verify(token, process.env.JWT_SECRET)
			req.userId = decodedData?.id
		}

		if (!req.userId)
			return res.status(401).json({ message: "UnAuthorized" })
		if (decodedData.role !== "student") {
			return res.status(403).json({ message: "Forbidden" })
		}

		next()
	} catch (error) {
		console.log(error)
		return res
			.status(500)
			.json({
				message:
					"The token provided is invalid or has expired. Please log in again.",
			})
	}
}

export default verifyStudent
