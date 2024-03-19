import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1]
		let decodedData
		if (token) {
			decodedData = jwt.verify(token, "sEcReT")
			req.userId = decodedData?.id
		}

		if (!req.userId)
			return res.status(401).json({ message: "UnAuthorized" })

		next()
	} catch (error) {
		console.log(error)
	}
}

export default auth
