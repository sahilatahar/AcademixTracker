import Notice from "../models/notice.js"

const getNotices = async () => {
	try {
		const notices = await Notice.find({})
		return { notices }
	} catch (error) {
		throw new Error("Error in getNotices service: " + error.message)
	}
}

const getNoticeByDate = async (date) => {
	try {
		const notices = await Notice.find({ date })
		return { notices }
	} catch (error) {
		throw new Error("Error in getNoticeByDate service: " + error.message)
	}
}

const createNotice = async ({ from, content, topic, date, noticeFor }) => {
	try {
		const existingNotice = await Notice.findOne({ topic, content, date })
		if (existingNotice) {
			throw new Error("Notice already exists")
		}
		const newNotice = await Notice.create({
			from,
			content,
			topic,
			noticeFor,
			date,
		})
		return { notice: newNotice }
	} catch (error) {
		throw new Error("Error in createNotice service: " + error.message)
	}
}

const updateNotice = async (id, { from, content, topic, date, noticeFor }) => {
	try {
		const notice = await Notice.findById(id)
		if (!notice) {
			throw new Error("Notice not found")
		}
		notice.from = from
		notice.content = content
		notice.topic = topic
		notice.date = date
		notice.noticeFor = noticeFor
		await notice.save()
		return { notice }
	} catch (error) {
		throw new Error("Error in updateNotice service: " + error.message)
	}
}

const deleteNotice = async (id) => {
	try {
		const notice = await Notice.findById(id)
		if (!notice) {
			throw new Error("Notice not found")
		}
		await notice.deleteOne()
	} catch (error) {
		throw new Error("Error in deleteNotice service: " + error.message)
	}
}

export default {
	getNotices,
	getNoticeByDate,
	createNotice,
	updateNotice,
	deleteNotice,
}
