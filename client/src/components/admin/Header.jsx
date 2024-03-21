import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user.user)

    return (
        <div className="flex items-center justify-between gap-4 border-b border-black py-2 pl-16 pr-4 sm:border-none sm:py-3 lg:pl-4 lg:pr-8">
            <h1 className="text-xl font-semibold sm:text-2xl">
                Welcome, {user.name.split(" ")[0]}
            </h1>
            <div className="flex items-center">
                <img
                    src={user.avatar}
                    alt={user.name.charAt(0)}
                    className="h-10 w-10 rounded-full object-cover"
                />
            </div>
        </div>
    )
}

export default Header
