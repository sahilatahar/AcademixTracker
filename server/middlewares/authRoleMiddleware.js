import jwt from "jsonwebtoken"
import {
	routePermissions,
	updatePermissions,
} from "../utils/routePermissions.js"

const authRoleMiddleware = async (req, res, next) => {
	try {
		// Extract the token from the authorization header
		const token = req.headers.authorization?.split(" ")[1]

		// Check if the token is provided
		if (!token) {
			return res
				.status(401)
				.json({ message: "Unauthorized, No token provided" })
		}

		// Verifying the token
		const decodedData = jwt.verify(token, process.env.JWT_SECRET)
		req.userId = decodedData?.id
		const userRole = decodedData?.role

		// Getting the route from the request
		const route = req.baseUrl

		// Checking if the user role is allowed to access the route
		if (!routePermissions[route].includes(userRole)) {
			return res.status(403).json({
				message: "You are not authorized to access this route.",
			})
		}

		// Check update permission (modified)
		if (req.method === "PUT" || req.method === "PATCH") {
			const updateAllowed =
				Object.keys(updatePermissions).includes(route) &&
				updatePermissions[route].includes(userRole) &&
				req.body.action === "update-password"

			if (!updateAllowed) {
				return res.status(403).json({
					message: "You are not authorized to update this route.",
				})
			}
		}

		next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message:
				"The token provided is invalid or has expired. Please log in again.",
		})
	}
}

export default authRoleMiddleware
