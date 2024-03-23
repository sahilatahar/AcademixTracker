import noticeService from "../services/noticeService.js"

export const getNotices = async (req, res) => {
	try {
		const notices = await noticeService.getNotices()
		return res.status(200).json({ notices })
	} catch (error) {
		console.log("Error in getNotices:", error)
		return res.status(500).json({ message: "Something went wrong" })
	}
}

export const getNoticeByDate = async (req, res) => {
	try {
		const { date } = req.params
		const notices = await noticeService.getNoticeByDate(date)
		return res.status(200).json({ notices })
	} catch (error) {
		console.log("Error in getNoticeByDate:", error)
		return res.status(500).json({ message: "Something went wrong" })
	}
}

export const createNotice = async (req, res) => {
	try {
		const newNotice = await noticeService.createNotice(req.body)
		return res.status(200).json({ notice: newNotice })
	} catch (error) {
		console.log("Error in createNotice:", error)
		return res.status(500).json({ message: "Something went wrong" })
	}
}

export const updateNotice = async (req, res) => {
	try {
		const updatedNotice = await noticeService.updateNotice(req.body)
		return res.status(200).json({ notice: updatedNotice })
	} catch (error) {
		console.log("Error in updateNotice:", error)
		return res.status(500).json({ message: "Something went wrong" })
	}
}

export const deleteNotice = async (req, res) => {
	try {
		const { id } = req.params
		await noticeService.deleteNotice(id)
		return res.status(200).json({ message: "Notice deleted successfully" })
	} catch (error) {
		console.log("Error in deleteNotice:", error)
		return res.status(500).json({ message: "Something went wrong" })
	}
}
