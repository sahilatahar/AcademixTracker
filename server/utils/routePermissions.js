const routePermissions = {
	"/admin": ["admin"],
	"/attendance": ["course-supervisor", "faculty", "admin"],
	"/course": ["admin", "hod"],
	"/course-supervisor": ["course-supervisor", "faculty", "admin", "hod"],
	"/department": ["admin", "hod"],
	"/faculty": ["faculty", "admin", "hod", "course-supervisor"],
	"/hod": ["hod", "admin"],
	"/notice": ["admin", "hod"],
	"/marks": ["admin", "faculty"],
	"/semester": ["admin", "hod"],
	"/student": ["student"],
	"/subject": ["admin", "hod"],
}

const updatePermissions = {
	"/faculty/update-password/": ["faculty"],
	"/course-supervisor/update-password/": ["course-supervisor"],
	"/hod/update-password/": ["hod"],
}

export { routePermissions, updatePermissions }
